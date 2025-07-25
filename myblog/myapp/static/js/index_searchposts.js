function searchPosts() {
    var searchInput = document.getElementById("searchInput").value.toLowerCase(); // Get the search input and convert it to lowercase
    var articles = document.getElementsByTagName("article"); // Get all the posts (articles)
  
    var found = false; // Flag to track if any post matches
  
    // Loop through all articles
    for (var i = 0; i < articles.length; i++) {
      var title = articles[i].getElementsByClassName("post-tile")[0].innerText.toLowerCase(); // Get the title of each post
  
      if (title.includes(searchInput)) {
        articles[i].style.display = "block"; // Ensure the post is shown if it matches
        articles[i].scrollIntoView({ behavior: 'smooth', block: 'start' }); // Scroll to the matching post
        found = true; // Mark as found
        break; // Stop the loop once the first matching post is found
      } else {
        articles[i].style.display = "none"; // Hide the post if it doesn't match
      }
    }
  
    if (!found) {
      alert("No posts found matching your search."); // Alert if no posts match
    }
  }
  