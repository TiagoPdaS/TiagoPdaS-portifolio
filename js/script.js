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

/* =============scroll reveal======================*/
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 3000,
    delay:300
});

ScrollReveal().reveal('.home-content, .heading', { origin:'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin:'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img, .techs-container ', { origin:'left' });
ScrollReveal().reveal('.home-content p, .about-content, .clock', { origin:'right' });

/* =============typed js======================*/
const typed = new Typed('.multiple-text',{
    strings: ['FrontEnd', 'Developer', 'FRONTEND DEVELOPER'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})

/* ===============form buttom send message========== */
/*
$(document).ready(function() {
    $('#formulario').submit(function(e) {
      e.preventDefault();
      var nome = $('#nome').val();
      var email = $('#email').val();
      var mensagem = $('#mensagem').val();

      $.ajax({
        type: 'POST',
        url: 'enviar_email.php',
        data: {
          nome: nome,
          email: email,
          mensagem: mensagem
        },
        success: function(response) {
          alert('Mensagem enviada com sucesso!');
          $('#formulario')[0].reset();
        },
        error: function() {
          alert('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.');
        }
      });
    });
  });*/