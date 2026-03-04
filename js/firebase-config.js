// Import the functions you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-XdaONTGvzDqb-GLQww9PX08J7LkM-Cc",
    authDomain: "study-buddy-hub-ec95f.firebaseapp.com",
    projectId: "study-buddy-hub-ec95f",
    storageBucket: "study-buddy-hub-ec95f.firebasestorage.app",
    messagingSenderId: "297805086627",
    appId: "1:297805086627:web:f7f6a9145b764c40c5a416",
    measurementId: "G-ZSR0Q554FY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
export const auth = getAuth(app);
