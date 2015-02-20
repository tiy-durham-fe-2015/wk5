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

  it('has the right values for the first 14 positions', function () {
    var expectedValues = [
      1, 2, 'Fizz', 4, 'Buzz',
      'Fizz', 7, 8, 'Fizz', 'Buzz',
      11, 'Fizz', 13, 14];

    expect(fizzbuzz().slice(0, 14)).toEqual(expectedValues);
  });

  it('should have FizzBuzz for number 15', function () {
    expect(fizzbuzz()[14]).toEqual('FizzBuzz');
  });

  it('should have all the right FizzBuzzes', function () {
    var result = fizzbuzz();

    result.forEach(function (item, index) {
      var number = index + 1;

      if (number % 3 === 0 && number % 5 === 0) {
        expect(item).toEqual('FizzBuzz');
      }
    });
  });

  it('should have all the right Fizzes', function () {
    var result = fizzbuzz();

    result.forEach(function (item, index) {
      var number = index + 1;

      if (number % 3 === 0 && number % 5 !== 0) {
        expect(item).toEqual('Fizz');
      }
    });
  });

});
