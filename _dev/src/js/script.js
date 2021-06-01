import '@scss/style';

class mobileMenu {
    constructor() {
        this.DOM = {};
        this.DOM.btn = document.querySelector('.js-toggle');
        this.DOM.menu = document.querySelector('.js-header__menu');
        this.eventType = this._getEventType();
        this._addEvent();
    } 

    _getEventType() {
        return window.ontouchstart ? 'touchstart' : 'click';
    }
    _toggle() {
        this.DOM.btn.classList.toggle('is-active');
        this.DOM.menu.classList.toggle('is-active');
    }
    _addEvent() {
        this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
    }
}
new mobileMenu();

const smoothScroll = document.querySelectorAll('a[href^="#"]');
for(let i = 0; i < smoothScroll.length; i++) {
    smoothScroll[i].addEventListener('click', (e) => {
        e.preventDefault();
        let href = smoothScroll[i].getAttribute('href');
        let targetElement = document.getElementById(href.replace('#', ''));
        const rect = targetElement.getBoundingClientRect().top;
        const offset = window.pageYOffset;
        const gap = 60;
        const target = rect + offset - gap;
        window.scrollTo({
            top: target,
            behavior: 'smooth',
        });
    });
}


window.addEventListener("load", () => {
    window.addEventListener("scroll", () => {
        const scrollH = document.documentElement.scrollHeight || document.body.scrollHeight;
        const scrollV = scrollH - window.innerHeight;
        const windowY = window.pageYOffset;
        const img = document.querySelectorAll('.js-image');

        for(let i = 0; i < img.length; i++) {
            img[i].style.top = (windowY / scrollV) * 100 + "%";
        }
    }, false);
}, false);