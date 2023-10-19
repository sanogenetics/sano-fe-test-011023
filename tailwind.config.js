/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
   theme: {
      extend: {},
      colors: {
         // brand colours
         "sano-light-pink": "var(--vt-sano-light-pink)",
         "sano-pink": "var(--vt-sano-pink)",
         "sano-light-pink-dark": "var(--vt-sano-light-pink-dark)",
         "sano-burgundy": "var(--vt-sano-burgundy)",
         "sano-red-orange": "var(--vt-sano-red-orange)",
         "sano-green": "var(--vt-sano-green)",
         white: "var(--vt-white)",
         black: "var(--vt-black)",
      },
   },
   plugins: [],
};
