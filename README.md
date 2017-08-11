# jest-environment-jsdom-latest

> Jest environment to use the latest jsdom API and features

## Install

```
$ npm install --save jest-environment-jsdom-latest
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

As of v10, [jsdom](https://github.com/tmpvar/jsdom#jsdom) has a new API and some cool new features. The downside is that now it requires a Node version >= 6.

As stated in the `Jest` documentation ([here](http://facebook.github.io/jest/docs/en/troubleshooting.html#compatibility-issues)), the minimum supported Node version is v4.0.0.

This package helps you if you are running on Node >= 6 and want to use the latest JSDOM features. It will be deprecated when `Jest` drops Node 4 and Node 5 support.

The build script is as close as possible from the one of Facebook's [Jest repo](https://github.com/facebook/jest).
More on Jest environments: [http://facebook.github.io/jest/docs/configuration.html#testenvironment-string](http://facebook.github.io/jest/docs/configuration.html#testenvironment-string)

## License

MIT © [Damien Seguin](https://github.com/dmnsgn)
