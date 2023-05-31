import { AppRouter } from "./routes";
import { Provider } from "react-redux";
import { store } from "./store";
import "./App.css";

function App() {
  return (
    <>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </>
  );
}

export default App;
