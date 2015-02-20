// (function () {
//   // app.js
//   var app = {};
//   app.router = Rlite();
//
//   // listings-page.js
//   app.router.add('', function () {
//     // Here, put logic that will display your
//     // Etsy listings...
//     var api = app.EtsyApi({ apiKey: 'jgeqmbakgybo48lww24232km' });
//     var listTemplate = _.template($('#etsyList').html(), { variable: 'm' });
//
//     api.listings()
//       .done(function (data) {
//         // Let's put the data in the console so we can
//         // explore it...
//         console.log(data);
//         $('.main-content').html(listTemplate({ items: data.results }));
//       })
//       .fail(function (req, status, err) {
//         console.log(err);
//         $('.main-content').text(err.error);
//       });
//   });
//
//   // profile-page.js
//   app.router.add('profiles/:userid', function (r) {
//     // Here, put logic that will display your
//     // Etsy listings...
//     var api = app.EtsyApi({ apiKey: 'jgeqmbakgybo48lww24232km' });
//     var profileTemplate = _.template($('#etsyProfile').html(), { variable: 'm' });
//
//     api.getProfileById(r.params.userid)
//       .done(function (data) {
//         // Let's put the data in the console so we can
//         // explore it...
//         console.log(data);
//         $('.main-content').html(profileTemplate({ items: data.results }));
//       })
//       .fail(function (req, status, err) {
//         console.log(err);
//         $('.main-content').text(err.error);
//       });
//   });
//
//   // page-not-found.js
//   app.pageNotFound = function () {
//     // TODO: show the 404 page...
//   }
//
//   // init.js
//   function processHash() {
//     var hash = location.hash || '#';
//
//     if (!app.router.run(hash.slice(1))) {
//       app.pageNotFound();
//     }
//   }
//
//   window.addEventListener('hashchange', processHash);
//   processHash();
//
//
// })();
