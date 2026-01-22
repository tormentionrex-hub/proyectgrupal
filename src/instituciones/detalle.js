// ===== 1) Selección de estrellas =====
const starButtons = document.querySelectorAll(".star-btn");
const ratingValue = document.getElementById("ratingValue");
const ratingText = document.getElementById("ratingText");

let currentRating = 0;

function setRating(value) {
    currentRating = value;
    ratingValue.value = value; // se “envía” en el form
    ratingText.textContent = value ? `Valoración: ${value}/5` : "Sin valoración";

    // Pintar estrellas
    starButtons.forEach((btn) => {
        const v = Number(btn.dataset.value);
        btn.classList.toggle("on", v <= value);
    });
}

starButtons.forEach((btn) => {
    btn.addEventListener("click", () => setRating(Number(btn.dataset.value)));
});

// ===== 2) Enviar form: agregar comentario arriba =====
const form = document.getElementById("commentForm");
const comments = document.getElementById("comments");

function createStars(rating) {
    const div = document.createElement("div");
    div.className = "estrellas mini";

    for (let i = 1; i <= 5; i++) {
        const s = document.createElement("span");
        s.textContent = "★";
        if (i <= rating) s.className = "on";
        div.appendChild(s);
    }

    return div;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!currentRating) {
        alert("Selecciona una valoración (1 a 5 estrellas).");
        return;
    }

    const name = form.elements.name.value.trim();
    const message = form.elements.message.value.trim();

    // Crear comentario nuevo (sin innerHTML para mantenerlo simple y seguro)
    const box = document.createElement("div");
    box.className = "comentario";

    const strong = document.createElement("strong");
    strong.textContent = name;

    const p = document.createElement("p");
    p.textContent = message;

    box.appendChild(strong);
    box.appendChild(createStars(currentRating));
    box.appendChild(p);

    comments.prepend(box);

    // Limpiar
    form.reset();
    setRating(0);
});
