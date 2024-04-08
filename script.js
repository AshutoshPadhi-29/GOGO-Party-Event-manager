function search_party() {
  // Toggle display based on search term in elements with class 'party'
  var searchTerm = document.getElementById('searchbar').value.toLowerCase();
  var x = document.getElementsByClassName('party');
  for (var i = 0; i < x.length; i++) {
      if (!x[i].innerHTML.toLowerCase().includes(searchTerm)) {
          x[i].style.display = "none";
      } else {
          x[i].style.display = "list-item";
      }
  }
}

function loadPage() {
  // Get the value entered in the search bar
  var searchTerm = document.getElementById('searchbar').value.trim();

  // Assuming the search term corresponds to the HTML page name
  var pageName = searchTerm + ".html"; // Change ".html" to the actual file extension

  // Open the HTML page if the search term is not empty
  if (searchTerm !== "") {
      window.location.href = pageName;
  }
}

