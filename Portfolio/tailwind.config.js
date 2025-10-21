/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffcc00',   // retro yellow accent
        secondary: '#0d0d0d', // dark base background
        accent: '#1a1a1a',    // subtle contrast layer
      },
      fontFamily: {
        mono: ['"IBM Plex Mono"', 'monospace'],      // clean monospaced type
        pixel: ['"Press Start 2P"', 'cursive'],      // retro pixel headline
      },
      boxShadow: {
        glow: '0 0 10px #ffcc00', // glowing retro edges
      },
    },
  },
  plugins: [],
}
