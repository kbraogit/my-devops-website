document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded successfully!');
    
    // Add current date/time
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        dateElement.textContent = new Date().toLocaleString();
    }
});