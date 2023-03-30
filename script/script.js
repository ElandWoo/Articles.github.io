$(document).ready(function () {
  // ...之前的思维导图代码...

  // 回到顶部按钮
  var backToTopButton = $('#back-to-top');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      backToTopButton.fadeIn();
    } else {
      backToTopButton.fadeOut();
    }
  });

  backToTopButton.click(function () {
    $('html, body').animate({scrollTop: 0}, 800);
    return false;
  });
});
