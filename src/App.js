import "./App.css";
import "./styles/styles.css";
import "./styles/margins.css";

// components or views
import Header from "./components/Header";
import Home from "./views/Home";

// mui
import { createTheme, ThemeProvider } from "@material-ui/core";
import shadows from "./components/mui/shadows";

function App() {
  // theming
  let themeOptions = {
    error: "#be1e2d",
    warn: "#ee5700",
    hover: "rgba(0,0,0,0.1)",
  };

  // forcing to use dark theme
  if (0) {
    themeOptions.type = "light";
    themeOptions.dark = "#06373a";
    themeOptions.paper = "#ecf0ec";
    themeOptions.paperDark = "#000000";
    themeOptions.primary = "#159947";
    themeOptions.secondary = "#1f5f5b";
    themeOptions.tertiary = "#06373a";
    themeOptions.textPrimary = "#061a23";
    themeOptions.textSecondary = "#697a98";
    themeOptions.textTertiary = "#bfb8d6";
    themeOptions.divider = "#e4e4e4";
    themeOptions.link = "#1f5f5b";
  } else {
    themeOptions.type = "dark";
    themeOptions.dark = "#151515";
    themeOptions.paper = "#202020";
    themeOptions.paperDark = "#000000";
    themeOptions.primary = "#ff2200";
    themeOptions.secondary = "#1f5f5b";
    themeOptions.tertiary = "#06373a";
    themeOptions.textPrimary = "#faf7fc";
    themeOptions.textSecondary = "#ccc";
    themeOptions.textTertiary = "#bfb8d6";
    themeOptions.divider = "#06373a";
    themeOptions.link = "#1f5f5b";
  }

  const appTheme = createTheme({
    palette: {
      type: themeOptions.type,
      background: {
        dark: themeOptions.dark,
        paper: themeOptions.paper,
        paperDark: themeOptions.paperDark,
      },
      action: {
        hover: themeOptions.hover,
      },
      primary: {
        main: themeOptions.primary,
      },
      secondary: {
        main: themeOptions.secondary,
      },
      text: {
        primary: themeOptions.textPrimary,
        secondary: themeOptions.textSecondary,
        tertiary: themeOptions.textTertiary,
        link: themeOptions.link,
        white: "#fff",
      },
      divider: themeOptions.divider,
      error: {
        main: themeOptions.error,
      },
      warning: {
        main: themeOptions.warn,
      },
    },
    shadows,
  });

  return (
    <ThemeProvider theme={appTheme}>
      <div
        style={{
          backgroundColor: themeOptions.dark,
          minHeight: "100vh",
        }}
      >
        <header>{/* <Header /> */}</header>
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;

// header - -you don't really need header-
// main intro slide - 1
// experience - 6 - {each experience linked to bottom of page with work ss - 11}
// Projects - 8
// education - 7
// Skillsets - 10
// ---- work experiences sshots ----
// Hobbies & interests - 10
// Contact info
// Thank you
