// Typewriter effect
const text = "Hi, I'm Dan";
const speed = 150;

const typewriter = document.getElementById("typewriter");
const cursor = document.querySelector(".cursor");

let index = 0;

function typeEffect() {
    if (index < text.length) {
        typewriter.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, speed);
    } else {
        // Keep blinking for 5 seconds after typing finishes
        setTimeout(() => {
            cursor.style.animation = "none";
            cursor.style.opacity = "0";
        }, 5000);
    }
}

window.onload = () => {
    typeEffect();
};