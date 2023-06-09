/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0FCFEC",

          secondary: "#19D3AE",

          accent: "#3A4256",

          neutral: "#191D24",

          bright: "#ffffff",

          "base-100": "#FDFDFD",

          info: "#5F9DF7",

          success: "#54B435",

          warning: "#FBBD23",

          error: "#F44250",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
