module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
        primary: '#4F46E5', // Indigo
        secondary: '#22D3EE', // Cyan
        accent: '#F472B6', // Pink
        background: '#F3F4F6', // light gray
        text: '#111827'
      },
  },
  plugins: [require('@tailwindcss/typography')],
}