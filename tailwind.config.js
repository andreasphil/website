module.exports = {
  theme: {
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
      normal: '768px'
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
      h1: '3.375rem',
      h2: '2.25rem',
      h3: '1.75rem',
    },
    fontWeight: {
      normal: '400',
      emphasized: '500'
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      normal: '1.75'
    },
    borderRadius: {
      none: '0',
      normal: '.4rem',
      full: '9999rem'
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss-transition')({
      standard: 'all .3s ease'
    })
  ]
}
