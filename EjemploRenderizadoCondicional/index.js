// 1) Estado: true = mostrar verde, false = mostrar roja
let showGreen = true;

// 2) Traemos elementos del HTML
const btn = document.getElementById("toggleBtn");
const verde = document.getElementById("cardVerde");
const roja = document.getElementById("cardRoja");

// 3) Función "render": muestra/oculta según el estado
function render() {
  verde.style.display = showGreen ? "block" : "none";
  roja.style.display  = showGreen ? "none"  : "block";
}

// 4) Al hacer clic: cambiamos el estado y volvemos a renderizar
btn.addEventListener("click", () => {
  showGreen = !showGreen;
  render();
});

// 5) Render inicial (para que arranque bien)
render();
