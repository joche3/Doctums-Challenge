/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          digital: ['DigitalDisco', 'sans-serif'], // Establece la fuente DigitalDisco
          digitalThin: ['DigitalDisco-Thin', 'sans-serif'], // Establece la fuente DigitalDisco-Thin
          runescape: ['Runescape', 'sans-serif'], // Establece la fuente Runescape
        },
        colors: {
          customPrimary: {
            100: '#FFF2CF', // Puedes reemplazar estos valores con los colores reales
            200: '#FFE59F',
            300: '#FFD76F',
            400: '#FFCA3F',
            500: '#FFBD0F',
            600: '#DEA100',
            700: '#B78400',
            800: '#8F6800',
            900: '#684B00',
          },
          customSecondary: {
            100: '#D2D2D2',
            200: '#BBBBBB',
            300: '#A5A5A5',
            400: '#8E8E8E',
            500: '#787878',
            600: '#616161',
            700: '#4B4B4B',
            800: '#343434',
            900: '#202020',
          },
          customTertiary: {
            100: '#D9F0F3',
            200: '#B3E1E7',
            300: '#8DD3DC',
            400: '#67C4D0',
            500: '#41B5C4',
            600: '#359CA9',
            700: '#2B808B',
            800: '#22656D',
            900: '#19494F',
          },
        },
      },
    },
  plugins: [],
}

