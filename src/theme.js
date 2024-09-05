import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a1a1a', // Dark grey for text
    },
    secondary: {
      main: '#ffffff', // White for background or text
    },
    highlight: {
      main: '#FFA500', // Elegant orange for highlights
    },
    background: {
      default: '#f5f5f5', // Soft off-white background
      paper: '#ffffff', // Clean white paper color
    },
    text: {
      primary: '#1a1a1a', // Dark grey for primary text
      secondary: '#6b6b6b', // Lighter grey for secondary text
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
      color: '#1a1a1a', // Dark grey for headings
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
      color: '#1a1a1a',
    },
    h3: {
      fontSize: '1.25rem',
      fontWeight: 500,
      color: '#1a1a1a',
    },
    body1: {
      fontSize: '1rem',
      color: '#6b6b6b', // Softer grey for body text
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '6px',
          padding: '10px 20px',
          backgroundColor: '#FFA500', // Subtle orange for buttons
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
          backgroundColor: '#1a1a1a', // Dark grey for navbar
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          boxShadow: '0px 3px 15px rgba(0, 0, 0, 0.05)', // Minimal shadow for a clean look
        },
      },
    },
  },
});

export default theme;
