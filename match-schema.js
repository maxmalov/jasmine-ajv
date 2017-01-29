const Ajv = require('ajv');

const ajv = new Ajv();

module.exports = function validateSchema(actual, schema) {
  const pass = ajv.validate(schema, actual);
  const message = pass ? '' : formatErrors(ajv.errors);

  // clean up errors
  ajv.errors = null;

  return {
    pass,
    message
  }
};

function formatErrors(errors) {
  return errors.map(formatSingleError).join('\n');
}

function formatSingleError(err) {
  let prefix = '';

  if (err.dataPath) {
    prefix = `${err.dataPath}: `;
  }

  return `${prefix}${err.message}`;
}
