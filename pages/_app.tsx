import type { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import "@fontsource/rubik";
import { Background } from "../Components/background/background";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>IP Tracker</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <MantineProvider
        theme={{
          fontFamily: "Rubik, sans-serif",
          shadows: {
            md: "1px 1px 3px rgba(0, 0, 0, .25)",
            xl: "5px 5px 3px rgba(0, 0, 0, .25)",
          },
          headings: {
            fontFamily: "Rubik, sans-serif",
          },
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Background>
          <Component {...pageProps} />
        </Background>
      </MantineProvider>
    </>
  );
}

export default MyApp;
