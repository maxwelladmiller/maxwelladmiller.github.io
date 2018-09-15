$(document).ready( function () {

  var webPages = [
    "page-1",
    "page-2",
    "page-3"
  ];

  var f = function (event) {
    $("a.nav-link").removeClass("active");
    $("a.nav-link").addClass("inactive");
    $("#" + event.data.param1 + "-link").addClass("active");
    $(".page").removeClass('d-block');
    $(".page").addClass('d-none');
    $(".page").fadeOut();
    $("#" + event.data.param1).fadeIn();
    $("#" + event.data.param1).addClass('d-block');
  };

  for (var i = 0; i < webPages.length; i++) {
    $('#' + webPages[i] + '-link').click({param1: webPages[i]}, f);
  }

});
