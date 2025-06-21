const navbar = document.querySelector('.navbar')

// Add or remove shadow class on navbar when scrolling
window.addEventListener('scroll', () => {
    if(window.scrollY > 0) {
        navbar.classList.add('shadow')
    } else {
        navbar.classList.remove('shadow')
    }
})

// Initialize AOS animation library with duration of 700ms
AOS.init({
    duration: 700
});


function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang-en][data-lang-kr]');
    elements.forEach(el => {
        if (lang === 'en') {
            el.textContent = el.getAttribute('data-lang-en');
        } else if (lang === 'kr') {
            el.textContent = el.getAttribute('data-lang-kr');
        }
    });
}

// Default English
window.addEventListener('DOMContentLoaded', () => {
    changeLanguage('en');
});
