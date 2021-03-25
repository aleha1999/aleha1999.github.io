import './style.css';
import './mobile.css';
import anime from 'animejs/lib/anime.es.js';
// Font Awesome imports... send help
import {faDatabase} from '@fortawesome/free-solid-svg-icons/faDatabase';
import {faGlobe} from '@fortawesome/free-solid-svg-icons/faGlobe';
import {faCode} from '@fortawesome/free-solid-svg-icons/faCode'

import {faAngular} from '@fortawesome/free-brands-svg-icons/faAngular';
import {faNodeJs} from '@fortawesome/free-brands-svg-icons/faNodeJs';
import {faNode} from '@fortawesome/free-brands-svg-icons/faNode';
import {faPython} from '@fortawesome/free-brands-svg-icons/faPython';

import {library, dom} from '@fortawesome/fontawesome-svg-core';

library.add(faDatabase, faGlobe, faCode, faAngular, faNodeJs, faNode, faPython);

dom.watch();

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

window.addEventListener('load', () => {
    document.querySelector('.loader').classList.add('hidden');
    pageLoaded = true;
});

document.addEventListener('scroll', () => {
    if(window.scrollY > 100)
        document.querySelector('nav').classList.add('scroll');
    else
        document.querySelector('nav').classList.remove('scroll');
});

document.querySelectorAll("nav ul li a").forEach((e, i) => {
    e.addEventListener("click", (e) => {
        if(e.target.getAttribute('href')[0]=="#")
            e.preventDefault();
        history.replaceState(null, null, e.target.getAttribute('href'));
        scrollTo(e.target.getAttribute('href'), {
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