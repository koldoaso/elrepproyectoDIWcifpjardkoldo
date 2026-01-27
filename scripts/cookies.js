// Funciones para manejar cookies
function crearCookie(nombre, valor, diasDeDuracion) {
    const fechaExpiracion = new Date();
    fechaExpiracion.setTime(fechaExpiracion.getTime() + (diasDeDuracion * 24 * 60 * 60 * 1000));

    const cadenaExpira = "expires=" + fechaExpiracion.toUTCString();
    document.cookie = `${nombre}=${valor};${cadenaExpira};path=/`;
}

function leerCookie(nombre) {
    const nombreBuscado = nombre + "=";
    const listaCookies = document.cookie.split(';');

    for (let cookie of listaCookies) {
        cookie = cookie.trim();
        if (cookie.indexOf(nombreBuscado) === 0) {
            return cookie.substring(nombreBuscado.length);
        }
    }

    return null;
}

// Mostrar banner de cookies si no se ha aceptado
if (!leerCookie('aceptacionCookies')) {
    const bannerCookies = document.createElement('div');
    bannerCookies.className = 'cookies';
    bannerCookies.innerHTML = `
        <p>
            Este sitio web utiliza cookies propias para mejorar su experiencia de navegación y
            ofrecer contenido personalizado, sin ellas no se le guardara el modo oscuro/claro. 
            Puede aceptar todas las cookies.
            <a href="/pages/informacionCookies.html">Más información</a>.
        </p>
        <div>
            <button id="botonAceptarCookies">Aceptar</button>
        </div>
    `; // Usar desde live server, en archivos locales (file// ) no funciona por seguridad CORS
    document.body.appendChild(bannerCookies);

    const botonAceptar = bannerCookies.querySelector('#botonAceptarCookies');

    botonAceptar.addEventListener('click', () => {
        crearCookie('aceptacionCookies', 'true', 30);
        bannerCookies.classList.add('oculto');
        setTimeout(() => bannerCookies.remove(), 500);
    });
}
