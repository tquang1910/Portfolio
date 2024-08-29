const navbar = document.querySelector('.navbar')

window.addEventListener('scroll', () => {
    if(this.scrollY > 0) {
        navbar.classList.add('shadow')
    } else {
        navbar.classList.remove('shadow')
    }
})

// AOS
AOS.init({
    duration: 700
});
