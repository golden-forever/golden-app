import { BrowserRouter } from "react-router-dom";
import Router from "./routes";

// Redux
import { store } from "./store";
import { Provider } from "react-redux";

// theme
import ThemeProvider from "./theme";

// components
import ScrollToTop from "./components/common/ScrollToTop";

// Simplebar Import
import "simplebar-react/dist/simplebar.min.css";

// Theme

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Provider store={store}>
          <ScrollToTop />
          <Router />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
