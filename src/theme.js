import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    background: {
      default: "#2C5F34",
    },
    text: {
      primary: "#ffffffff",
      secondary:'#bbb7b7ff',
      default:'#0e0d0dff'
    },
    primary: {
      main: "#CC5500",
    },
    secondary: {
      main: "#8ba49e",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

export default theme;
