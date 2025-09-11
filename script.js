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
    }
}

// Stop cursor blinking and hide it after 5 seconds
function stopBlinkingCursor() {
    setTimeout(() => {
        cursor.style.animation = "none"; // Stops the blinking animation
        cursor.style.display = "none"; // Hides the cursor
    }, 5000);
}

// Start typewriter effect and handle cursor
window.onload = () => {
    typeEffect();
    stopBlinkingCursor();
};


