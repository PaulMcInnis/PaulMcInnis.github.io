/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Lato', 'sans-serif'],
      },
      colors: {
        accent: {
          DEFAULT: '#b9eebc',
          dark: '#2d6a4f',
        },
      },
    },
  },
  plugins: [],
};
