/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        forest:    '#1f3a2e',
        forestdk:  '#15281f',
        sunset:    '#d97a3a',
        ember:     '#b04918',
        ochre:     '#e0a458',
        sand:      '#f4ead6',
        cream:     '#faf5e9',
        bone:      '#fffbf2',
        ink:       '#1a1714',
        slate:     '#5a534a',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'reading': '68ch',
      },
    },
  },
  plugins: [],
}
