import "@/styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import "ag-grid-community/styles//ag-grid.css";
import "ag-grid-community/styles//ag-theme-alpine.css";

import Head from "next/head";
import Top from "/src/components/Top";
import Footer from "/src/components/Footer";
import SideMenu from "/src/components/SideMenu";
import "@/styles/layout.css";
// import '@/styles/commonStyles.css'
// import '/src/styles/layout.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Emart Satellite App</title>
        <meta name="description" content="Emart Satellite App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="parent">
        <div className="topLayer">
          <Top />
        </div>
        <div className="main">
          <div className="sideMenuLayer">
            <SideMenu />
          </div>
          <div className="bodyLayer content">
            <Component {...pageProps} />
          </div>
        </div>
        <div className="footerLayer">
          <Footer />
        </div>
      </div>
    </>
  );
}
