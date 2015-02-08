app.routingPage = function () {

  // Our router
  var r = Rlite();

  // Default route
  r.add('', showUsers);

  // #users
  r.add('users', showUsers);

  // #users/chris -> r.params.name will equal 'chris'
  r.add('users/:name', function (r) {
    showUser(r.params.name);
  });

  function showUsers() {
    $.get('views/users.html').done(function (html) {
      $('.main-content').html(html);
    });
  }

  function showUser(username) {
    $.get('views/user.html').done(function (html) {
      var template = _.template(html, { variable: 'm' });

      $('.main-content').html(template({ name: username }));
    });
  }

  // Hash-based routing
  function processHash() {
    var hash = location.hash || '#';
    r.run(hash.slice(1));
  }

  window.addEventListener('hashchange', processHash);
  processHash();

  // TODO: We could improve this in many ways.
  //
  // One, every time we go to the #users or #users/foo route,
  // we are requesting the HTML again. We ought to cache them,
  // instead into an object (or hash table).
  //
  // Another thing, is we are recompiling the user.html template
  // every time we show a user... We could cache the compiled
  // templates, too, so they are compiled once they are downloaded
  // and never again!
};
