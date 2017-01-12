const install = require('./index');

test('should add matcher', () => {
  install(jasmine);
  expect(expect({}).toBeJsonSchema).toEqual(expect.any(Function));
});

test('should fail to install as core matcher', () => {
  const shouldFail = () => install(jasmine, 'toEqual');
  expect(shouldFail).toThrow(
    new Error('Added matcher "toEqual" is over-riding core matcher. You must rename the function to not destroy core.')
  );
});
