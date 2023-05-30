window.addEventListener("DOMContentLoaded", function() {
    var welcomeElement = document.querySelector(".welcome");
    setTimeout(function() {
        welcomeElement.style.display = "none";
    }, 3000);
});



document.addEventListener("DOMContentLoaded", function() {
    var heroContent = document.querySelector(".hero__content");
    var welcome = document.querySelector(".welcome");
  
    welcome.addEventListener("animationend", function() {
      heroContent.classList.add("visible");
    });
  });

  function replaceLogoOnSmallScreen() {
    const logoImage = document.getElementById("logo-image");
    if (window.innerWidth < 430) {
        logoImage.src = "img/olivetti400.png";
    }
}

