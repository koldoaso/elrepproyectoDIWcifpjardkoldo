// Juego
class Pregunta {
    constructor (titulo, correcta, todas) {
        this.titulo = titulo;
        this.correcta = correcta;
        this.todas = todas;
    }
}

function mostrarPregunta () {
    
    document.getElementById('preguntaTitulo').textContent = preguntas[preguntaActual].titulo + ` (Preguntas contestadas: ${preguntaActual}/${preguntas.length})`;
    const respuestas = document.getElementById('respuestas');
    respuestas.innerHTML = '';
    console.log(respuestas);
    preguntas[preguntaActual].todas.forEach(respuesta => {
        
        console.log(respuesta);
        const respuestaActual = document.createElement('button');
        respuestaActual.textContent = respuesta;
        respuestaActual.addEventListener(
            "click",
            () => responderPreguntas(respuestaActual.textContent)
        );

        respuestas.appendChild(respuestaActual);
    });
}

function responderPreguntas(respuesta) {

    if (respuesta === preguntas[preguntaActual].correcta) {
        contador += 1;
    }
    preguntaActual += 1;
    if (preguntaActual < preguntas.length) {
        mostrarPregunta();
    }
    else {
        document.getElementById('game').style.display = 'none';
        resultado.textContent += ` ¡${contador}/${preguntas.length} correctas!`;
        resultado.style.display = 'block';
    }
}



var preguntaActual = 0;
var contador = 0;
const resultado = document.getElementById('resultado');
resultado.style.display = 'none';
const pregunta1 = new Pregunta('¿Que araña crea telarañas de color dorado?', 'Nephila clavipes', ['Pholcus phalangioides','Nephila clavipes', 'Nephilengys cruentata', 'Latrodectus mactans'])
const pregunta2 = new Pregunta('¿Cual de las siguientes arañas es conocida como tarantula gigante de goliat?', 'Theraphosa blondi', ['Nephilengys cruentata', 'Latrodectus mactans', 'Theraphosa blondi', 'Nephila clavipes'])
const pregunta3 = new Pregunta('¿Cual de las siguientes arañas no teje telarañas para atrapar presas?', 'Lycosa tarantula', ['Nephilengys cruentata', 'Pholcus phalangioides', 'Theraphosa blondi', 'Lycosa tarantula'])


const preguntas = [pregunta1, pregunta2, pregunta3];

mostrarPregunta()