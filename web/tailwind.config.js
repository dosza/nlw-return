module.exports = {
  darkMode: 'media',
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          300: '#996dff',
          500: '#8257e6',
        },

        primary: {
          light: '#27272a',
          dark: '#f4f4f5',
        },
        secondary: {
          light: '#71717a',
          dark: '#a1a1aa'

        },

        surface: {
          primary: {
            light: '#ffffff',
            dark: '#18181b',
          },
          secondary: {
            light: '#f4f4f5',
            dark: '#27272a',
          }
        }, tooltip: {
          light: '#f4f4f5',
          dark: '#27272a'
        },
        stroke: {
          light: '#d4d4d8',
          dark: '#52525b'
        }

      },
      borderRadius: {
        md: '4px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar')
  ],
}