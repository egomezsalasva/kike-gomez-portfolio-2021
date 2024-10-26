import "../styles/globals.css";
import { ThemeContextProvider } from "../contexts/themeContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeContextProvider>
        <Component {...pageProps} />
      </ThemeContextProvider>
    </>
  );
}

export default MyApp;
