/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        petroleo:      '#0E2A33',  // fondo base
        superficie:    '#123642',  // tarjetas, secciones, header
        linea:         '#1E4753',  // bordes y divisores sutiles
        cobre:         '#C98F6B',  // acento de marca
        'cobre-claro': '#DDA982',  // hover de links/botones
        claro:         '#EDEAE3',  // texto principal
        tenue:         '#9FB0B8',  // texto secundario
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],   // títulos
        sans:    ['Inter', 'system-ui', 'sans-serif'], // cuerpo (default)
      },
    },
  },
  plugins: [],
};
