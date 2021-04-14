$(document).on("click", ".mobile-nav-toggle", function (e) {
  $("body").toggleClass("mobile-nav-active");
  $(".mobile-nav-toggle i").toggleClass("icofont-navigation-menu icofont-close");
});
