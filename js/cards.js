var el = $.map(array, function(obj, i) {
  return (
    '<div class="col s12 m6">\
        <div id="' + obj.id + '" class="card medium grey darken-3 sticky-action">\
          <div class="card-image waves-effect waves-block waves-light">\
            <img class="activator" src="' + obj.imgURL + '">\
          </div>\
          <div class="card-content grey darken-3">\
            <span class="card-title activator white-text">' + obj.cTitle + '<i class="material-icons right">more_vert</i></span>\
            <p>' + obj.smText + '</p>\
          </div>\
          <div class="card-reveal grey darken-3">\
            <span class="card-title white-text">Source Code<i class="material-icons right white-text">close</i></span>\
            <div id="'+obj.repoID+'"></div>\
          </div>\
          <div class="card-action grey darken-3">\
            <a class="pink-text" href="' + obj.actionURL + '">' + obj.actionText + '</a>\
          </div>\
        </div>\
      </div>');
    });
document.write(el.join(""));