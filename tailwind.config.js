module.exports = {
  theme: {
    extend: {
      width: {
        'breakout': 'calc(100% + 2rem)',
      },
      maxWidth: {
        'breakout': 'calc(100% + 2rem)',
        'layout-max': '1680px'
      }
    },
    colors: {
      white: 'var(--color-white)',
      black: 'var(--color-black)',
      'gray-30': 'var(--color-gray-30)',
      'gray-20': 'var(--color-gray-20)',
      'gray-10': 'var(--color-gray-10)',
      indigo: 'var(--color-indigo)',
      transparent: 'transparent'
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
      '8': '8rem'
    },
    screens: {
      normal: '680px'
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
      h2: '1.5rem'
    },
    fontWeight: {
      normal: '400',
      emphasized: '600',
      heavy: '700'
    },
    lineHeight: {
      none: '1',
      tight: '1.375',
      normal: '1.75'
    },
    borderRadius: {
      default: '.2rem',
      none: '0',
      full: '9999rem'
    },
    borderWidth: {
      default: '0.125rem',
      hair: '1px'
    }
  },
  variants: {},
  plugins: [],
  purge: [
    './site/**/*.html',
    './site/**/*.liquid',
    './site/**/*.md',
    './src/**/*.css',
    './src/**/*.js',
  ]
};
