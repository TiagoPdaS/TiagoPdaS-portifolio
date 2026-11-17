/*============TOGGLE ICON NAVBAR=============== */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bi-x-lg');
    navbar.classList.toggle('active');
}

/*============SCROLL SECTIONS ACTIVE LINK==============*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a'); // Corrigido seletor

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
    
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector(`header .navbar a[href*=${id}]`).classList.add('active'); // Corrigido seletor
            });
        }
    });

    /* =========sticky navbar */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*===========REMOVE TOGGLE ICON AND NAVBAR WHEN CLICK NAVBAR LINK(SCROLL)*/
    menuIcon.classList.remove('bi-x-lg');
    navbar.classList.remove('active');
};

/* =============scroll reveal======================*/
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 50
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-preview, .portfolio-choice, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img, .techs-container', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content, .about-container h3, .about-container p, .clock', { origin: 'right' });

/* =============typed js======================*/
const typed = new Typed('.multiple-text', {
    strings: ['Front-End', 'Developer', 'Front-End Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/* =============portfolio project selector======================*/
const portfolioChoices = document.querySelectorAll('.portfolio-choice');
const portfolioPreview = document.querySelector('.portfolio-preview');
let portfolioImage = document.querySelector('#portfolio-featured-image');
let portfolioIncomingImage = document.querySelector('#portfolio-incoming-image');
const portfolioTitle = document.querySelector('#portfolio-title');
const portfolioDescription = document.querySelector('#portfolio-description');
const portfolioLink = document.querySelector('#portfolio-link');
const portfolioLinkLabel = document.querySelector('#portfolio-link-label');
const portfolioNumber = document.querySelector('#portfolio-number');
let selectedPortfolioChoice = document.querySelector('.portfolio-choice.is-active');
let isPortfolioTransitioning = false;

const updatePortfolioLink = choice => {
    portfolioLink.hidden = false;
    portfolioLink.href = choice.dataset.href || '#contact';
    portfolioLinkLabel.textContent = choice.dataset.linkLabel || 'Contact about this project';

    if (choice.dataset.external === 'true') {
        portfolioLink.target = '_blank';
        portfolioLink.rel = 'noopener noreferrer';
    } else {
        portfolioLink.removeAttribute('target');
        portfolioLink.removeAttribute('rel');
    }
};

const finishPortfolioTransition = (outgoingImage, incomingImage) => {
    outgoingImage.classList.remove('is-outgoing');
    outgoingImage.classList.add('is-next');
    outgoingImage.removeAttribute('src');
    outgoingImage.alt = '';
    outgoingImage.setAttribute('aria-hidden', 'true');

    incomingImage.classList.remove('is-entering');
    incomingImage.classList.add('is-current');
    incomingImage.removeAttribute('aria-hidden');

    portfolioImage = incomingImage;
    portfolioIncomingImage = outgoingImage;
    portfolioChoices.forEach(choice => {
        choice.disabled = false;
    });
    isPortfolioTransitioning = false;
};

updatePortfolioLink(selectedPortfolioChoice);

portfolioChoices.forEach((choice, index) => {
    choice.addEventListener('click', () => {
        if (isPortfolioTransitioning || choice === selectedPortfolioChoice) {
            return;
        }

        isPortfolioTransitioning = true;
        selectedPortfolioChoice = choice;
        portfolioChoices.forEach(item => {
            item.classList.toggle('is-active', item === choice);
            item.setAttribute('aria-pressed', String(item === choice));
            item.disabled = true;
        });

        portfolioTitle.textContent = choice.dataset.title;
        portfolioDescription.textContent = choice.dataset.description;
        updatePortfolioLink(choice);
        portfolioNumber.textContent = `${String(index + 1).padStart(2, '0')} / ${String(portfolioChoices.length).padStart(2, '0')}`;

        const outgoingImage = portfolioImage;
        const incomingImage = portfolioIncomingImage;
        incomingImage.src = choice.dataset.image;
        incomingImage.alt = choice.dataset.alt;
        incomingImage.removeAttribute('aria-hidden');
        outgoingImage.setAttribute('aria-hidden', 'true');

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!prefersReducedMotion) {
            incomingImage.addEventListener('animationend', () => {
                finishPortfolioTransition(outgoingImage, incomingImage);
            }, { once: true });
        }

        outgoingImage.classList.replace('is-current', 'is-outgoing');
        incomingImage.classList.replace('is-next', 'is-entering');

        if (prefersReducedMotion) {
            finishPortfolioTransition(outgoingImage, incomingImage);
        }
    });
});

