/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e40af', // Indigo-800
        secondary: '#f3f4f6', // Gray-100
        accent: '#7c3aed', // Violet-600
        textPrimary: '#111827', // Gray-900
        textSecondary: '#6b7280', // Gray-500
        background: '#ffffff', // White
        footerBg: '#1f2937', // Gray-800
        footerText: '#d1d5db', // Gray-300
      },
    },
  },
  plugins: [],
}
