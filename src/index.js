import './style.css';
import anime from 'animejs/lib/anime.es.js';
import '@fortawesome/fontawesome-free/js/all';

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