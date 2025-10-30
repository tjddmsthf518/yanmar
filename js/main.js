$(document).ready(function () {
  $(window).scroll(function () {
    var pageY = $(window).scrollTop();
    var section_1_top = $(".section_1").offset().top;

    if (pageY > 60) {
      $("header").css({
        maxWidth: 768,
        width: "100%",
        position: "fixed",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "white",
      });

      $(".menu_black").css({
        display: "flex",
      });

      $(".menu_wrap").css({
        display: "none",
      });
    } else if (pageY < 60) {
      $("header").css({
        maxWidth: 768,
        width: "100%",
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "unset",
      });

      $(".menu_black").css({
        display: "none",
      });

      $(".menu_wrap").css({
        display: "flex",
      });
    }
  });

  $(".menu_bar, .menubar_black").click(function () {
    // $(".sub_menu").addClass("active");
    $(".sub_menu").fadeIn(300);
  });

  $(".close").click(function () {
    // $(".sub_menu").removeClass("active");
    $(".sub_menu").fadeOut(300);
  });

  var clicked = "on";

  $(".product").click(function () {
    if (clicked == "on") {
      $(".sub_product").css({
        display: "block",
      });

      $(".product img").css({
        transform: "rotate(-180deg)",
      });

      clicked = "off";
    } else if (clicked == "off") {
      $(".sub_product").css({
        display: "none",
      });

      $(".product img").css({
        transform: "rotate(0deg)",
      });

      clicked = "on";
    }
  });

  var swiper = new Swiper(".con_wrap_3", {
    pagination: {
      el: ".swiper-pagination",
    },
    grabCursor: true,
  });
});
