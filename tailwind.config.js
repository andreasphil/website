module.exports = {
  theme: {
    extend: {
      width: {
        'breakout-small': 'calc(100% + 2rem)',
        'breakout-large': 'calc(100% + 4rem)'
      },
      maxWidth: {
        'breakout-small': 'calc(100% + 2rem)',
        'breakout-large': 'calc(100% + 4rem)'
      }
    },

    spacing: {
      px: '1px',
      '0': '0',
      '1': '.125rem',
      '2': '.5rem',
      '3': '1rem',
      '4': '2rem',
      '5': '4rem',
      '6': '8rem'
    },
    screens: {
      small: '480px',
      normal: '640px'
    },
    fontFamily: {
      sans: [
        'Inter',
        '-apple-system',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif'
      ]
    },
    fontSize: {
      tiny: '.875rem',
      small: '1rem',
      base: '1.125rem',
      large: '1.25rem',
      h1: '2rem',
      h2: '1.5rem',
      h3: '1.25rem',
    },
    fontWeight: {
      normal: '400',
      emphasized: '500',
      heavy: '600'
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      normal: '1.75'
    },
    borderRadius: {
      default: '.2rem',
      none: '0',
      small: '.125rem',
      full: '9999rem'
    }
  },
  variants: {},
  plugins: [
    require('tailwindcss-transition')({
      standard: 'all .3s ease'
    })
  ]
}
