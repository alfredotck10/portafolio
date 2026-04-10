/*
  tailwind.config.js
  ------------------
  Configuración del tema de Tailwind CSS.
  Se carga como script antes de styles.css para que las clases
  personalizadas estén disponibles en todo el proyecto.

  CÓMO MODIFICAR COLORES:
  Cada clave corresponde a una clase de Tailwind, por ejemplo:
  "primary" → bg-primary, text-primary, border-primary
*/

tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        /* Colores base de superficie y fondo */
        background:                   "#f8f9fa",
        surface:                      "#f8f9fa",
        "surface-bright":             "#f8f9fa",
        "surface-dim":                "#d9dadb",
        "surface-variant":            "#e1e3e4",
        "surface-container-lowest":   "#ffffff",
        "surface-container-low":      "#f3f4f5",
        "surface-container":          "#edeeef",
        "surface-container-high":     "#e7e8e9",
        "surface-container-highest":  "#e1e3e4",

        /* Texto sobre superficies */
        "on-surface":         "#191c1d",
        "on-surface-variant": "#44474d",
        "on-background":      "#191c1d",
        "inverse-on-surface": "#f0f1f2",
        "inverse-surface":    "#2e3132",

        /* Color primario: azul marino oscuro */
        primary:              "#05162b",
        "primary-container":  "#1b2b41",
        "primary-fixed":      "#d4e3ff",
        "primary-fixed-dim":  "#b7c7e4",
        "on-primary":         "#ffffff",
        "on-primary-container":       "#8292ad",
        "on-primary-fixed":           "#0b1c31",
        "on-primary-fixed-variant":   "#38485f",
        "inverse-primary":    "#b7c7e4",
        "surface-tint":       "#505f78",

        /* Color secundario: cobalto oscuro */
        secondary:            "#1b2b41",
        "secondary-container":"#d4e3ff",
        "secondary-fixed":    "#d4e3ff",
        "secondary-fixed-dim":"#b7c7e4",
        "on-secondary":       "#ffffff",
        "on-secondary-container":       "#1b2b41",
        "on-secondary-fixed":           "#0b1c31",
        "on-secondary-fixed-variant":   "#1b2b41",

        /* Color terciario: ámbar/dorado para acentos cálidos */
        tertiary:             "#201300",
        "tertiary-container": "#392706",
        "tertiary-fixed":     "#fedeae",
        "tertiary-fixed-dim": "#e1c294",
        "on-tertiary":        "#ffffff",
        "on-tertiary-container":       "#a98d63",
        "on-tertiary-fixed":           "#281900",
        "on-tertiary-fixed-variant":   "#584320",

        /* Estados de error */
        error:                "#ba1a1a",
        "error-container":    "#ffdad6",
        "on-error":           "#ffffff",
        "on-error-container": "#93000a",

        /* Bordes y divisores */
        outline:          "#75777d",
        "outline-variant": "#c4c6cd",
      },

      borderRadius: {
        DEFAULT: "0.125rem",
        lg:      "0.25rem",
        xl:      "0.5rem",
        full:    "0.75rem",
      },

      fontFamily: {
        headline: ["Manrope"],   /* Títulos y botones */
        body:     ["Inter"],     /* Texto corrido */
        label:    ["Inter"],     /* Etiquetas y badges */
      },
    },
  },
};
