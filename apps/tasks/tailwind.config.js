/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      'home-h': { raw: '(min-height: 900px)' },
      'home-h-small': { raw: '(min-height: 768px)' },
      xzms: '320px',
      xzs: '360px',
      xxzs: '376px',
      xxs: '415px',
      rxs: '600px',
      xs: '601px',
      sm: '640px',
      xmd: '720px',
      md: '769px',
      lg: '1025px',
      xl: '1280px',
      '2xl': '1356px',
      '3xl': '1440px',
      '3.5xl': '1536px',
      '4xl': '1920px',
      '5xl': '2560px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      white8: 'rgba(255, 255, 255, 0.08)',
      white12: 'rgba(255, 255, 255, 0.12)',
      white16: 'rgba(255, 255, 255, 0.16)',
      black33: 'rgba(0, 0, 0, 0.33)',
      gray: colors.gray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
      thumbnailBorder: 'rgba(256, 256, 256, 0.08)',
      neutral: {
        border: 'rgb(36, 36, 36)',
        chip: 'rgb(65,65,65)',
        '000': '#070707',
        '035': '#E2E2E2',
        '040': '#F1FAFE',
        '050': '#111111',
        '055': '#AFAFAF',
        '075': '#171717',
        '078': '#7E8299',
        '080': '#141414',
        '085': '#333333',
        '090': '#1F1F1F',
        '095': '#545454',
        100: '#222222',
        200: '#292929',
        300: '#3C3C3C',
        400: '#505050',
        500: '#6D6D6D',
        600: '#929292',
        700: '#C2C2C2',
        800: '#D7D7D7',
        850: '#EEEEEECC',
        900: '#EEEEEE',
        1000: ' #FFFFFF',
      },
      colour: {
        b1: '#EDF6FF',
        b2: '#005B96',
        b3: '#005B96',
        b4: '#011F4B',
        f1: '#F6CA65',
        g1: '#1BC5BD',
        g2: '#00D932',
        g3: '#00C832',
        g4: '#032312',
        g5: '#00FF3B',
        r0: '#CF3B32',
        r1: '#FE453A',
        r2: '#CF3B32',
        r3: '#FF500A',
        r4: '#261004',
        r5: '#cf3b3240',
      },
      brand: {
        green: '#2CB040',
      },
      interface: {
        overlay: 'rgba(7, 7, 7, 0.5)',
      },
    },
    spacing: {
      'feed-in': '16.67vh',
      '15/16': '90.3%',
      '9/16': '56.25%',
      '1/2': '50%',
      '1.61/1': '62.11%',
      '16/9': '56.25%',
      '288/107': '37.15%',
      '2/1': '50%',
      '1/1': '100%',
      px: '1px',
      0: '0px',
      0.5: '2px',
      0.75: '3px',
      1: '4px',
      1.25: '5px',
      1.5: '6px',
      1.75: '7px',
      2: '8px',
      2.5: '10px',
      2.75: '11px',
      3: '12px',
      3.25: '13px',
      3.5: '14px',
      3.75: '15px',
      4: '16px',
      4.25: '17px',
      4.5: '18px',
      5: '20px',
      5.25: '21px',
      5.5: '22px',
      6: '24px',
      6.25: '25px',
      6.5: '26px',
      6.75: '27px',
      7: '28px',
      7.75: '31px',
      8: '32px',
      8.5: '34px',
      8.75: '35px',
      9: '36px',
      9.5: '38px',
      10: '40px',
      10.25: '41px',
      10.5: '42px',
      10.75: '43px',
      11: '44px',
      12: '48px',
      12.5: '50px',
      12.7: '51px',
      13: '52px',
      14: '56px',
      15: '60px',
      15.75: '63px',
      16: '64px',
      16.25: '65px',
      17: '68px',
      17.5: '70px',
      18: '72px',
      18.5: '74px',
      19: '76px',
      20: '80px',
      20.5: '82px',
      22.5: '90px',
      23: '92px',
      23.5: '94px',
      24: '96px',
      25: '100px',
      28: '112px',
      30: '121px',
      32: '128px',
      35: '138px',
      36: '144px',
      37: '149.408px',
      39: '156px',
      40: '160px',
      42.75: '172px',
      44: '176px',
      45: '180px',
      48: '192px',
      51: '204px',
      52: '208px',
      53: '212px',
      54.75: '219px',
      56: '224px',
      58.5: '234px',
      60: '240px',
      64: '256px',
      73: '294.192px',
      75: '294.192px',
      80: '320px',
      82: '328px',
      83: '331.2px',
      87: '348px',
      88: '356px',
      89: '375px',
      95.5: '382px',
      96: '384px',
      100: '404.8px',
      103: '412.8px',
      106.25: '425px',
      107: '428px',
      110.5: '442px',
      115: '470px',
      120: '480px',
      130: '507px',
      150: '553.696px',
      160: '640px',
      180: '720px',
      190: '1248px',
      200: '1792px',
    },
    animation: {
      none: 'none',
      spin: 'spin 1s linear infinite',
      ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      bounce: 'bounce 1s infinite',
      bounce200: 'bounce 1s infinite 200ms',
      bounce400: 'bounce 1s infinite 400ms',
    },
    backgroundColor: theme => theme('colors'),
    backgroundImage: {
      none: 'none',
      'hero-overlay':
        'linear-gradient(     to bottom,     hsla(0, 0%, 0%, 0) 0%,     hsla(0, 0%, 0%, 0.005) 8.1%,     hsla(0, 0%, 0%, 0.019) 15.5%,     hsla(0, 0%, 0%, 0.042) 22.5%,     hsla(0, 0%, 0%, 0.07) 29%,     hsla(0, 0%, 0%, 0.104) 35.3%,     hsla(0, 0%, 0%, 0.141) 41.2%,     hsla(0, 0%, 0%, 0.18) 47.1%,     hsla(0, 0%, 0%, 0.22) 52.9%,     hsla(0, 0%, 0%, 0.259) 58.8%,     hsla(0, 0%, 0%, 0.296) 64.7%,     hsla(0, 0%, 0%, 0.33) 71%,     hsla(0, 0%, 0%, 0.358) 77.5%,     hsla(0, 0%, 0%, 0.381) 84.5%,     hsla(0, 0%, 0%, 0.395) 91.9%,     hsla(0, 0%, 0%, 0.4) 100%   );',
      'hero-overlay-top':
        'linear-gradient(     to top,     hsla(0, 0%, 0%, 0) 0%,     hsla(0, 0%, 0%, 0.005) 8.1%,     hsla(0, 0%, 0%, 0.019) 15.5%,     hsla(0, 0%, 0%, 0.042) 22.5%,     hsla(0, 0%, 0%, 0.07) 29%,     hsla(0, 0%, 0%, 0.104) 35.3%,     hsla(0, 0%, 0%, 0.141) 41.2%,     hsla(0, 0%, 0%, 0.18) 47.1%,     hsla(0, 0%, 0%, 0.22) 52.9%,     hsla(0, 0%, 0%, 0.259) 58.8%,     hsla(0, 0%, 0%, 0.296) 64.7%,     hsla(0, 0%, 0%, 0.33) 71%,     hsla(0, 0%, 0%, 0.358) 77.5%,     hsla(0, 0%, 0%, 0.381) 84.5%,     hsla(0, 0%, 0%, 0.395) 91.9%,     hsla(0, 0%, 0%, 0.4) 100%   );',
      'trial-feature-line':
        'linear-gradient(180deg, #333333 0%, rgba(51, 51, 51, 0.994477) 8.07%, rgba(51, 51, 51, 0.978216) 15.54%, rgba(51, 51, 51, 0.95168) 22.5%, rgba(51, 51, 51, 0.91533) 29.04%, rgba(51, 51, 51, 0.86963) 35.26%, rgba(51, 51, 51, 0.81504) 41.25%, rgba(51, 51, 51, 0.752024) 47.1%, rgba(51, 51, 51, 0.681043) 52.9%, rgba(51, 51, 51, 0.60256) 58.75%, rgba(51, 51, 51, 0.517037) 64.74%, rgba(51, 51, 51, 0.424936) 70.96%, rgba(51, 51, 51, 0.32672) 77.5%, rgba(51, 51, 51, 0.22285) 84.46%, rgba(51, 51, 51, 0.11379) 91.93%, rgba(51, 51, 51, 0) 100%)',
      'gradient-hero-enabled':
        'linear-gradient(360deg, rgba(0, 0, 0, 0.16) 0%, rgba(0, 0, 0, 0.159116) 8.07%, rgba(0, 0, 0, 0.156515) 15.54%, rgba(0, 0, 0, 0.152269) 22.5%, rgba(0, 0, 0, 0.146453) 29.04%, rgba(0, 0, 0, 0.139141) 35.26%, rgba(0, 0, 0, 0.130406) 41.25%, rgba(0, 0, 0, 0.120324) 47.1%, rgba(0, 0, 0, 0.108967) 52.9%, rgba(0, 0, 0, 0.0964096) 58.75%, rgba(0, 0, 0, 0.0827259) 64.74%, rgba(0, 0, 0, 0.0679898) 70.96%, rgba(0, 0, 0, 0.0522752) 77.5%, rgba(0, 0, 0, 0.0356561) 84.46%, rgba(0, 0, 0, 0.0182063) 91.93%, rgba(0, 0, 0, 0) 100%)',
      'gradient-hero-hover':
        'linear-gradient(360deg, rgba(0, 0, 0, 0.16) 0%, rgba(0, 0, 0, 0.159116) 8.07%, rgba(0, 0, 0, 0.156515) 15.54%, rgba(0, 0, 0, 0.152269) 22.5%, rgba(0, 0, 0, 0.146453) 29.04%, rgba(0, 0, 0, 0.139141) 35.26%, rgba(0, 0, 0, 0.130406) 41.25%, rgba(0, 0, 0, 0.120324) 47.1%, rgba(0, 0, 0, 0.108967) 52.9%, rgba(0, 0, 0, 0.0964096) 58.75%, rgba(0, 0, 0, 0.0827259) 64.74%, rgba(0, 0, 0, 0.0679898) 70.96%, rgba(0, 0, 0, 0.0522752) 77.5%, rgba(0, 0, 0, 0.0356561) 84.46%, rgba(0, 0, 0, 0.0182063) 91.93%, rgba(0, 0, 0, 0) 100%)',
      'gradient-hero-pressed':
        'linear-gradient(360deg, rgba(0, 0, 0, 0.26) 0%, rgba(0, 0, 0, 0.259116) 8.07%, rgba(0, 0, 0, 0.256515) 15.54%, rgba(0, 0, 0, 0.252269) 22.5%, rgba(0, 0, 0, 0.256453) 29.04%, rgba(0, 0, 0, 0.239141) 35.26%, rgba(0, 0, 0, 0.230406) 41.25%, rgba(0, 0, 0, 0.220324) 47.1%, rgba(0, 0, 0, 0.208967) 52.9%, rgba(0, 0, 0, 0.1964096) 58.75%, rgba(0, 0, 0, 0.1827259) 64.74%, rgba(0, 0, 0, 0.1679898) 70.96%, rgba(0, 0, 0, 0.1522752) 77.5%, rgba(0, 0, 0, 0.1356561) 84.46%, rgba(0, 0, 0, 0.1182063) 91.93%, rgba(0, 0, 0, 0.10) 100%)',
      'gradient-hero-top':
        ' linear-gradient(360deg, rgba(0, 0, 0, 0.16) 0%, rgba(0, 0, 0, 0.159116) 8.07%, rgba(0, 0, 0, 0.156515) 15.54%, rgba(0, 0, 0, 0.152269) 22.5%, rgba(0, 0, 0, 0.146453) 29.04%, rgba(0, 0, 0, 0.139141) 35.26%, rgba(0, 0, 0, 0.130406) 41.25%, rgba(0, 0, 0, 0.120324) 47.1%, rgba(0, 0, 0, 0.108967) 52.9%, rgba(0, 0, 0, 0.0964096) 58.75%, rgba(0, 0, 0, 0.0827259) 64.74%, rgba(0, 0, 0, 0.0679898) 70.96%, rgba(0, 0, 0, 0.0522752) 77.5%, rgba(0, 0, 0, 0.0356561) 84.46%, rgba(0, 0, 0, 0.0182063) 91.93%, rgba(0, 0, 0, 0) 100%)',
      'gradient-hero-side': 'linear-gradient(77deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0) 85%)',
      'gradient-hero-bottom':
        'linear-gradient( to bottom, hsla(0, 0%, 0%, 0) 0%, hsla(0, 0%, 0%, 0.013) 8.1%, hsla(0, 0%, 0%, 0.049) 15.5%, hsla(0, 0%, 0%, 0.104) 22.5%, hsla(0, 0%, 0%, 0.175) 29%, hsla(0, 0%, 0%, 0.259) 35.3%, hsla(0, 0%, 0%, 0.352) 41.2%, hsla(0, 0%, 0%, 0.45) 47.1%, hsla(0, 0%, 0%, 0.55) 52.9%, hsla(0, 0%, 0%, 0.648) 58.8%, hsla(0, 0%, 0%, 0.741) 64.7%, hsla(0, 0%, 0%, 0.825) 71%, hsla(0, 0%, 0%, 0.896) 77.5%, hsla(0, 0%, 0%, 0.951) 84.5%, hsla(0, 0%, 0%, 0.987) 91.9%, hsl(0, 0%, 0%) 100%)',
      'gradient-to-t': 'linear-gradient(to top, var(--tw-gradient-stops))',
      'gradient-to-tr': 'linear-gradient(to top right, var(--tw-gradient-stops))',
      'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
      'gradient-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
      'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
      'gradient-to-bl': 'linear-gradient(to bottom left, var(--tw-gradient-stops))',
      'gradient-to-l': 'linear-gradient(to left, var(--tw-gradient-stops))',
      'gradient-to-tl': 'linear-gradient(to top left, var(--tw-gradient-stops))',
    },
    backgroundOpacity: theme => theme('opacity'),
    backgroundPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
    },
    borderColor: theme => ({
      ...theme('colors'),
      DEFAULT: theme('colors.gray.200', 'currentColor'),
    }),
    borderOpacity: theme => theme('opacity'),
    borderRadius: {
      none: '0px',
      sm: '2px',
      DEFAULT: '5px',
      md: '6px',
      lg: '8px',
      xl: '10px',
      '2xl': '16px',
      chip: '20px',
      '2.5xl': '22px',
      '3xl': '24px',
      '4xl': '36px',
      full: '9999px',
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0px',
      1.5: '1.5px',
      2: '2px',
      4: '4px',
      8: '8px',
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      dropdown: '0px 4px 16px rgba(0, 0, 0, 0.12)',
      alert: '0px 16px 48px rgba(0, 0, 0, 0.22)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      input: 'inset 0px 3000px 0px rgba(255, 255, 255, 0.08)',
      none: 'none',
      'gradient-white-hover': 'inset 0px 3000px 0px rgba(0, 0, 0, 0.08)',
      'gradient-white-pressed': 'inset 0px 3000px 0px rgba(0, 0, 0, 0.16)',
      'gradient-hover': 'inset 0px 3000px 0px rgba(255, 255, 255, 0.08)',
      'gradient-pressed': 'inset 0px 3000px 0px rgba(255, 255, 255, 0.16)',
      'gradient-hover-inset': '0px 3000px 0px 0px #00000014 inset',
      'gradient-pressed-inset': '0px 3000px 0px 0px #00000029 inset',
      focus: '0px 0px 0px 1.5px #292929',
      hover: '0px 0px 0px 1px #292929',
      transparent: '0px 0px 0px 1px transparent',
      inactive: '0px 0px 0px 1.5px #222222',
      'input-normal': '0 0 0 1px #505050',
      'input-search': 'inset 0 0 0 2px #E2E2E2',
      'input-error': '0 0 0 1px #FF5A14',
      'input-valid': '0 0 0 1px #00D932',
      'input-normal-focus': 'inset 0 0 0 2px #E2E2E2',
      'input-error-focus': '0 0 0 2px #FF5A14',
      'input-valid-focus': '0 0 0 2px #00D932',
    },
    container: {},
    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      wait: 'wait',
      text: 'text',
      move: 'move',
      help: 'help',
      'not-allowed': 'not-allowed',
    },
    divideColor: theme => theme('borderColor'),
    divideOpacity: theme => theme('borderOpacity'),
    divideWidth: theme => theme('borderWidth'),
    fill: { current: 'currentColor' },
    flex: {
      1: '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none',
    },
    flexGrow: {
      0: '0',
      DEFAULT: '1',
    },
    flexShrink: {
      0: '0',
      DEFAULT: '1',
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    fontSize: {
      xxs: ['11px', { lineHeight: '14px', letterSpacing: '-0.02rem' }],
      xs: ['12px', { lineHeight: '16px' }],
      xsm: ['13px', { lineHeight: '14px' }],
      sm: ['14px', { lineHeight: '20px' }],
      sb: ['15px', { lineHeight: '20px' }],
      base: ['16px', { lineHeight: '19px' }],
      md: ['17px', { lineHeight: '24px', letterSpacing: '0em' }],
      lg: ['18px', { lineHeight: '28px' }],
      xl: ['20px', { lineHeight: '28px' }],
      '1xl': ['24px', { lineHeight: '28px' }],
      '2xl': ['24px', { lineHeight: '32px' }],
      '2.5xl': ['28px', { lineHeight: '32px' }],
      '3xl': ['30px', { lineHeight: '36px' }],
      '3.5xl': ['34px', { lineHeight: '40px' }],
      '4xl': ['36px', { lineHeight: '40px' }],
      '4.5xl': ['44px', { lineHeight: '56px' }],
      '5xl': ['48px', { lineHeight: '1' }],
      '6xl': ['60px', { lineHeight: '1' }],
      '7xl': ['72px', { lineHeight: '1' }],
      '8xl': ['96px', { lineHeight: '1' }],
      '9xl': ['128px', { lineHeight: '1' }],
      header: ['32px', { lineHeight: '32px' }],
      'feature-title': ['16px', { lineHeight: '20px', letterSpacing: '-0.02rem' }],
      'account-field': ['15px', { lineHeight: '20px', letterSpacing: '-0.24px' }],
      hero: ['44px', { lineHeight: '48px', letterSpacing: '0.02rem' }],
      title: ['32px', { lineHeight: '32px', letterSpacing: '-0.02rem' }],
      subtitle: ['16px', { lineHeight: '26px' }],
      'cancel-sub-button': ['17px', { lineHeight: '22px', letterSpacing: '-0.41px' }],
    },
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    gap: theme => theme('spacing'),
    gradientColorStops: theme => theme('colors'),
    gridAutoColumns: {
      auto: 'auto',
      min: 'min-content',
      max: 'max-content',
      fr: 'minmax(0, 1fr)',
    },
    gridAutoRows: {
      auto: 'auto',
      min: 'min-content',
      max: 'max-content',
      fr: 'minmax(0, 1fr)',
    },
    gridColumn: {
      auto: 'auto',
      'span-1': 'span 1 / span 1',
      'span-2': 'span 2 / span 2',
      'span-3': 'span 3 / span 3',
      'span-4': 'span 4 / span 4',
      'span-5': 'span 5 / span 5',
      'span-6': 'span 6 / span 6',
      'span-7': 'span 7 / span 7',
      'span-8': 'span 8 / span 8',
      'span-9': 'span 9 / span 9',
      'span-10': 'span 10 / span 10',
      'span-11': 'span 11 / span 11',
      'span-12': 'span 12 / span 12',
      'span-full': '1 / -1',
    },
    gridColumnEnd: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13',
    },
    gridColumnStart: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13',
    },
    gridRow: {
      auto: 'auto',
      'span-1': 'span 1 / span 1',
      'span-2': 'span 2 / span 2',
      'span-3': 'span 3 / span 3',
      'span-4': 'span 4 / span 4',
      'span-5': 'span 5 / span 5',
      'span-6': 'span 6 / span 6',
      'span-full': '1 / -1',
    },
    gridRowStart: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
    },
    gridRowEnd: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
    },
    gridTemplateColumns: {
      none: 'none',
      card: '60% 25% 15%',
      nav: '25% 50% 25%',
      1: 'repeat(1, minmax(0, 1fr))',
      2: 'repeat(2, minmax(0, 1fr))',
      3: 'repeat(3, minmax(0, 1fr))',
      4: 'repeat(4, minmax(0, 1fr))',
      5: 'repeat(5, minmax(0, 1fr))',
      6: 'repeat(6, minmax(0, 1fr))',
      7: 'repeat(7, minmax(0, 1fr))',
      8: 'repeat(8, minmax(0, 1fr))',
      9: 'repeat(9, minmax(0, 1fr))',
      10: 'repeat(10, minmax(0, 1fr))',
      11: 'repeat(11, minmax(0, 1fr))',
      12: 'repeat(12, minmax(0, 1fr))',
    },
    gridTemplateRows: {
      none: 'none',
      1: 'repeat(1, minmax(0, 1fr))',
      2: 'repeat(2, minmax(0, 1fr))',
      3: 'repeat(3, minmax(0, 1fr))',
      4: 'repeat(4, minmax(0, 1fr))',
      5: 'repeat(5, minmax(0, 1fr))',
      6: 'repeat(6, minmax(0, 1fr))',
    },
    height: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      full: '100%',
      screen: '100vh',
      '1/2-screen': '50vh',
      '1/3-screen': '33vh',
      '4/5-screen': '80vh',
      '7/10-screen': '70vh',
      sidebar: 'calc(100vh - 80px)'
    }),
    inset: (theme, { negative }) => ({
      auto: 'auto',
      ...theme('spacing'),
      ...negative(theme('spacing')),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      full: '100%',
      '-1/2': '-50%',
      '-1/3': '-33.333333%',
      '-2/3': '-66.666667%',
      '-1/4': '-25%',
      '-2/4': '-50%',
      '-3/4': '-75%',
      '-full': '-100%',
    }),
    keyframes: {
      spin: {
        to: {
          transform: 'rotate(360deg)',
        },
      },
      ping: {
        '75%, 100%': {
          transform: 'scale(2)',
          opacity: '0',
        },
      },
      pulse: {
        '50%': {
          opacity: '.5',
        },
      },
      bounce: {
        '0%, 100%': {
          transform: 'translateY(-25%)',
          animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
        },
        '50%': {
          transform: 'none',
          animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
        },
      },
    },
    letterSpacing: {
      '0.06px': '0.06px',
      '0.1px': '0.1px',
      0.078: '0.078px',
      0.352: '0.352px',
      0.408: '0.408px',
      button: '-0.03rem',
      normal: '0rem',
      subtitle: '-0.06rem',
      tag: '-0.015rem',
      tight: '-0.02rem',
      tighter: '-0.05rem',
      title: '-0.01rem',
      wide: '0.025rem',
      wider: '0.05rem',
      widest: '0.1rem',
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
      3: '12px',
      3.5: '14px',
      3.75: '15px',
      4: '16px',
      4.5: '18px',
      5: '20px',
      5.5: '22px',
      6: '24px',
      6.75: '27px',
      7: '28px',
      8: '32px',
      9: '36px',
      10: '40px',
      11: '52px',
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
    },
    margin: (theme, { negative }) => ({
      auto: 'auto',
      ...theme('spacing'),
      ...negative(theme('spacing')),
    }),
    maxHeight: theme => ({
      ...theme('spacing'),
      full: '100%',
      screen: '100vh',
    }),
    maxWidth: (theme, { breakpoints }) => ({
      none: 'none',
      40: '40px',
      0: '0rem',
      xs: '320px',
      sm: '384px',
      xsm: '382px',
      md: '448px',
      lg: '512px',
      xl: '576px',
      '2xl': '672px',
      '3xl': '768px',
      '4xl': '896px',
      '5xl': '1024px',
      '6xl': '1152px',
      '7xl': '1280px',
      full: '100%',
      '1/2': '50%',
      '4/5': '80%',
      min: 'min-content',
      max: 'max-content',
      prose: '65ch',
      356: '356px',
      95.5: '382px',
      103: '412.8px',
      106.25: '425px',
      107: '428px',
      110.4: '442px',
      528: '528px',
      138: '552px',
      608: '608px',
      640: '640px',
      1040: '1040px',
      1248: '1248px',
      1400: '1400px',
      ...breakpoints(theme('screens')),
    }),
    minHeight: theme => ({
      0: '0px',
      10: '40px',
      14: '56px',
      full: '100%',
      screen: 'calc(100vh - 80px)',
      ...theme('spacing'),
    }),
    minWidth: theme => ({
      0: '0px',
      full: '100%',
      min: 'min-content',
      max: 'max-content',
      ...theme('spacing'),
    }),
    objectPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    opacity: {
      0: '0',
      5: '0.05',
      10: '0.1',
      20: '0.2',
      25: '0.25',
      30: '0.3',
      40: '0.4',
      50: '0.5',
      60: '0.6',
      70: '0.7',
      75: '0.75',
      80: '0.8',
      90: '0.9',
      95: '0.95',
      100: '1',
    },
    order: {
      first: '-9999',
      last: '9999',
      none: '0',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
    },
    outline: {
      none: ['2px solid transparent', '2px'],
      white: ['2px dotted white', '2px'],
      black: ['2px dotted black', '2px'],
      blue: ['2px solid #0084FF', '2px'],
    },
    padding: theme => theme('spacing'),
    placeholderColor: theme => theme('colors'),
    placeholderOpacity: theme => theme('opacity'),
    ringColor: theme => ({
      DEFAULT: theme('colors.blue.500', '#3b82f6'),
      ...theme('colors'),
    }),
    ringOffsetColor: theme => theme('colors'),
    ringOffsetWidth: {
      0: '0px',
      1: '1px',
      2: '2px',
      4: '4px',
      8: '8px',
    },
    ringOpacity: theme => ({
      DEFAULT: '0.5',
      ...theme('opacity'),
    }),
    ringWidth: {
      DEFAULT: '3px',
      0: '0px',
      1: '1px',
      2: '2px',
      4: '4px',
      8: '8px',
    },
    rotate: {
      '-180': '-180deg',
      '-90': '-90deg',
      '-45': '-45deg',
      '-12': '-12deg',
      '-6': '-6deg',
      '-3': '-3deg',
      '-2': '-2deg',
      '-1': '-1deg',
      0: '0deg',
      1: '1deg',
      2: '2deg',
      3: '3deg',
      6: '6deg',
      12: '12deg',
      45: '45deg',
      90: '90deg',
      180: '180deg',
    },
    scale: {
      0: '0',
      50: '.5',
      75: '.75',
      90: '.9',
      95: '.95',
      100: '1',
      105: '1.05',
      110: '1.1',
      125: '1.25',
      150: '1.5',
    },
    skew: {
      '-12': '-12deg',
      '-6': '-6deg',
      '-3': '-3deg',
      '-2': '-2deg',
      '-1': '-1deg',
      0: '0deg',
      1: '1deg',
      2: '2deg',
      3: '3deg',
      6: '6deg',
      12: '12deg',
    },
    space: (theme, { negative }) => ({
      ...theme('spacing'),
      ...negative(theme('spacing')),
    }),
    stroke: {
      current: 'currentColor',
    },
    strokeWidth: {
      0: '0',
      1: '1',
      2: '2',
    },
    textColor: theme => theme('colors'),
    textOpacity: theme => theme('opacity'),
    transformOrigin: {
      center: 'center',
      top: 'top',
      'top-right': 'top right',
      right: 'right',
      'bottom-right': 'bottom right',
      bottom: 'bottom',
      'bottom-left': 'bottom left',
      left: 'left',
      'top-left': 'top left',
    },
    transitionDelay: {
      75: '75ms',
      100: '100ms',
      150: '150ms',
      200: '200ms',
      300: '300ms',
      500: '500ms',
      700: '700ms',
      1000: '1000ms',
    },
    transitionDuration: {
      DEFAULT: '200ms',
      75: '75ms',
      100: '100ms',
      150: '150ms',
      200: '200ms',
      300: '300ms',
      500: '500ms',
      700: '700ms',
      1000: '1000ms',
    },
    transitionProperty: {
      none: 'none',
      all: 'all',
      DEFAULT:
        'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
      colors: 'background-color, border-color, color, fill, stroke',
      opacity: 'opacity',
      shadow: 'box-shadow',
      transform: 'transform',
      width: 'width',
      'max-height': 'max-height',
      'opacity-max-height': 'opacity, max-height',
    },
    transitionTimingFunction: {
      DEFAULT: 'cubic-bezier(0.2, 0.8, 0.4, 1)',
      linear: 'linear',
      ease: 'ease',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    translate: (theme, { negative }) => ({
      ...theme('spacing'),
      ...negative(theme('spacing')),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      full: '100%',
      '-1/2': '-50%',
      '-1/3': '-33.333333%',
      '-2/3': '-66.666667%',
      '-1/4': '-25%',
      '-2/4': '-50%',
      '-3/4': '-75%',
      '-full': '-100%',
    }),
    width: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      '1/12': '8.333333%',
      '2/12': '16.666667%',
      '3/12': '25%',
      '4/12': '33.333333%',
      '5/12': '41.666667%',
      '6/12': '50%',
      '7/12': '58.333333%',
      '8/12': '66.666667%',
      '9/12': '75%',
      '10/12': '83.333333%',
      '11/12': '91.666667%',
      full: '100%',
      screen: '100vw',
      min: 'min-content',
      max: 'max-content',
      main: 'calc(100vw - 100px)',
    }),
    zIndex: {
      auto: 'auto',
      0: '0',
      10: '10',
      20: '20',
      30: '30',
      40: '40',
      50: '50',
      999: '999',
    },
  },
  variantOrder: [
    'first',
    'last',
    'odd',
    'even',
    'visited',
    'checked',
    'group-hover',
    'group-focus',
    'focus-within',
    'hover',
    'focus',
    'focus-visible',
    'active',
    'disabled',
  ],
  plugins: [require('@tailwindcss/line-clamp')],
};
