import { createTheme } from "@mui/material/styles";
import "./themes";
const Poppins = "'Poppins', sans-serif";
const NotoSans = "'Noto Sans', sans-serif";
const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#fc4520",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: "#ffdad3",
      main: "#ffffff",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#ffcc00",
    },
  },
  typography: {
    fontFamily: {
      Poppins,
      NotoSans
    }
    },
 
  overrides: {
    MuiButton: {
      raisedPrimary: {
        color: "#54BAB9",
      },
    },
  },
});
export default theme;
