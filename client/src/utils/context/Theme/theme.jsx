import { CssBaseline } from "@mui/material";
import { ptBR } from "@mui/material/locale";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider
} from "@mui/material/styles";
// import { light } from "@mui/material/styles/createPalette";

export function ThemeProvider({ children }) {

  const theme = createTheme({
    palette: {
      primary: {
        main: "#1F3748",
        contrastText: "#FFFFFF",
        light: "#FFFFFF"
      },
      secondary: {
        main: "#C8102E"
      },
      background: {
        default: "#E5E5E5",
        paper: "#FFFFFF"
      },
      // contrastThreshold: 2
    },
    typography: {
      fontFamily: [
        "Poppins",
        "sans-serif"
      ].join(",")
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 900,
        md: 900,
        lg: 1200,
        xl: 1536
      }
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none"
          }
        }
      }
    },
    shape: {
      borderRadius: 12
    }
  }, ptBR
  );

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );

}