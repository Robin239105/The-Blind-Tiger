/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#0e0c09",
        deep: "#1a1610",
        warm: "#2a2318",
        gold: {
          DEFAULT: "#c9a84c",
          light: "#e2c97e",
        },
        rust: "#8b3a1a",
        cream: "#f2ead8",
        muted: "#9a9080",
        dim: "#6a6055",
      },
      fontFamily: {
        playfair: ["'Playfair Display'", "serif"],
        josefin: ["'Josefin Sans'", "sans-serif"],
      },
      backgroundImage: {
        'texture': "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23c9a84c' fill-opacity='0.05' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E\")",
      }
    },
  },
  plugins: [],
}
