/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'cinema-bg': '#0a0a0a',     // Deepest black/charcoal
                'cinema-card': '#121212',   // Slightly lighter for cards
                'cinema-orange': '#FF6B00', // Signature Bold Orange
                'cinema-light': '#E0E0E0',  // Off-white text
            },
            fontFamily: {
                'sans': ['Inter', 'sans-serif'],
                'mono': ['Fira Code', 'monospace'],
            },
            backgroundImage: {
                'wireframe': "url('https://grainy-gradients.vercel.app/noise.svg')", // Texture overlay
            }
        },
    },
    plugins: [],
}
