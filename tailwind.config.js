module.exports = {
  darkMode: "class",
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        main: "#34ffc8",
        baseColor: '#212121',
        background: "#212121",
        header: "black",
        accent: "var(--accent)",
      },
    },
  },
  variants: {},
  plugins: []
};
