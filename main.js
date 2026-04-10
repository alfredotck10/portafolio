/*
  main.js
  -------
  Lógica e interactividad del sitio MicroData.

  ESTRUCTURA:
  1. Datos (métricas de la sección Stats)
  2. Funciones de render
  3. Comportamiento de la navbar al hacer scroll
  4. Inicialización cuando el DOM está listo
*/


/* ============================================================
   1. DATOS
   Para actualizar las métricas visibles en la sección Stats,
   edita este array. Cada objeto tiene:
     - value: el número o texto destacado
     - label: descripción debajo del número
     - variant: "accent" (borde azul claro) o "primary" (borde oscuro)
   ============================================================ */
const STATS_DATA = [
  {
    value: "+150",
    label: "Microempresas impulsadas",
    variant: "accent",
  },
  {
    value: "94%",
    label: "Tasa de retención de clientes",
    variant: "primary",
  },
  {
    value: "$2M+",
    label: "Pasivos reestructurados",
    variant: "primary",
  },
  {
    value: "24/7",
    label: "Monitoreo de datos",
    variant: "accent",
  },
];


/* ============================================================
   2. FUNCIONES DE RENDER
   ============================================================ */

/**
 * renderStats
 * Genera las tarjetas de métricas en el contenedor #stats-grid.
 *
 * @param {Array}       data      - Array de objetos con value, label y variant.
 * @param {HTMLElement} container - El elemento del DOM donde se insertan las tarjetas.
 */
function renderStats(data, container) {
  if (!container) return;

  /*
    Construimos el HTML de todas las tarjetas en un string
    y lo asignamos de una sola vez para minimizar reflows del navegador.
  */
  container.innerHTML = data
    .map(
      ({ value, label, variant }) => `
        <div class="stat-card stat-card--${variant}">
          <p class="stat-card__value">${value}</p>
          <p class="stat-card__label">${label}</p>
        </div>
      `
    )
    .join("");
}


/* ============================================================
   3. COMPORTAMIENTO DE LA NAVBAR
   Agrega una sombra más pronunciada al hacer scroll
   para dar sensación de profundidad.
   ============================================================ */

/**
 * initNavbarScroll
 * Escucha el evento scroll del documento y añade / quita
 * la clase .navbar--scrolled que intensifica la sombra.
 *
 * @param {HTMLElement} navbar - El elemento <nav>.
 */
function initNavbarScroll(navbar) {
  if (!navbar) return;

  const SCROLL_THRESHOLD = 20; /* píxeles de scroll antes de activar el efecto */

  window.addEventListener("scroll", () => {
    if (window.scrollY > SCROLL_THRESHOLD) {
      navbar.classList.add("navbar--scrolled");
    } else {
      navbar.classList.remove("navbar--scrolled");
    }
  });
}


/* ============================================================
   4. INICIALIZACIÓN
   Se ejecuta cuando el HTML ya fue parseado completamente.
   Aquí conectamos los datos con el DOM.
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  /* Renderizar métricas en la sección Stats */
  const statsGrid = document.getElementById("stats-grid");
  renderStats(STATS_DATA, statsGrid);

  /* Activar efecto de scroll en la navbar */
  const navbar = document.querySelector(".navbar");
  initNavbarScroll(navbar);
});
