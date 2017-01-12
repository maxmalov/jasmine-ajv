const matchSchema = require('./match-schema');

test('should fail for invalid type', () => {
  const result = matchSchema([], {
    type: 'object'
  });

  expect(result.pass).toEqual(false);
});

test('should fail for missing required property', () => {
  const result = matchSchema({ }, {
    type: 'object',
    required: ['foo']
  });

  expect(result.pass).toEqual(false);
});

test('should fail for wrong property type', () => {
  const result = matchSchema({ foo: 1 }, {
    type: 'object',
    properties: {
      foo: { type: 'string' }
    }
  });

  expect(result.pass).toEqual(false);
});

test('should pass valid object', () => {
  const result = matchSchema({ foo: 1, bar: 'lol', baz: 123 }, {
    type: 'object',
    properties: {
      foo: { type: 'number' },
      bar: { type: 'string' }
    },
    required: ['foo', 'bar', 'baz'],
  });

  expect(result.pass).toEqual(true);
});
