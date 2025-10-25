const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {

         animation: {
        marquee: 'marquee 40s linear infinite',
        marqueereverse: 'marquee 40s linear infinite reverse',
        marquee2: 'marquee2 40s linear infinite',
        marquee2reverse: 'marquee2 40s linear infinite reverse',
        marquee3: 'marquee 60s linear infinite',
        marquee4: 'marquee2 60s linear infinite',
        scaler: 'scaler .6s ease-in-out alternate infinite',
        infiniterotate: 'rotate 4s linear  infinite'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },

        scaler: {
          '100%': { transform: 'scale(1.3)' }
        },
         rotate: {
          "0%": {transform:" rotate(0deg)"},
        "100%":{transform: "rotate(360deg)"}
        }
      },
      colors: {
         'butter-color': '#fffabe',
        'butter-bg-color': '#009565',
        'crisps-color': '#fffabc',
        'crisps-color2': '#e3e773',
        'crisps-bg-color': '#8b5c41',
        'crisps-bg-color2':'#f15a29',
        'zensnack-color': '#f8f6e9',
        'zensnack-bg-color': '#343233',
        'merchandise-color': '#071342',
        'merchandise-bg-color': '#fccbbe',
        gray: '#fefefe'
      },
      fontFamily: {
        'obviously-narrow': ["obviously-narrow", "sans-serif"],
        'obviously-display': ["obviously", "sans-serif"],
        //und: ['var(--Howlt)'],
        //'und-reg': ['var(--HowltReg)'],
       'und-reg2': ['var(--SuisseReg)']

      },
      fontSize: {
        'und-header': [
          '120px',
          {
            lineHeight: '85%',
            letterSpacing: '-0.01em'
          }
        ],
        caption: [
          '13px',
          {
            lineHeight: '1.5',
            letterSpacing: '-0.01em'
          }
        ]
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
