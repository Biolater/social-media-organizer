/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'ff7d7d': '#ff7d7d',
        'footer': "#eeeeee",
      },
      boxShadow: {
        'footer': "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;"
      },
      borderRadius: {
        'footer': "10px"
      },
    },
  },
  plugins: [],
}
