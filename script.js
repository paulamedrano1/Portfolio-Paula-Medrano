const formularioContacto = document.getElementById('formulario-contacto');

formularioContacto.addEventListener('submit', function (e) {
    e.preventDefault();
    let isValid = true;

    const nombre = document.getElementById('nombre');
    const errorNombre = document.getElementById('error-nombre');
    if (nombre.value.trim() === '') {
        errorNombre.style.display = 'block';
        isValid = false;
    } else {
        errorNombre.style.display = 'none';
    }

    const correo = document.getElementById('correo');
    const errorCorreo = document.getElementById('error-correo');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo.value)) {
        errorCorreo.style.display = 'block';
        isValid = false;
    } else {
        errorCorreo.style.display = 'none';
    }

    const mensaje = document.getElementById('mensaje');
    const errorMensaje = document.getElementById('error-mensaje');
    if (mensaje.value.trim() === '') {
        errorMensaje.style.display = 'block';
        isValid = false;
    } else {
        errorMensaje.style.display = 'none';
    }

    if (isValid) {
        document.getElementById('mensaje-exito').style.display = 'block';
        formularioContacto.reset();

        setTimeout(() => {
            document.getElementById('mensaje-exito').style.display = 'none';
        }, 5000);
    }
});

const botones = document.querySelectorAll('.btn');
botones.forEach(boton => {
    boton.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-3px)';
        this.style.boxShadow = '0 5px 15px rgba(108, 99, 255, 0.3)';
    });

    boton.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle-btn');
    const navLinks = document.querySelector('.enlaces-nav');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('activo'); 
        });
    }
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('activo')) {
                navLinks.classList.remove('activo');
            }
        });
    });
});
