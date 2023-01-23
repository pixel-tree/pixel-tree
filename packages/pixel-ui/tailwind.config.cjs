/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './index.html',
    '../../apps/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  plugins: [],
  corePlugins: {
    preflight: false
  },
  prefix: 'pixel-ui-'
}
