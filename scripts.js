$(document).ready(function () {
  getEventosDoMeetup();
  insertThumbsHTML('#members_thumb')
    .catch(err => console.log(err));
});

function getEventosDoMeetup() {

  $.ajax({
    type: "GET",
    url: "https://api.meetup.com/gdg-juiz-de-fora/events?photo-host=public&page=6&sig_id=206300172&fields=featured_photo&sig=430d3a19fd92c987f1f1d10a351e889e093ae50d",

    success: function (result) {
      if (!Array.isArray(result.data)) return;

      var eventos = "";
      result.data.forEach(function (item) {
        var date = new Date(item.time);
        var description = item.description;
        var image = item.featured_photo.photo_link;

        if (description.length < 250) {
          description = description.substring(0, description.length);
        } else {
          description = description.substring(0, 250) + " ...";
        }

        eventos += "<div class=\"mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--3dp\">"
          + "<div class=\"mdl-card__media\"> <img src=\"" + image + "\"></div>"
          + "<div class=\"mdl-card__title\"> <h4 class=\"mdl-card__title-text\">"
          + item.name + " (" + formattedDate(date) + ")          </div><div class=\"mdl-card__supporting-text\"><span class=\"mdl-typography--font-light mdl-typography--subhead\">"
          + description + "</div><div class=\"mdl-card__actions\">"
          + "<a class=\"mdl-button mdl-js-button mdl-button--accent mdl-js-ripple-effect\" href=\" "
          + item.link + " \">Meetup<i class=\"material-icons\">chevron_right</i></a></div></div>";
      })

      if (result.data.length == 0) {
        eventos =
          "<div class=\"mdl-cell--12-col	 theme-customized-section-text\"><div class=\"theme-customized-section\"\>"
          + "<div class=\"mdl-typography--font-light mdl-typography--display-3-color-contrast\">¯\\ (ツ) /¯</div>"
          + "<h4 class=\"mdl-typography--font-light\">Por enquanto, não temos um evento marcado, mas fique de olho!</h4>"
          + "<a href=\"https://github.com/gdgjf/gdgjf.github.io#eventos\" class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent\"> Sugerir eventos </a>"
          + "</div></div>";
      }

      $("#dinamic_events").replaceWith(eventos);
    },

    dataType: 'jsonp',
  });
};

function formattedDate(d = new Date) {
  let month = String(d.getMonth() + 1);
  let day = String(d.getDate());
  const year = String(d.getFullYear());

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return `${day}/${month}/${year}`;
}

let usersWithPhoto = function (user) {
  return user.photo !== undefined;
}

let getNameThumbUser = function (user) {
  return {
    name: user.name,
    thumb: user.photo.thumb_link
  }
}

let buildImgThumbUsers = function (a, b) {
  return a + `<img src="${b.thumb}" title="${b.name}" style="padding: 1px"/>`;
}

function getThumbsFromMeetup() {
  return new Promise(function (resolve, reject) {
    $.ajax({
      type: 'GET',
      dataType: 'jsonp',
      url: 'https://api.meetup.com/gdg-juiz-de-fora/members?photo-host=public&sig_id=234046362&sig=2653d370536b54c158f13167fb92a77d14e74fea',
      success: function (result) {
        if (!Array.isArray(result.data)) return;

        let thumbs = result.data
          .filter(usersWithPhoto)
          .map(getNameThumbUser)
          .reduce(buildImgThumbUsers, '')

        resolve(thumbs);
      },
      failed: function (err) {
        reject(err);
      }
    })
  })
}

let insertThumbsHTML = function (htmlId) {
  return getThumbsFromMeetup()
    .then(function (imgTags) {
      $(htmlId).html(imgTags);
    })
}
