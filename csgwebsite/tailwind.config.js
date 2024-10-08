/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
export default {
    darkMode: ['class'],
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
  	fontFamily: {
  		poppins: ['Poppins', 'sans-serif'],
  		firacode: ['Fira Code', 'monospace']
  	},
  	extend: {
  		colors: {
  			logopurple: '#663072',
  			buttonpurple: '#C59ED1',
  			bggray: '#EDEDED',
  			bordergray: '#E4E4E4',
  			sponsorplatinum: '#A1DDE4',
  			sponsorgold: '#DECE93',
  			sponsorsilver: '#CCC',
  			sponsorbronze: '#CBA991'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	},
  	screens: {
  		md: '920px'
  	}
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui'), require("tailwindcss-animate")],
  daisyui: {
    themes: false, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: 'dark', // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: false, // Shows info about daisyUI version and used config in the console when building your CSS

    themes: [
      {
        csg: {
          primary: '#c59ed1',

          secondary: '#663072',

          accent: '#60a5fa',

          neutral: '#ededed',

          'base-100': '#1d232a',

          info: '#3abff8',

          success: '#36d399',

          warning: '#fbbd23',

          error: '#f87272',
        },
      },
    ],
  },
};
