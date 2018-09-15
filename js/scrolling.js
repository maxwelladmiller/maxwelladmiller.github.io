$(document).ready( function () {
  (function($) {
    $(function() {
      $("#scroller").simplyScroll({
        framerate: 6,
        speed: 0.5,
        pauseOnHover: false
      });
    });
  })(jQuery);
});
