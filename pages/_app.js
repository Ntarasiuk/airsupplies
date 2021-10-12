import { ApolloProvider } from "@apollo/client";
import { CssBaseline, GeistProvider } from "@geist-ui/react";
import "inter-ui/inter.css";
import Script from "next/script";
import { client } from "utils/apollo";

const Application = ({ Component, pageProps }) => (
  <>
    {/* Global Site Tag (gtag.js) - Google Analytics */}
    <Script
      strategy="lazyOnload"
      src={`https://www.googletagmanager.com/gtag/js?id=G-9QPVDZHCDT`}
    />

    <Script strategy="lazyOnload" id="gtag-config">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-9QPVDZHCDT');
  `}
    </Script>
    <ApolloProvider client={client}>
      <GeistProvider>
        <CssBaseline />
        <Component {...pageProps} />{" "}
      </GeistProvider>
    </ApolloProvider>
  </>
);

export default Application;
