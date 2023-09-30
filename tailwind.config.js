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
        'search-bar-fill' : '#212327',
        'card-component' : '#000',
        'card-component-bg' : '#40596A',
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
      height: {
        '39px': '39px',
        '355px': '355px',
        '143px': '143px',
        '1px': '1px',
        
        'login-page-icon': '9.07738rem',
        'login-page-100': '199px',
      },
      width: {
        '334': '20.875rem',
        '442': '27.625rem',
        '596px': '596px',
        '426px': '426px',
        '434px': '434px',
        '348px': '348px',
        '512px': '512px',
        '482px': '482px',
        '598px': '598px',
        'login-page-icon': '8.50806rem',
        'login-page-100': '455px',
        '172px': '172px',

      },
      gap: {
        '2.5': '0.625rem',
        '4.5': '15px',
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
        'search-padding': '10px 247px 10px 16px',
        'search-svg-padding': '1.583px 1.782px 1.781px 1.583px',
        'card-component-1': '0.625rem 0.9375rem',
        'card-component-signup-1': '12px 16px',
        'card-component-signup-2': '80px 20px 20px 20px',
        'tweet-component-frame': '8px 16px',
        'login-page': '14.78125rem 10.121rem',
      },
    },
  },
  plugins: [],
}

