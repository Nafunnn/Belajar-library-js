/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ff4b57",

          secondary: "#152747",

          accent: "#513448",

          neutral: "#171618",

          "base-100": "#09090B",

          info: "#66C6FF",

          success: "#87D039",

          warning: "#E2D562",

          error: "#FF6F6F",
        },
      },
    ],
  },
  plugins: [
    require("daisyui"),
    require("flowbite/plugin"),
    // ...plugin lainnya
  ],
};
