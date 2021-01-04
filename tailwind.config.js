module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        bigSize: "200%",
        desktopSize: "450px",
      },
      colors: {
        veryDarkDesaturatedBlue: "#1d1e35",
        softRed: "#f47c57",
        veryDarkGrayishBlue: "#554a5e",
        darkGrayishBlue: "#787887",
        lightGrayishBlue: "#e7e7e9",
        softViolet: "#af67e9",
        softBlue: "#6565e7",
      },
      fontFamily: {
        kumbhSans: ["Kumbh Sans"],
      },
      fontSize: {
        customXl: "2rem",
      },
      spacing: {
        custom: "5.5rem",
      },
    },
  },
  variants: {
    extend: {
      textColor: ["active"],
    },
  },
  plugins: [],
};
