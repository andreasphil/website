module.exports = {
  theme: {
    extend: {
      width: {
        'breakout-1': 'calc(100% + 2rem)',
        'breakout-2': 'calc(100% + 4rem)',
      },
      maxWidth: {
        'breakout-1': 'calc(100% + 2rem)',
        'breakout-2': 'calc(100% + 4rem)',
      }
    },

    colors: {
      white: '#ffffff',
      black: '#393e46',
      steel: '#929aab',
      smoke: '#eeeeee',
      cloud: '#f7f7f7',
      indigo: '#7971ea',
      orange: '#eac371'
    },
    spacing: {
      px: '1px',
      '0': '0',
      '1/4': '.25rem',
      '1/2': '.5rem',
      '3/4': '.75rem',
      '1': '1rem',
      '1-1/2': '1.5rem',
      '2': '2rem',
      '4': '4rem',
      '6': '6rem',
      '8': '8rem',
      'max': '1024px'
    },
    screens: {
      normal: '640px'
    },
    container: {
      center: true
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
      small: '.875rem',
      base: '1rem',
      large: '1.125rem',
      h1: '2rem',
      h2: '1.5rem',
    },
    fontWeight: {
      normal: '400',
      emphasized: '600'
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      normal: '1.75'
    },
    borderRadius: {
      default: '.2rem',
      none: '0',
      full: '9999rem'
    },
    borderWidth: {
      default: '1px'
    }
  },

  variants: {},

  plugins: [
    require('tailwindcss-transition')({
      standard: 'all .2s'
    })
  ]
}
