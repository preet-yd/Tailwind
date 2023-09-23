/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'neutral-50': '#f9f9f9',
        'neutral-200': '#e4e4e4',
        'blue-250' : '#1d9bf03d',
        'twitter-blue' : '#1D9BF0',
        'twitter-blue-hover' : '#1871CA',
        // 'neutral-700' : '#404040',


     },
      fontFamily:{
        "inter" : "Inter",
        "georgia" : "georgia"
      },
      boxShadow:{
        "08160" : "0px 8px 16px 0px rgba(0, 0, 0, 0.25)",
      },
      spacing:{
        '136' : '30rem',
      },
      width: {
        '334': '20.875rem',
        '442': '27.625rem',
        '596px': '596px',
      },
      gap: {
        '2.5': '0.625rem',
      },
      borderRadius: {
        '4xl': '4rem',
        '3.5xl': '1.875rem',
        '30px': '30px',
      },
      padding: {
        '15px': '15px',
        '93px': '93px',
        '20,80,0,80': '20px 80px 0px 80px',
      },
    },
  },
  plugins: [],
}

