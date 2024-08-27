const quizData = [
    {
        question:`
        1.  La visita al museo del centro de Chacamarca cuesta S/15.00 adultos y S/10.00 niños. Si decidimos ir todo el salón que somos 30 estudiantes y la docente ¿cuánto pagaríamos?
        `,
        a: "365",
        b: "300",
        c: "315",
        d: "350",
        correct: "c",
        type: "multiple-choice"
    },
    {
        question:"2.  Liam al visitar Junín observo que tenían muchas vicuñas y preguntando el dueño menciona que 50 vicuñas nacieron este año más y el año pasado tenían 1450. ¿Cuántas vicuñas tendrá el dueño para este año? ",
        a: "1 500",
        b: "1 400",
        c: "1 450",
        d: "1 350",
        correct: "a",
        type: "multiple-choice"
    },
    {
        question:"3.  ¿Cuántos años tendrá en la actualidad el Santuario de Chacamarca si fue fundado el 11 de marzo de 1675?",
        a: "300",
        b: "200",
        c: "349",
        d: "249",
        correct: "c",
        type: "multiple-choice"
    },
    {
        question:`
        <ol start="4"><li>Para realizar un viaje a Junín y visitar el santuario de Chacamarca, una agencia de turismo ofrece:</li></ol>
        <ul><li>Pasajes de ida y vuelta a S/ 4250 por persona.</li>
        <li>Alojamiento individual a S/ 85 por día.</li>
        <li>Alimentación a S/ 115 por persona y por día.</li></ul>
        ¿Cuál es el presupuesto necesario para 4 personas durante 5 días?</p>
        `,
        a: "S/ 21 000",
        b: "S/ 20 000",
        c: "S/ 30 000",
        d: "S/ 31 000",
        correct: "a",
        type: "multiple-choice"
    },
    {
        question:"5.   ¿Cuántas puntas tiene el obelisco de Chacamarca y de qué forma es?",
        a: "17puntas-corona",
        b: "16puntas-sol",
        c: "17puntas-cuadrado",
        d: "16puntas-corona",
        correct: "a",
        type: "multiple-choice"
    },
    {
        question: "6.   Cada fin de semana, Thiago viaja a Junin o Ayacucho. El pasaje de ida y vuelta a Junin cuesta S/ 240 y el de ida y vuelta a Ayacucho cuesta la mitad. Si en las ultimas 9 semanas ha gastado en pasajes S/ 1200, ¿cuántas veces viajó y volvio de Ayacucho?",
        
        a: "6",
        b: "4",
        c: "7",
        d: "8",
        correct: "d",
        type: "multiple-choice"
    },
    {
        question: "7.   Si el santuario de Chacamarca esta dividido en tres sectores en donde: El sector I mide los 3/4 del total, El sector II mide 1/6 del total, ¿Que parte del total mide el Sector III? ",
        image: "img/pregunta3.png",
        a: "1/4",
        b: "5/6",
        c: "1/12",
        d: "11/12",
        correct: "c",
        type: "multiple-choice"
    },
    {
        question: "8.   En espacios del santuariode Chacamarca por fiestas patrias se vendieron 120 platos de pachamanca a S/25.00 cada plato ¿Cuanto dinero se abra recavado en la venta?",
        
        a: "S/ 6000.00",
        b: "S/ 5000.00",
        c: "S/ 4000.00",
        d: "S/ 3000.00",
        correct: "d",
        type: "multiple-choice"
    },
    {
        question: "9.   ¿Cuál de las siguientes afirmaciones es verdadera sobre los triangulos isosceles?",
        
        a: "Tienen todos los lados y angulos iguales",
        b: "Tienen dos lados y dos angulos iguales",
        c: "Tienen un ángulo recto",
        d: "Tienen un ángulo obtuso",
        correct: "b",
        type: "multiple-choice"
    },
    {
        question: "10.   ¿Cuál de las siguientes afirmaciones es verdadera sobre los triangulos escaleno?",
        
        a: "Tienen todos los lados y angulos iguales",
        b: "Tienen un lado mas largo que los otros dos",
        c: "Tienen todos los lados y angulos diferentes",
        d: "Tienen un ángulo obtuso",
        correct: "c",
        type: "multiple-choice"
    },
    {
        question: "11.   ¿Cual de las siguientes opciones describe un ángulo recto?",
        
        a: "Un ángulo mayor a 90 grados y menor a 180 grados",
        b: "Un ángulo mayor a 180 grados y menor a 360 grados",
        c: "Un ángulo de exactamente a 90 grados",
        d: "Un ángulo mayor a 0 grados y menor a 90 grados",
        correct: "c",
        type: "multiple-choice"
    },
    {
        question: "12.   En el triángulo de la figura, la medida de los ángulos A, B Y C. Son respectivamente.",
        image: "img/pregunta6.jpg",
        a: "5,4 y 3",
        b: "Todos miden 15",
        c: "75,60 y 45",
        d: "90,60 y 30",
        correct: "c",
        type: "multiple-choice"
    },
    {
        question: "13.   ¿Las dos lineas perpendiculares que se encuentra en la figura representan las diagonales de un?",
        image: "img/pregunta7.jpg",
        a: "Cuadrado",
        b: "Rectangulo",
        c: "Rombo",
        d: "Trapecio",
        correct: "c",
        type: "multiple-choice"
    },
    {
        question: "14.   Completa las palabras que faltan: 'En el eje horizontal se mide el valor de las _____ y en el vertical el de las _____.'",
        type: "text-input",
        image: "",
        inputs: 2,
        correct: ["Abscisas", "Ordenadas"]
    },
    {
        question: "15.   ¿el punto de abscisa y ordenda se encuentra en el ______?",
        type: "text-input",
        image: "", // Imagen de Marte
        inputs: 1,
        correct: ["Origen"]
        
    },
    {
        question: "16.   ¿El par ordenado (+4;+3) tiene de abscisa _____ y de ordenada _____?",
        type: "text-input",
        image: "",
        inputs: 2,
        correct: ["4", "3"]
    },
    {
        question: "17.   ¿cuantos triangulos como máximo hay en la siguiente figura?",
        image: "img/pregunta11.jpg", 
        a: "9",
        b: "13",
        c: "11",
        d: "10",
        correct: "b",
        type: "multiple-choice"
    },
    {
        question: "18.   ¿cuantos triangulos como máximo hay en la siguiente figura?",
        image: "img/pregunta12.jpg",
        a: "9",
        b: "11",
        c: "12",
        d: "Ninguno",
        correct: "c",
        type: "multiple-choice"
    }
    
];



