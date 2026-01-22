/* ================= INTERACCIÓN INTRO ================= */

/*
  Este JS se encarga de darle una pequeña animación
  a la imagen de la introducción para demostrar uso de JavaScript
*/

const introImg = document.querySelector('.intro-img');

if (introImg) {
    introImg.addEventListener('mouseenter', () => {
        introImg.style.transform = 'scale(1.05)';
    });

    introImg.addEventListener('mouseleave', () => {
        introImg.style.transform = 'scale(1)';
    });
}

/* ================= CARRUSEL TEORÍA ================= */

/*
  Inicialización manual del carrusel de Bootstrap
  Esto demuestra control del componente desde JavaScript
*/

const carouselElement = document.querySelector('#carouselTeoria');

if (carouselElement) {
    const carousel = new bootstrap.Carousel(carouselElement, {
        interval: false   // El usuario controla con flechas
    });
}


/* ================= INTERACCIÓN ¿QUÉ ENCONTRARÁS? ================= */

/*
  Este JS resalta visualmente los bloques informativos
  cuando el usuario hace clic sobre ellos
*/

const infoBoxes = document.querySelectorAll('.info-box');

infoBoxes.forEach(box => {
    box.addEventListener('click', () => {
        infoBoxes.forEach(b => b.classList.remove('active'));
        box.classList.add('active');
    });
});

/* ================= BOTÓN A COMENTARIOS ================= */

/*
  Redirección a la página de comentarios
*/

const btnComentarios = document.getElementById('btnComentarios');

if (btnComentarios) {
    btnComentarios.addEventListener('click', () => {
        window.open('comentarios.html', '_blank');
    });
}
