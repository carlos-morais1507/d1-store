/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-img': "url('/assets/images/heroimg1.png')"
      }
    },
  },
  daisyui: {
    themes: [
      {
        light: {
        
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
        dark: {
          "primary": "#ff9347",
          
          "secondary": "#e01d64",
          
          "accent": "#12eab8",
          
          "neutral": "#F2F1F4",
          
          "base-100": "#232429",
          
          "info": "#9DDAF0",
          
          "success": "#64D8A0",
          
          "warning": "#EFAE3E",
          
          "error": "#F41F4A",
        }
      },
    ],
  },
  plugins: [require("daisyui")],
}