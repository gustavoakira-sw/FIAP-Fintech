function searchTable() { // Get the search query entered by the user
    const searchQuery = document.querySelector('.search-bar').value.trim();

    // If the search query is not empty, navigate the browser to the search route with the query as a parameter
    if (searchQuery) {
        window.location.href = `/search/${searchQuery}`;
    }
}
