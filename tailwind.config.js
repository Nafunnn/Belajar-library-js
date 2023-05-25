/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require("flowbite/plugin"),
    // ...plugin lainnya
  ],
};
