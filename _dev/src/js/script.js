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
        const imageP = document.querySelector('.js-imageP');
        const scrollH = imageP.getBoundingClientRect();
        const windowY = window.innerHeight;
        const img = document.querySelector('.js-image');

            img.style.top = ((-(windowY * 0.5) + scrollH.top) / windowY) * 20 + "%";
    }, false);
}, false);