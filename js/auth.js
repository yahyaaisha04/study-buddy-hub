import { auth } from "./firebase-config.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const signupBtn = document.getElementById("signupBtn");

if (signupBtn) {
    signupBtn.addEventListener("click", () => {
        const email = document.getElementById("signupEmail").value;
        const password = document.getElementById("signupPassword").value;

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                alert("Account created successfully!");
                window.location.href = "homepage.html";
            })
            .catch((error) => {
                alert(error.message);
            });
    });
}