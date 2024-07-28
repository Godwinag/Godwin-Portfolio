document.addEventListener('DOMContentLoaded', () => {
    const headerContent = document.querySelector('.header-content');
    headerContent.classList.add('animate');

    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('animate');
    });
});
