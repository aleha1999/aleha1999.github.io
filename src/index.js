import './style.css';
import './mobile.css';
import anime from 'animejs/lib/anime.es.js';
import '@fortawesome/fontawesome-free/js/all';

var scrollTo = require('scroll-to-element');

anime({
    targets: '.landing-page .wrapper .content *',
    translateX: [-60, 0],
    opacity: [0,1],
    delay: anime.stagger(100),
    duration: 2000
});

anime({
    targets: 'nav ul li',
    translateY: [-90, 0],
    opacity: [0,1],
    duration: 1000,
    delay: anime.stagger(50, {start: 500})
});

document.addEventListener('scroll', () => {
    if(window.scrollY > 100)
        document.querySelector('nav').classList.add('scroll');
    else
        document.querySelector('nav').classList.remove('scroll');
});

document.querySelectorAll("nav ul li a").forEach((e, i) => {
    e.addEventListener("click", (e) => {
        if(e.srcElement.getAttribute('href')[0]=="#")
            e.preventDefault();
        history.replaceState(null, null, e.srcElement.getAttribute('href'));
        scrollTo(e.srcElement.getAttribute('href'), {
            offset:0,
            ease:'inOutCube',
            duration: 1500
        });
    });
});

document.getElementById('menu').addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    document.querySelector('nav').classList.add('show');
});

document.body.addEventListener('click', () => {
    document.querySelector('nav').classList.remove('show');
});