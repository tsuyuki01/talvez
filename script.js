// Efeito de digitação neon
function typeEffect(element, text, speed = 80) {
    let i = 0;
    const interval = setInterval(() => {
        element.innerHTML += text.charAt(i);
        i++;
        if (i >= text.length) clearInterval(interval);
    }, speed);
}

document.addEventListener("DOMContentLoaded", () => {
    // Digitação no h4
    const subtitle = document.querySelector("h4");
    const text = subtitle.textContent;
    subtitle.textContent = "";
    typeEffect(subtitle, text);

    // Corações flutuantes
    setInterval(() => {
        createHeart();
    }, 800);
});

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "floating-heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}
