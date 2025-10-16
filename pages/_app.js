// pages/_app.js

// A LINHA MAIS IMPORTANTE:
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
