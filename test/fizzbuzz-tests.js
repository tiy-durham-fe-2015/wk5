// TODO:
// Actually write these tests:
//
// - Make sure fizzbuzz returns an array with 100 items
// - Make sure fizzbuzz returns the correct value for 1-15
// - Make sure the full array contains the correct sequence
//
// We'll use the Jasmine testing framework to do this.
// Jasmine tests start with a description, like so:
describe('fizzbuzz', function () {

  // Each individual test follows this pattern:
  it('returns 100 items', function () {
    // A test should have at least one expectation.
    // Here, we say that we expect fizzbuzz().length
    // to be 100. If it isn't, this will error.
    expect(fizzbuzz().length).toEqual(100);
  });

  it('the first 15 numbers are correct', function () {
  });

  it('returns the correct sequence', function () {
  });
});
