/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{vue,js,ts}",
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.{vue,js,ts}",
    "./pages/**/*.{vue,js,ts}",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.config.{js,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdf4',
          100: '#f0fdf4',
          200: '#f0fdf4',
          300: '#f0fdf4',
          400: '#f0fdf4',
          500: '#f0fdf4',
          600: '#f0fdf4',
          700: '#f0fdf4',
          800: '#f0fdf4',
          900: '#f0fdf4',
          950: '#f0fdf4',
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
