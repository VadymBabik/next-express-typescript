import Head from "next/head";
import type { AppProps } from "next/app";
import "../public/styles/main-style.css";
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Lori</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};
export default MyApp;
