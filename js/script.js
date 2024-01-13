/*toggle icon navbar*/
let menuIcon = document.querySelectorAll('#menu-icon');
let navbar = document.querySelectorAll('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bi-file-x");
    navbar.classList.toggle("active");
}


/* scroll sections active links */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('head nav a[href*=]').classList.add('active');
            });
        };
    });
   /*stick nacbar*/
   let header = document.querySelector('header');
   header.classList.toggle('sticky', window.scrollY > 100); 

   /*remove toggle icon */
};