const backToTopButton = document.querySelector('.back-to-top-btn');

window.addEventListener('scroll', () => {
  const scrollHeight = document.documentElement.scrollHeight;
  const scrollTop = document.documentElement.scrollTop;
  const clientHeight = document.documentElement.clientHeight;
  const scrollPercentage = (scrollTop + clientHeight) / scrollHeight * 100;

  // Update the scroll percentage shown on the button
  backToTopButton.querySelector('.back-to-top-percent').textContent = ' ${ Math.round(scrollPercentage) }%';

  // If the user has scrolled past 20% of the page height, show the button
  if (scrollPercentage > 20) {
    backToTopButton.style.display = 'flex';
  } else {
    backToTopButton.style.display = 'none';
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
