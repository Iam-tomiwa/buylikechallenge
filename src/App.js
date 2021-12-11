import {BrowserRouter, Routes, Route} from "react-router-dom";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import PlusJakarta from "./assets/font/PlusJakartaDisplay-Bold.otf";
import {CssBaseline} from "@mui/material";
import Hero from "./pages/Hero";
import AnimeSearch from "./pages/AnimeSearch";
import store from "./store/store";
import {Provider} from "react-redux";
import Carousel from "./components/Carousel";
const theme = createTheme({
  palette: {
    secondary: {
      main: "#D24158",
    },
    primary: {
      main: "#0F3460",
    },
  },
  typography: {
    fontFamily: `IBM Plex Sans, sans-serif`,
    h1: {
      fontFamily: `PlusJakarta, Arial`,
      fontSize: "clamp(2.25rem, 1rem + 3.0714vw, 4rem)",
    },
    h2: {
      fontFamily: `PlusJakarta, Arial`,
    },
    h3: {
      fontFamily: `PlusJakarta, Arial`,
    },
    h4: {
      fontFamily: `PlusJakarta, Arial`,
    },
    h5: {
      fontFamily: `PlusJakarta, Arial`,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          boxShadow: "0px 30px 60px rgba(0, 0, 0, 0.06)",
          "@media (max-width: 600px)": {
            width: "100%",
          },
          "&:hover": {
            boxShadow: "0px 30px 60px rgba(0, 0, 0, 0.06)",
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
      @font-face {
        font-family: "PlusJakarta";
        font-style: normal;
        font-display: swap;
        font-weight: 600;
        src: url(${PlusJakarta});
      }
      `,
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <div style={{overflowX: "hidden"}} className="app layout">
            <main>
              <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/anime" element={<AnimeSearch />} />
                <Route path="/carousel" element={<Carousel />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
