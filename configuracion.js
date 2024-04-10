const preguntas = './preguntas';

let preguntaActual = 0;
let respuestasCorrectas = 0;

// Función para mostrar una pregunta y sus opciones de respuesta
function mostrarPregunta() {
    const pregunta = preguntas[preguntaActual];

    // Mostrar el texto de la pregunta
    questionText.textContent = pregunta.pregunta;

    // Limpiar opciones anteriores (si las hay)
    optionsContainer.innerHTML = '';

    // Mostrar las opciones de respuesta
    pregunta.respuestas.forEach(respuesta => {
        const option = document.createElement('div');
        option.textContent = respuesta;
        option.addEventListener('click', function() {
            if (respuesta === pregunta.respuestaCorrecta) {
                // Incrementar contador de respuestas correctas
                respuestasCorrectas++;
            }
            // Pasar a la siguiente pregunta
            pasarSiguientePregunta();
        });
        optionsContainer.appendChild(option);
    });

    // Iniciar el temporizador para la pregunta actual
    iniciarTemporizador();
}

// Función para iniciar el temporizador
function iniciarTemporizador() {
    let tiempoRestante = 30; // Tiempo en segundos

    const intervalo = setInterval(() => {
        tiempoRestante--;
        timerElement.textContent = tiempoRestante;

        if (tiempoRestante === 0) {
            // Si se agota el tiempo, pasar a la siguiente pregunta y considerar la respuesta como incorrecta
            clearInterval(intervalo);
            pasarSiguientePregunta();
        }
    }, 1000); // Actualizar cada segundo
}

// Función para pasar a la siguiente pregunta
function pasarSiguientePregunta() {
    // Incrementar el índice de la pregunta actual
    preguntaActual++;

    if (preguntaActual < preguntas.length) {
        // Si hay más preguntas, mostrar la siguiente pregunta
        mostrarPregunta();
    } else {
        // Si no hay más preguntas, mostrar el resultado final
        mostrarResultadoFinal();
    }
}

// Función para mostrar el resultado final
function mostrarResultadoFinal() {
    // Aquí puedes mostrar el resultado final, por ejemplo:
    alert(`Juego terminado. Respuestas correctas: ${respuestasCorrectas}/${preguntas.length}`);
}

// Mostrar la primera pregunta al cargar la página
mostrarPregunta();