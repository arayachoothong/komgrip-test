/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{html,js,vue}',
    './src/components/**/*.{html,js,vue}',
    './src/core-ui/**/*.{html,js,vue}',
    './src/layouts/**/*.{html,js,vue}',
    './public/index.html',
  ],
  theme: {
    extend: {
      theme: {},
    },
  },
  plugins: [],
}
