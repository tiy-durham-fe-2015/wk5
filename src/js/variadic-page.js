app.variadicPage = function () {

  // First of all, what the eff is a variadic function?
  //
  // It's not too complicated. It's a function that can
  // take any number of arguments.
  //
  // Second of all, even though I'm using regular expressions
  // in this example, in reality, regex and variadic
  // functions are two unrelated technologies.
  //
  // So, how does one write a variadic function?


  // fmtString behaves similarly to the string.format method
  // in most C-style languages (C#, Java, etc). It takes a
  // string as its first argument, and then any number of
  // other arguments may follow that.
  //
  // Calling it thus:
  //
  // fmtString('Hey, {1}, I think {0}', 'you are swell!', 'class')
  //
  // Will return the string:
  // 'Hey, class, I think you are swell!'
  function fmtString(str) {
    // Arguments is an implicit local variable that is baked into
    // every function. It behaves like an array, but it is *not* an
    // array.
    //
    // It has a .length property, and it can be accessed like this:
    // arguments[0] << in this case, arguments[0] is the same as str
    // arguments[1] << the second argument passed to this function
    // arguments[2] << the third argument passed to this function, etc
    //
    // If you want to convert arguments to an array, you can just do
    // this: [].slice.call(arguments)
    //
    // Here, we are caching arguments into a local variable so we
    // can refer to it from a nested function (see below).
    var args = arguments;

    // Here, we're going to replace any pattern that looks like
    // {number} with the appropriate argument...
    //
    // Here's what this says:
    // Find any opening { if it is followed by one or more numbers
    // and then followed by a }.
    //
    // The /g says, find all of them, not just the first one.
    //
    // Here's a handy tool to visualize what it's doing:
    // http://jex.im/regulex/#!embed=false&flags=&re=%7B(%5B0-9%5D%2B)%7D
    return str.replace(/{([0-9]+)}/g, function (match, num) {
      // Here, match will be something like '{1}'
      // In which case, num will be '1'
      //
      // Anything matched within a () in a regular expression
      // will is called a group, and matching groups are passed
      // along to this function
      return args[Number(num) + 1];
    });
  }

  // Here, you can see that we are calling fmtString with 3 arguments
  console.log(fmtString('Hello, {0} what is your {1}?', 'Chris', 'birthday'));

  // Here, you can see that we call it with 4... Veriadic functions
  // are teh hotness.
  console.log(fmtString('Phone ({0}) {1}-{2}', '843', '321', '3245'));
};
