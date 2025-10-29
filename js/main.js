$(document).ready(function () {

  $(".menu_bar").click(function () {
    $(".sub_menu").addClass("active");
  });

  $(".close").click(function () {
    $(".sub_menu").removeClass("active");
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
