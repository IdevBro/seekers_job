/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        titleBlack: "#021638",
        textBlack: "#1C1C1E",

        brendBlue: "#4864E1",
        lightBlue: "#CBD2F6",

        grey: "#636366",
        lightGrey: "#AEAEB2",

        white: "#FFFFFF",
        bgButton: "#4864E10F",

        footerGrey: "#C5C5C5",
        bgFooter: "#021638",
        bgFooterBtn: "#CBCBCB",

        borderColor: "#E9EBED",
      },
      fontFamily: {
        regular: ["Regular"],
        medium: ["Medium"],
        semibold: ["Semibold"],
        bold: ["Bold"],
      },
    },
  },
  plugins: [],
  screen: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
  },
};
