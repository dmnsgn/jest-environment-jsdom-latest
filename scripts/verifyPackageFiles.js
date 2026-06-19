'use strict';

const assert = require('assert');
const {execFileSync} = require('child_process');
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const pkg = require('../package.json');

function collectReferences(value, references = new Set()) {
  if (!value) {
    return references;
  }
  if (typeof value === 'string') {
    if (value.startsWith('./')) {
      references.add(value.slice(2));
    }
    return references;
  }
  if (Array.isArray(value)) {
    value.forEach(item => collectReferences(item, references));
    return references;
  }
  if (typeof value === 'object') {
    Object.values(value).forEach(item => collectReferences(item, references));
  }
  return references;
}

const references = collectReferences({
  exports: pkg.exports,
  main: pkg.main,
  types: pkg.types,
});

fs.mkdirSync(path.join(rootDir, 'build'), {recursive: true});
const mainPath = path.join(rootDir, 'build', 'index.js');
const previousMain = fs.existsSync(mainPath)
  ? fs.readFileSync(mainPath, 'utf8')
  : null;

try {
  fs.writeFileSync(mainPath, 'module.exports = {};\n');
  fs.rmSync(path.join(rootDir, 'build', 'index.d.ts'), {force: true});

  execFileSync('npm', ['run', 'build:ts'], {
    cwd: rootDir,
    env: {...process.env, YARN_IGNORE_PATH: '1'},
    stdio: 'inherit',
  });

  const packOutput = execFileSync(
    'npm',
    ['pack', '--dry-run', '--ignore-scripts', '--json', '.'],
    {
      cwd: rootDir,
      encoding: 'utf8',
    },
  );
  const [{files}] = JSON.parse(packOutput);
  const packedFiles = new Set(files.map(file => file.path));

  for (const reference of references) {
    assert(
      packedFiles.has(reference),
      `Expected package reference ${reference} to be included in npm pack output`,
    );
  }
} finally {
  if (previousMain === null) {
    fs.rmSync(mainPath, {force: true});
  } else {
    fs.writeFileSync(mainPath, previousMain);
  }
}
