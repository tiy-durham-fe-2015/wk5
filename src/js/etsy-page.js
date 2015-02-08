app.etsyPage = function () {
  var api = app.EtsyApi({ apiKey: 'jgeqmbakgybo48lww24232km' });
  var listTemplate = _.template($('#etsyList').html(), { variable: 'm' });

  api.listings()
    .done(function (data) {
      // Let's put the data in the console so we can
      // explore it...
      console.log(data);
      $('.main-content').html(listTemplate({ items: data.results }));
    })
    .fail(function (req, status, err) {
      console.log(err);
      $('.main-content').text(err.error);
    });
};