const startPage = document.getElementById('startPage');
const quizPage = document.getElementById('quizPage');
const usernameInput = document.getElementById('username');
const startBtn = document.getElementById('startBtn');

const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const buttonsContainer = document.getElementById('buttons-container');
const scoreEl = document.getElementById('score');
const userDisplay = document.getElementById('userDisplay');

const modal = document.getElementById('alertModal');
const modalMessage = document.getElementById('modalMessage');
const modalImage = document.getElementById('modalImage');
const closeModalBtn = document.getElementById('closeModal');
const textInputContainer = document.getElementById('text-input-container');

let currentQuiz = 0;
let score = 0;
let username = "";

startBtn.addEventListener('click', startQuiz);

function startQuiz() {
    username = usernameInput.value.trim();

    if (username === "") {
        alert("Por favor, ingresa tu nombre.");
        return;
    }

    userDisplay.innerText = `Usuario: ${username}`;
    startPage.style.display = "none";
    quizPage.style.display = "block";

    loadQuiz();
}

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerHTML = currentQuizData.question;

    if (currentQuizData.image) {
        questionImage.src = currentQuizData.image;
        questionImage.style.display = "block";
    } else {
        questionImage.style.display = "none";
    }

    if (currentQuizData.type === "multiple-choice") {
        buttonsContainer.innerHTML = '';
        textInputContainer.style.display = "none";
        
        // Crear los botones de las opciones
        for (let option in currentQuizData) {
            if (option !== 'question' && option !== 'correct' && option !== 'image' && option !== 'type' && option !== 'inputs') {
                const button = document.createElement('button');
                button.classList.add('option');
                button.innerText = currentQuizData[option];
                button.addEventListener('click', () => selectAnswer(option));
                buttonsContainer.appendChild(button);
            }
        }

        // Añadir botón para saltar pregunta
    const skipButton = document.createElement('button');
    skipButton.classList.add('option');
    skipButton.innerText = "Saltar pregunta";
    skipButton.style.backgroundColor = "#f44336"; // Cambia el color del botón a rojo
    skipButton.addEventListener('click', skipQuestion);
    buttonsContainer.appendChild(skipButton);

    } else if (currentQuizData.type === "text-input") {
        buttonsContainer.innerHTML = '';
        textInputContainer.innerHTML = '';
        textInputContainer.style.display = "block";

        for (let i = 0; i < currentQuizData.inputs; i++) {
            const input = document.createElement('input');
            input.type = 'text';
            input.classList.add('text-input');
            input.placeholder = `Respuesta ${i + 1}`;
            textInputContainer.appendChild(input);
        }

        const submitBtn = document.createElement('button');
        submitBtn.classList.add('option');
        submitBtn.innerText = "Enviar Respuesta";
        submitBtn.addEventListener('click', checkTextInputAnswers);
        textInputContainer.appendChild(submitBtn);
        // Añadir botón para saltar pregunta
    const skipButton = document.createElement('button');
    skipButton.classList.add('option');
    skipButton.innerText = "Saltar pregunta";
    skipButton.style.backgroundColor = "#f44336"; // Cambia el color del botón a rojo
    skipButton.addEventListener('click', skipQuestion);
    buttonsContainer.appendChild(skipButton);
    }
}

