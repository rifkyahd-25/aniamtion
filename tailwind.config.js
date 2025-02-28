/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#f5f5f5',
        foreground: '#333',
        primary: '#3490dc',
        muted: '#e0e0e0',
        border: '#dcdcdc',
      },
      backgroundImage: {
        'stars': 'radial-gradient(2px 2px at 20px 30px, #eee, rgba(0,0,0,0)), radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 50px 160px, #ddd, rgba(0,0,0,0)), radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 130px 80px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 160px 120px, #ddd, rgba(0,0,0,0))',
      },
      animation: {
        'twinkle': 'twinkle 5s ease-in-out infinite',
      },
      keyframes: {
        twinkle: {
          '0%': { opacity: '0.5' },
          '50%': { opacity: '0.8' },
          '100%': { opacity: '0.5' },
        },
      },
    },
  },
  plugins: [],
}
