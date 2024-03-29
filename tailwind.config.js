/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1600px',
      },
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "color-azul": "var(--color-azul)",
        "color-gris1": "var(--color-gris1)",
        "color-gris-fondo": "var(--color-gris-fondo)",
        "color-gris-footer": "var(--color-gris-footer)",
        "color-gris-2": "var(--color-gris-2)",
        
      },
      
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

