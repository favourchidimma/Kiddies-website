/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      screens: {
        mobile: {max: "640px"},
        tablet: {max: "768px"},
        laptops: {max: "1024px"},
        desktops: {max: "1280px"},
        largeScreens: {max: "1536px"}
      },
      colors:{
        "oshobs" : "#A789E0",
        "light-blue": "#5F9CFF",
        "grey": "#C4C4C4",
        "pink": "#F268A9"
      },
      backgroundImage:{
        "child-playing": "./assets/child.png"
      },
      // fontFamily:{
      //   "poppins": ['Poppins', 'serif' ]
      // }
    },
  },
  plugins: [],
}

