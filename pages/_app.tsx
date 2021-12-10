import { AppComponent } from "next/dist/shared/lib/router/router";
import "../styles/globals.css";

const App: AppComponent = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
