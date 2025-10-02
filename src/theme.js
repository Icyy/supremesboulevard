import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    background: {
      default: "#212c28",
    },
    text: {
      primary: "#ffffffff",
      secondary:'#bbb7b7ff',
      default:'#0e0d0dff'
    },
    primary: {
      main: "#e05d3f",
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
