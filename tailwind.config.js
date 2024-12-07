/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      extend: {
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Add Poppins to the fontFamily
        playfair: ['Playfair Display', 'serif'],
        sail: ['Sail', 'cursive'],
        carter: ['Carter One', 'sail'],
      },
    },
  },
  plugins: [],
}

