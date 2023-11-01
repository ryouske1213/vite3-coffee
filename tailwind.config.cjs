/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'home': 'rgb(251,251,251)', // 自定義顏色名稱和對應的色碼
      },
    },
  },
  plugins: [],
}
