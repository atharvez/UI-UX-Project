/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0e',
        card: '#12121a',
        primary: '#3d61ff',
        accent: '#8b5cf6',
        text: '#ffffff',
        textMuted: '#9ca3af',
        live: '#ef4444'
      }
    },
  },
  plugins: [],
}
