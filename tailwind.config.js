/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
          "primary": "#dbb35e",
        
          "secondary": "#2fc680",
        
          "accent": "#ce466a",
        
          "neutral": "#292730",
        
          "base-100": "#F2F1F4",
        
          "info": "#9BB0EE",
        
          "success": "#0F6143",
        
          "warning": "#E17E05",
        
          "error": "#E92F64",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}