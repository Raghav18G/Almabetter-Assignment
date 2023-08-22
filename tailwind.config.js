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
      },
      height: {
        inherit: "inherit",
        "100vh": "100vh",
      },
    },
  },

  plugins: [],
};
