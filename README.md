# jasmine-ajv

### Installation

```
npm install --save-dev jasmine-ajv
```

### Ajv

For any references, please follow

- [JSON schema specification](http://json-schema.org/)
- [Ajv documentation](https://github.com/epoberezkin/ajv)

### Setup and usage

For Jasmine, you'll need to call install function in any place due to the way jasmine's plugin system works, ex in `beforeEach`:

```js
const install = require('jasmine-ajv');

beforeEach(() => install(jasmine));

it('should has toBeJsonSchema matcher', () => {
  expect(pojo).toBeJsonSchema(mySchema);
});
```
