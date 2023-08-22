/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        white: "#ffffff",
        gray: "#1A3B583D",
        grayfield: "#CBDBEA",
        subText: "#999999",
        content: "#9A9A9A",
        dark: "#212121",
        columnBg: "#F5F9F9",
        green: {
          dark: "#329C89",
          light: "#ECF3F3",
        },
        primary: "#FEFEFE",
      },
      height: {
        inherit: "inherit",
        "100vh": "100vh",
        "80vh": "80vh",
      },
    },
  },

  plugins: [],
};
