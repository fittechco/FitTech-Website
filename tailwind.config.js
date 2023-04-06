export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'montserrat': ['Montserrat', 'sans-serif']
    },
    extend: {
      colors:{
        'mainColor': "#0C2840",
        'mainColor2': "#133E63",
        'mainColor3': "#091E2F",
        'accentColor': "#339CF8",
        'accentColor2': "#5CB0F9",
        'accentColor3': "#0D8AF7",
        'thirdColor': "#EDEDED",
        'thirdColor3': "#D9D9D9"
      }
    },
   
  },
  plugins: [],
}