# jasmine-ajv

DEPRECATED. Use https://www.npmjs.com/package/jest-json-schema instead

[![Build Status](https://travis-ci.org/maxmalov/jasmine-ajv.svg?branch=master)](https://travis-ci.org/maxmalov/jasmine-ajv)

This plugin was inspired by [chai-json-schema](http://chaijs.com/plugins/chai-json-schema/) and [chai-json-schema-ajv](http://chaijs.com/plugins/chai-json-schema-ajv/).

### Installation

```
npm install --save-dev jasmine-ajv
```

### JSON Schema and Ajv

For any references, please follow

- [JSON schema specification](http://json-schema.org/)
- [Ajv documentation](https://github.com/epoberezkin/ajv)

### Setup and usage

For Jasmine, you'll need to call install function in any place due to the way jasmine's plugin system works, ex in `beforeEach`:

```js
const installJsonSchemaMatcher = require('jasmine-ajv');

beforeEach(() => installJsonSchemaMatcher(jasmine));

it('should has toBeJsonSchema matcher', () => {
  expect(pojo).toBeJsonSchema(mySchema);
});
```

#### And you can use it even with jest

You need specify [setup test file](https://facebook.github.io/jest/docs/configuration.html#setuptestframeworkscriptfile-string), if you haven't done so. After that add the following code to your setup file:

```js

// setup file

const installJsonSchemaMatcher = require('jasmine-ajv');

installJsonSchemaMatcher(jasmine);

// and later in tests

test('how awesome it is', () => {
  expect(pojo).toBeJsonSchema(mySchema);
});
```

and you're ready to go!

### Browser support

> TBD, if you have a PR, you're welcome!
