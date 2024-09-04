import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000', // Black for text
    },
    secondary: {
      main: '#ffffff', // White for text or background
    },
    highlight: {
      main: '#FFA500', // Orange for highlights
    },
    background: {
      default: '#ffffff', // White background
      paper: '#ffffff', // Pure white paper color
    },
    text: {
      primary: '#000000', // Black text
      secondary: '#ffffff', // White text for images or dark backgrounds
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      color: '#000000',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      color: '#000000',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 500,
      color: '#000000',
    },
    body1: {
      fontSize: '1rem',
      color: '#000000',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '8px',
          padding: '12px 24px',
          backgroundColor: '#FFA500', // Orange for buttons
          color: '#ffffff',
          '&:hover': {
            backgroundColor: '#e69500',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#000000', // Black for navbar
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
});

export default theme;
