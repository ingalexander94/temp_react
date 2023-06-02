import { AppRouter } from "./routes";
import { Provider } from "react-redux";
import { store } from "./store";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#008cde",
      },
      secondary: {
        main: "#727272",
      },
      warning: {
        main: "#ff7761",
      },
      success: {
        main: "#92d34a",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
