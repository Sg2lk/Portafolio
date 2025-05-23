// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.0/firebase-app.js";
import { getDatabase, ref, set, push } from "https://www.gstatic.com/firebasejs/11.8.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "TU_API_KEY_AQUI",
    authDomain: "TU_AUTH_DOMAIN.firebaseapp.com",
    databaseURL: "https://TU_DATABASE_URL.firebaseio.com",
    projectId: "TU_PROJECT_ID",
    storageBucket: "TU_STORAGE_BUCKET.appspot.com",
    messagingSenderId: "TU_MESSAGING_SENDER_ID",
    appId: "TU_APP_ID"
};  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Referencia donde se guardarán los mensajes
const messagesRef = ref(database, 'mensajes');

// Obtener el formulario
const form = document.getElementById('contactForm');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Evitar recargar la página

    // Obtener valores del formulario
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
    alert('Por favor, completa todos los campos.');
    return;
    }

    const newMessageRef = push(messagesRef);

    set(newMessageRef, {
    nombre: name,
    correo: email,
    mensaje: message,
    fecha: new Date().toISOString()
    })
    .then(() => {
    alert('Mensaje enviado correctamente.');
    form.reset();
    })
    .catch((error) => {
    console.error('Error al enviar mensaje:', error);
    alert('Hubo un error al enviar el mensaje, intenta nuevamente.');
    });
});