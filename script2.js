window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    if (window.pageYOffset > 50) {
      nav.classList.add('fixed-nav');
    } else {
      nav.classList.remove('fixed-nav');
    }
  });