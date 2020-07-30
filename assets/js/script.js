/* Author: Reshma Lihe */

// Function for counter
$('.count').counterUp ({
  delay: 10,
  time: 2000
})


// Function for scroll to top button
var topScroll = document.querySelector('footer .up');
topScroll.addEventListener('click', onTop);

window.onscroll = function() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    topScroll.classList.add('showBtn');
  } else {
    topScroll.classList.remove('showBtn');
  }
}

function onTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}