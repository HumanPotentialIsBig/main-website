import '../styles/globals.css'
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Human Potential Is Big</title>
        <meta name="description" content="A living platform for visions, ideas, and projects exploring human potential." />

        {/** web-browser tab icon */}
        <link rel="icon" href="/logo.jpeg" />

        {/** Open Graph: social preview when sharing/forwaring on WhatsApp/Telegram for example */}
        <meta property="og:title" content="Human Potential Is Big" />
        <meta property="og:description" content="Exploring human potential through visions, ideas, and projects." />
        <meta property="og:image" content="/images/zukunftsvorstellung.jpeg" />
        <meta property="og:url" content="https://humanpotential.netlify.app/" />
        <meta property="og:type" content="website" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}