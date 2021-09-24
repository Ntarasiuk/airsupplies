import { CssBaseline, GeistProvider } from "@geist-ui/react";
import "inter-ui/inter.css";

const Application = ({ Component, pageProps }) => (
  <GeistProvider>
    <CssBaseline />
    <Component {...pageProps} />{" "}
  </GeistProvider>
);

export default Application;
