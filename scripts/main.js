// Funciones para manejar cookies
function guardarCookie(nombre, valor, dias = 365) {
    document.cookie = `${nombre}=${valor}; max-age=${dias*24*60*60}; path=/`;
}

function obtenerCookie(nombre) {
    return document.cookie.split('; ').find(cookie => cookie.startsWith(nombre + '='))?.split('=')[1];
}

// Función para saber si el usuario aceptó cookies
function cookiesAceptadas() {
    return obtenerCookie('aceptacionCookies') === 'true';
}

const botonModo = document.getElementById('modoToggle');

botonModo.addEventListener('click', () => {
    document.body.classList.toggle('claro');

    if (cookiesAceptadas()) {
        const modo = document.body.classList.contains('claro') ? 'claro' : 'oscuro';
        guardarCookie('modo', modo);
    }
});

if (cookiesAceptadas() && obtenerCookie('modo') === 'claro') {
    document.body.classList.add('claro');
}

// Randomizar posicion animacion araña

const btn = document.querySelector('.btn');
btn.addEventListener(
    "mouseenter",
    () => {
        const img = btn.querySelectorAll('img');
        img.forEach(element => {
            element.style.right = 0 + '%';
            element.style.right = Math.floor((Math.random() * 90) -10) + '%'
        });
    }
)