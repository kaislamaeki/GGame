document.addEventListener('DOMContentLoaded', function () {
    let menu = document.querySelector('#menu-icon');
    let navlist = document.querySelector('.navlist');

    if (menu && navlist) {
        menu.addEventListener('click', () => {
            menu.classList.toggle('open');
            navlist.classList.toggle('open');
        });
    } else {
        console.error('Fehler: #menu-icon oder .navlist wurde nicht gefunden.');
    }
});

const sr =ScrollReveal({
    distance: '65px',
    duration: 2600 ,
    delay: 450,
    reset: true,
})
sr.reveal('.hero-text',{delay: 200, origin: 'top'})
sr.reveal('.hero-img',{delay: 450, origin: 'top'})
sr.reveal('.icons',{delay: 500, origin: 'left'})
sr.reveal('.scroll-down',{delay: 500, origin: 'right'})