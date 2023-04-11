
$(document).ready(function () {
    // 回到顶部按钮
    var backToTopButton = $('#back-to-top-btn');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            backToTopButton.fadeIn();
        } else {
            backToTopButton.fadeOut();
        }
    });

    backToTopButton.click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });

});



// const backToTopBtn = document.querySelector('.back-to-top-btn');
// const percentSpan = backToTopBtn.querySelector('.back-to-top-percent');

// // Hide the button when the page is at the top
// window.addEventListener('scroll', () => {
//   const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
//   if (scrollTop === 0) {
//     backToTopBtn.style.display = 'none';
//   } else {
//     backToTopBtn.style.display = 'block';
//   }
// });

// // Update the percentage displayed in the span element as the user scrolls
// window.addEventListener('scroll', () => {
//   const scrollTop = document.documentElement.scrollTop  document.body.scrollTop;
//   const scrollHeight = document.documentElement.scrollHeight  document.body.scrollHeight;
//   const percentScrolled = (scrollTop / (scrollHeight - window.innerHeight)) * 100;
//   percentSpan.textContent = ${Math.round(percentScrolled)}%;
// });

// // Scroll to the top of the page when the button is clicked
// backToTopBtn.addEventListener('click', () => {
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth'
//   });
// });
