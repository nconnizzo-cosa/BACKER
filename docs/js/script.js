// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple search functionality (filtering section content)
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const sections = document.querySelectorAll('section');

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    let results = [];
    sections.forEach(section => {
        const title = section.querySelector('h2').innerText.toLowerCase();
        if (title.includes(query)) {
            results.push(`<p>${title}</p>`);
        }
    });
    searchResults.innerHTML = results.join('') || 'No results found.';
});
