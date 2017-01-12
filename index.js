const matchSchema = require('./match-schema');

function assertNoCoreMatcher(jasmine, matcherName) {
  const coreMatchers = jasmine.matchers;

  if (coreMatchers[matcherName]) {
    throw new Error(`Added matcher "${matcherName}" is over-riding core matcher. You must rename the function to not destroy core.`);
  }
}

module.exports = function installMatcher(jasmine, matcherName = 'toBeJsonSchema') {
  assertNoCoreMatcher(jasmine, matcherName);

  jasmine.addMatchers({
    [matcherName]: () => ({ compare: matchSchema })
  });
};