function checkTextInputAnswers() {
    const inputs = document.querySelectorAll('#text-input-container input');
    const currentQuizData = quizData[currentQuiz];
    let allCorrect = true;

    inputs.forEach((input, index) => {
        if (input.value.trim().toLowerCase() !== currentQuizData.correct[index].toLowerCase()) {
            allCorrect = false;
        }
    });

    if (allCorrect) {
        score += 5;
        correctSound.play();
        showAlert("¡Correcto!", "videos/correcto.mp4");
        closeModalBtn.addEventListener('click', () => {
            currentQuiz++;
            if (currentQuiz < quizData.length) {
                loadQuiz();
            } else {
                showFinalScore();
            }
        }, { once: true });
    } else {
        score -= 1;
        incorrectSound.play();
        showAlert("Incorrecto. Inténtalo de nuevo.", "videos/incorrecto.mp4");
    }

    scoreEl.innerText = score;
}


function selectAnswer(selectedOption) {
    const currentQuizData = quizData[currentQuiz];

    if (selectedOption === currentQuizData.correct) {
        score += 5;
        correctSound.play();
        showAlert("¡Correcto!", "videos/correcto.mp4"); // Video para respuesta correcta
        closeModalBtn.addEventListener('click', () => {
            currentQuiz++;
            if (currentQuiz < quizData.length) {
                loadQuiz();
            } else {
                showFinalScore();
            }
        }, { once: true });
    } else {
        score -= 1;
        incorrectSound.play();
        showAlert("Incorrecto. Inténtalo de nuevo.", "videos/incorrecto.mp4"); // Video para respuesta incorrecta
    }

    scoreEl.innerText = score;
}


function showAlert(message, videoSrc) {
    const modalMessage = document.getElementById('modalMessage');
    const modalVideo = document.getElementById('modalVideo');
    const alertModal = document.getElementById('alertModal');

    modalMessage.innerText = message;
    modalVideo.src = videoSrc;
    modalVideo.style.display = "block";
    
    alertModal.style.display = "flex";

    // Reinicia el video y lo reproduce automáticamente
    modalVideo.load();
    modalVideo.play();
}

document.getElementById('closeModal').addEventListener('click', () => {
    const alertModal = document.getElementById('alertModal');
    alertModal.style.display = "none";
});

closeModalBtn.addEventListener('click', () => {
    modal.style.display = "none";
});

function showFinalScore() {
    startPage.style.display = "block";
    quizPage.style.display = "none";
    startPage.innerHTML = `
        <h2>¡Gracias por jugar, ${username}!</h2>
        <p>Puntuación final: ${score} puntos</p>
        <button onclick="location.reload()">Volver a jugar</button>
        
    `;

}
// Referencias a los sonidos
const correctSound = document.getElementById('correctSound');
const incorrectSound = document.getElementById('incorrectSound');

// Función para reiniciar el quiz
        document.getElementById('resetButton').addEventListener('click', function() {
            // Puedes agregar aquí la lógica para resetear cualquier otro estado del juego, si es necesario.
            document.getElementById('quizPage').style.display = 'none';
            document.getElementById('inicio').style.display = 'flex';
            window.location.href = 'index.html'; // Reemplaza 'index.html' con la página de inicio de tu app
        });

// Funcion para que solo muestre el fondo en la primera pagina

document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            localStorage.setItem('username', username);

            // Oculta la página de inicio y muestra el quiz
            document.getElementById('inicio').style.display = 'none';
            document.getElementById('quizPage').style.display = 'flex';
        });

        

        // Inicialización: muestra la página de inicio
        document.getElementById('inicio').style.display = 'flex';

//saltar pregunta

    

function skipQuestion() {
    score += 0;  // Asignar 0 puntos
    showAlert("Pregunta saltada. Sin puntos.","videos/pensando.mp4");

    closeModalBtn.addEventListener('click', () => {
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            showFinalScore();
        }
    }, { once: true });

    scoreEl.innerText = score;
}

