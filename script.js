document.addEventListener('DOMContentLoaded', function() {
    // Get the current page identifier from the body's data attribute
    const currentPage = document.body.getAttribute('data-page');
    
    // Select all navigation links
    const navLinks = document.querySelectorAll('#navbar a');
    
    // Loop through each link and check if it matches the current page
    navLinks.forEach(link => {
        // Remove 'active' class from all links first
        link.classList.remove('active');
        
        // Check if the link's href matches the current page
        const linkPage = link.getAttribute('href').replace('.html', '').replace('#', '');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
});