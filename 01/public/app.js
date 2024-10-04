document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.fade-in');
    sections.forEach(section => {
        section.style.opacity = 1; // Apply fade-in effect when loaded
    });
});
