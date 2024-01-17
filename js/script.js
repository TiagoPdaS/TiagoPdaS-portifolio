/*============TOGGLE ICON NAVBAR=============== */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bi-x-lg');
    navbar.classList.toggle('active');
}


/*============SCROLL SECTIONS ACTIVE LINK==============*/
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header navbar a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
    
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector
                ('header navbar a [href*=' + id + ']').classList.add
                ('active');
            });
        };
    
    });
    /* =========sticky navbar */
    let header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 100)

    /*===========REMOVE TOGGLE ICON AND NAVBAR WHEN CLICK NAVBAR LINK(SCROLL)*/
    menuIcon.classList.remove('bi-x-lg');
    navbar.classList.remove('active');
};

s