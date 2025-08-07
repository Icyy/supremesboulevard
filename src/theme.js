import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    background: {
      default: "#e6ded2",
    },
    text: {
      primary: "#212c28",
    },
    primary: {
      main: "#5d7345",
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
