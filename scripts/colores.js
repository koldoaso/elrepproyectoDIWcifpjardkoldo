function obtenerCookie(nombre) {
    return document.cookie.split('; ').find(c => c.startsWith(nombre + '='))?.split('=')[1];
}

if (obtenerCookie('aceptacionCookies') === 'true' && obtenerCookie('modo') === 'claro') {
    document.body.classList.add('claro');
}