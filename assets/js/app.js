$(document).ready(function() {

  // Blank Spaces in Table Function
  $('table tr td').on('click', function() {
    $(this).toggleClass('show-me');
  });

  // Buttons Function
  $('button').on('click', function() {
    $(this).toggleClass('active-btn');
  });
  $('#bm-button').on('click', function() {
    $('span.malay').toggleClass('bm-toggle');
  });
  $('#bi-button').on('click', function() {
    $('span.english').toggleClass('bi-toggle');
  });


  // Buttons Fixed Positon When Scroll Down
  $(window).scroll(function() {
    var scroll  = $(window).scrollTop(),
        heightA = $("#header").outerHeight(),
        heightB = $("#project-header").outerHeight(),
        totalHeight = heightA + heightB;

    if (scroll >= totalHeight) {
      $("#buttons").addClass("mobile-buttons");
    } else {
      $("#buttons").removeClass("mobile-buttons");
    }
  });


});
