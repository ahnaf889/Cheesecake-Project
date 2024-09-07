/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        auth_bg_color: '#FFF8E1',
        auth_font_color: '#734B33',
      },
    },
    fontFamily:{
      Roboto : ["Roboto", 'system-ui'],
    },
  },
  plugins: [],
};