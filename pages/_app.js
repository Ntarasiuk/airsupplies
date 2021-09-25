import { ApolloProvider } from "@apollo/client";
import { CssBaseline, GeistProvider } from "@geist-ui/react";
import "inter-ui/inter.css";
import { client } from "utils/apollo";

const Application = ({ Component, pageProps }) => (
  <ApolloProvider client={client}>
    <GeistProvider>
      <CssBaseline />
      <Component {...pageProps} />{" "}
    </GeistProvider>
  </ApolloProvider>
);

export default Application;
