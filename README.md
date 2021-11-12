# jest-environment-jsdom-latest

[![npm version](https://img.shields.io/npm/v/jest-environment-jsdom-latest)](https://www.npmjs.com/package/jest-environment-jsdom-latest)
[![stability-stable](https://img.shields.io/badge/stability-stable-green.svg)](https://www.npmjs.com/package/jest-environment-jsdom-latest)
[![npm minzipped size](https://img.shields.io/bundlephobia/minzip/jest-environment-jsdom-latest)](https://bundlephobia.com/package/jest-environment-jsdom-latest)
[![dependencies](https://img.shields.io/librariesio/release/npm/jest-environment-jsdom-latest)](https://github.com/dmnsgn/jest-environment-jsdom-latest/blob/main/package.json)
[![types](https://img.shields.io/npm/types/jest-environment-jsdom-latest)](https://github.com/microsoft/TypeScript)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-fa6673.svg)](https://conventionalcommits.org)
[![styled with prettier](https://img.shields.io/badge/styled_with-Prettier-f8bc45.svg?logo=prettier)](https://github.com/prettier/prettier)
[![linted with eslint](https://img.shields.io/badge/linted_with-ES_Lint-4B32C3.svg?logo=eslint)](https://github.com/eslint/eslint)
[![license](https://img.shields.io/github/license/dmnsgn/jest-environment-jsdom-latest)](https://github.com/dmnsgn/jest-environment-jsdom-latest/blob/main/LICENSE.md)

Jest environment to use the latest jsdom API and features.

[![paypal](https://img.shields.io/badge/donate-paypal-informational?logo=paypal)](https://paypal.me/dmnsgn)
[![coinbase](https://img.shields.io/badge/donate-coinbase-informational?logo=coinbase)](https://commerce.coinbase.com/checkout/56cbdf28-e323-48d8-9c98-7019e72c97f3)
[![twitter](https://img.shields.io/twitter/follow/dmnsgn?style=social)](https://twitter.com/dmnsgn)


## Installation

```bash
npm install jest-environment-jsdom-latest
```

## Usage

In `index.spec.js` or whatever:


```js
/**
 * @jest-environment jsdom-latest
 */

test('use the latest jsdom features in this test file', () => {
  const element = document.createElement('div');
  expect(element).not.toBeNull();
});
```

## Motivation

~~As of v10, [jsdom](https://github.com/tmpvar/jsdom#jsdom) has a new API and some cool new features. The downside is that now it requires a Node version >= 6.~~

~~As stated in the `Jest` documentation ([here](http://facebook.github.io/jest/docs/en/troubleshooting.html#compatibility-issues)), the minimum supported Node version is v4.0.0.~~

~~This package helps you if you are running on Node >= 6 and want to use the latest JSDOM features. It will be deprecated when `Jest` drops Node 4 and Node 5 support.~~

~~The build script is as close as possible from the one of Facebook's [Jest repo](https://github.com/facebook/jest).
More on Jest environments: [http://facebook.github.io/jest/docs/configuration.html#testenvironment-string](http://facebook.github.io/jest/docs/configuration.html#testenvironment-string)~~


## License

MIT. See [license file](https://github.com/dmnsgn/jest-environment-jsdom-latest/blob/main/LICENSE.md).
