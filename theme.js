import { keyframes } from '@emotion/core';

const fadeIn = keyframes({
  from: {
    opacity: '0',
  },
  to: {
    opacity: '1',
  },
});

const fadeInDelay = keyframes({
  '0%': { opacity: 0 },
  '50%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const fadeInDelay2 = keyframes({
  '0%': { opacity: 0 },
  '75%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const theme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  animations: {
    fadeIn: {
      0: fadeIn.toString(),
      1: fadeInDelay.toString(),
      2: fadeInDelay2.toString(),
    },
  },
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: '#fff',
    background: '#000',
    primary: '#000',
    secondary: '#939393',
    muted: '#f6f6f6',
    modes: {
      light: {
        text: '#000',
        background: '#fff',
        primary: '#0cf',
        secondary: '#09c',
        muted: '#111',
      },
      hunnsnal: {
        primary: '#D4B33D',
        secondary: '#ffef0a',
      },
      borussia: {
        primary: '#a3a3a0',
        secondary: '#5caccc',
      },
    },
  },
  sizes: {
    avatar: 48,
    contentContainer: ['90%', 1200],
  },
  radii: {
    default: 4,
    circle: 99999,
  },
  shadows: {
    card: '0 0 4px rgba(0, 0, 0, .125)',
  },
  // rebass variants
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
    display: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      fontSize: [5, 6, 7],
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
    },
  },
  variants: {
    avatar: {
      width: 'avatar',
      height: 'avatar',
      borderRadius: 'circle',
    },
    card: {
      transition: 'all 0.2s linear',
      p: 2,
      bg: 'rgba(0, 0, 0, 0.4)',
      boxShadow: 'card',
      borderStyle: 'solid',
      borderWidth: '2px',
      borderColor: 'white',
      ':hover,:focus,.active': {
        background: 'white',
        color: 'black',
      },
    },
    link: {
      color: 'primary',
    },
    header: {
      borderBottomStyle: 'solid',
      borderBottomColor: '#ffffff00',
      color: 'white',
      textDecoration: 'none',
      ':visited': {
        color: 'white',
      },
      ':hover,:focus,.active': {
        borderBottomColor: 'white',
      },
    },
    nav: {
      borderBottomStyle: 'solid',
      borderBottomColor: '#ffffff00',
      display: 'inline-block',
      color: 'inherit',
      textDecoration: 'none',
      ':visited': {
        color: 'text',
      },
      ':hover,:focus,.active': {
        borderBottomColor: 'text',
      },
    },
    block: {
      transition: 'all 0.2s linear',
      p: 2,
      textDecoration: 'none',
      color: 'white',
      bg: 'rgba(0, 0, 0, 0.4)',
      boxShadow: 'card',
      borderStyle: 'solid',
      borderWidth: '2px',
      borderColor: 'white',
      alignItems: 'center',
      textAlign: 'center',
      ':hover,:focus,.active': {
        background: 'white',
        color: 'black',
      },
      ':visited': {
        color: 'white',
      },
    },
    blockLink: {
      textDecoration: 'none',
      color: 'inherit',
    },
  },
  buttons: {
    primary: {
      transition: 'all 0.1s linear',
      fontSize: 2,
      fontWeight: 'bold',
      color: 'background',
      bg: 'primary',
      borderRadius: 'default',
    },
    outline: {
      borderStyle: 'solid',
      borderColor: '#ffffff00',
      borderWidth: '3px',
      variant: 'buttons.primary',
      color: 'primary',
      bg: 'transparent',
      ':hover,:focus,.active': {
        borderBottomColor: 'white',
      },
    },
    secondary: {
      variant: 'buttons.primary',
      color: 'background',
      bg: 'secondary',
    },
    active: {
      variant: 'buttons.primary',
      color: 'black',
      bg: 'white',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 5,
    },
    h2: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 4,
    },
    h3: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 3,
    },
    h4: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 2,
    },
    h5: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 1,
    },
    h6: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 0,
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    a: {
      textDecoration: 'none',
      color: 'white',
      ':hover,:focus,.active': {
        color: 'black',
        ':visited': {
          color: 'black',
        },
      },
      ':visited': {
        color: 'white',
      },
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
  },
};

export default theme;
