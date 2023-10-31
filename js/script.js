$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      $("i").css({
        opacity: "1",
        "pointer-events": "auto",
      });
    }else{
        $("i").css({
            opacity: "0",
            "pointer-events": "none",
          });
    }
  });
  $('i').click(function(){
    $('html').animate({scrollTop:0},500)
  })
});
