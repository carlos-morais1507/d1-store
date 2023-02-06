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
        
          "primary": "#ffc547",
        
          "secondary": "#29dd89",
        
          "accent": "#ce466a",
        
          "neutral": "#292730",
        
          "base-100": "#F2F1F4",
        
          "info": "#648bff",
        
          "success": "#1bb67d",
        
          "warning": "#E17E05",
        
          "error": "#E92F64",
        },
        dark: {
          "primary": "#9e89ff",
          
          "secondary": "#84deff",
          
          "accent": "#12eab8",
          
          "neutral": "#cccccc",
          
          "base-100": "#201d20",
          
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