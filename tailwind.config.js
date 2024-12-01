/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './dist/**/*.html',  // All HTML files in the dist folder
    './src/**/*.css',    // Any CSS files where Tailwind classes might appear
    './dist/**/*.js',    // Any JavaScript files using Tailwind classes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

