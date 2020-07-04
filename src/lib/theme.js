import React from 'react';
import { ThemeProvider } from 'emotion-theming';

const theme = {
  breakpoints: ['600px', '900px', '1280px'],
  fontSize: [
    12, 14, 16, 20, 24, 32, 48, 64,
  ],
  colors: {
    primary: '#0fb245',
    secondary: '#0275d8',
    text: '#333333',
    drawer: '#f3f3f3',
    gray: '#666',
  },
  space: [
    0, 4, 8, 16, 18, 20, 32, 64, 128, 256,
  ],
  fonts: {
    body: '"游ゴシック体","YuGothic", "游ゴシック Medium", "游ゴシック","Yu Gothic","ヒラギノ角ゴ ProN W3","Hiragino Kaku Gothic ProN","ＭＳ Ｐゴシック","MS PGothic",sans-serif',
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  buttons: {
    primary: {
      color: 'white',
      px: '38px',
      py: '13px',
      bg: 'primary',
      fontWeight: 'bold',
      fontFamily: 'body',
      boxShadow: '0px 2px 4px 0px rgba(70, 141, 219, 0.3)',
      borderRadius: '50px',
      ':hover': {
        backgroundColor: '#1e933c',
        cursor: 'pointer',
      },
    },
    secondary: {
      color: 'white',
      bg: 'secondary',
      fontWeight: 'bold',
      fontFamily: 'body',
      boxShadow: '0px 2px 4px 0px rgba(70, 141, 219, 0.3)',
      borderRadius: '50px',
      ':hover': {
        backgroundColor: '#014c8c',
        cursor: 'pointer',
      },
    },
    tertiary: {
      color: '#61728f',
      px: 7,
      py: 4,
      fontFamily: 'body',
      border: '1px solid #61728f',
      borderRadius: '25px',
      boxShadow: '0px 2px 4px 0px rgba(70, 141, 219, 0.3)',
      fontSize: '18px',
      bg: '#fff',
      ':hover': {
        textDecoration: 'none',
        cursor: 'pointer',
        bg: 'rgba(0, 0, 0, 0.1)',
      },
    },
  },
  variants: {},
  text: {
    title: {
      fontSize: 7,
      color: '#fff',
      my: 'auto',
      textAlign: 'left',
      fontFamily: 'Noteworthy'
    },
    base: {
      fontSize: 1,
      color: 'text',
      fonts: 'body',
      fontWeights: 'body',
    },
    heading: {
      color: 'text',
      fontWeight: 'bold',
      fontFamily: 'Noteworthy',
      lineHeight: '60px',
      fontSize:6,
      textAlign: 'center',
    },
    header: {
      color: 'black',
      fontFamily: 'Noteworthy',
      fontSize: 4,
    }
  },
};

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    { children }
  </ThemeProvider>
);