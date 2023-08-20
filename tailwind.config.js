/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/pages/*.tsx', './src/components/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        'ss-ja': ['"Zen Maru Gothic"', 'sans-serif'],
        'ss-en': ['"Montserrat"', 'sans-serif'],
        dsgn: ['"Dancing Script"', 'sans-serif']
      },
      colors: {
        'org-pink': '#e5cbd1',
        'org-blue': '#6699a1',
        primary: '#331d2c'
      }
    }
  },
  plugins: [
    function ({ addUtilities, addComponents, theme }) {
      let utilities = {};

      const colors = theme('colors', {});
      const allColors = Object.keys(colors).map((key) => ({
        name: key,
        values: colors[key]
      }));
      allColors.forEach(({ name, values }) => {
        if (typeof values === 'object') {
          Object.keys(values).forEach((value) => {
            utilities[`.stripes-${name}-${value}`] = {
              '--stripes-color': values[value]
            };
          });
        } else {
          utilities[`.stripes-${name}`] = {
            '--stripes-color': values
          };
        }
      });

      const degrees = {
        0: '0',
        45: '45',
        90: '90',
        135: '135',
        180: '180',
        225: '225',
        270: '270',
        315: '315'
      };
      Object.keys(degrees).forEach((degree) => {
        utilities[`.stripes-deg-${degree}`] = {
          '--stripes-deg': degrees[degree] + 'deg'
        };
      });

      const components = {
        '.stripes-vertical': {
          backgroundImage:
            'repeating-linear-gradient(var(--stripes-deg), var(--stripes-color), var(--stripes-color) 2px, transparent 2px, transparent 5px)'
        },
        '.stripes-horizontal': {
          backgroundImage:
            'repeating-linear-gradient(var(--stripes-deg), var(--stripes-color), var(--stripes-color) 4px, transparent 4px, transparent 7px)'
        }
      };

      addUtilities(utilities);
      addComponents(components);
    }
  ]
};
