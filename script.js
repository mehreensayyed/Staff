// script.js
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const searchResults = document.getElementById('search-results');

searchButton.addEventListener('click', performSearch);

function performSearch() {
    const query = searchInput.value.trim();
    
    // You can implement your search logic here.
    // For this example, we'll display a simple message.
    if (query !== '') {
        searchResults.innerHTML = Searching for: "${query}";
        searchResults.style.display = 'block';
    } else {
        searchResults.innerHTML = 'Please enter a search query.';
        searchResults.style.display = 'block';
    }
}