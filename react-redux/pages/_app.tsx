import { Provider } from "react-redux";
import store from "../store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  // Creating central store for redux which will be available throughout
  // the app

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
