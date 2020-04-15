(function ($) {
  $(function () {

    $('.sidenav').sidenav();
    $('.parallax').parallax();

    $(document).ready(function () {
      $('#myBtn').click(function () {
        $('#myModal').attr('aria-hidden', 'false');
      });
    });


  }); // end of document ready
})(jQuery); // end of jQuery name space
