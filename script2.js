window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    if (window.pageYOffset > 50) {
      nav.classList.add('fixed-nav');
    } else {
      nav.classList.remove('fixed-nav');
    }
  });
  function toggleSearch() {
    var searchButton = document.getElementById("search-button");
    var searchInput = document.getElementById("search-input");
    var container = document.querySelector(".container");
    var textToHighlight = searchInput.value.toLowerCase();
    var paragraphs = container.getElementsByTagName("p");

    for (var i = 0; i < paragraphs.length; i++) {
      var paragraph = paragraphs[i];
      var paragraphText = paragraph.textContent.toLowerCase();
      var highlightedText = paragraphText.replace(
        new RegExp(textToHighlight, "gi"),
        '<span class="highlight">$&</span>'
      );
      paragraph.innerHTML = highlightedText;
    }

    searchInput.classList.toggle("highlight");
    searchButton.classList.toggle("active");
  }
