app.basicRegexPage = function () {

  // Here's a string...
  var someString = 'Hello, I am 39 years old.';

  // Here, we are using regular expressions to
  // find the first numeric value in the string
  // and replace it with 35
  var result = someString.replace(/[0-9]+/, 35);

  // Will log 'Hello, I am 35 years old.'
  console.log(result);

  // Here, we are using regular expressions to
  // find the first numeric value in the string
  // and replace it with 'over ' + whatever the
  // numeric value was
  result = someString.replace(/[0-9]+/, function (match) {
    return 'over ' + match;
  });

  // Will log 'Hello, I am over 35 years old.'
  console.log(result);

  // Here, we are using regular expressions to
  // find the first numeric value in the string
  // and replace it with itself plus one
  result = someString.replace(/[0-9]+/, function (match) {
    return Number(match) + 1;
  });

  // Will log 'Hello, I am over 40 years old.'
  console.log(result);

  // These are really just rudimentary examples.
  // Regex is uuber powerful. If you haven't already,
  // go here and read all about em:
  // 
  // http://codular.com/regex
};
