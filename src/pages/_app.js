import '@/styles/globals.css'
import "semantic-ui-css/semantic.min.css";

import Head from "next/head";
import Top from "/src/components/Top";
import Footer from "/src/components/Footer";
import SideMenu from "/src/components/SideMenu";
import "@/styles/layout.css";


function MyApp({ Component, pageProps }) {

  return pageProps && (pageProps.pathname === "/" || pageProps.pathname === "/index") ? (
    <div style={{ width: "100%", margin: "0 auto" }}>
      <Component {...pageProps} />
    </div>
  ) : (
    <>

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


MyApp.getInitialProps = async (context) => {
  const { ctx, Component } = context;
  let pageProps = {};

  if (Component.getInitialProps) {
    // Component (pages 폴더에 있는 컴포넌트)에 getInitialProps가 있다면
    pageProps = (await Component.getInitialProps(ctx)) || {};

    return { pageProps };
  }
};

export default MyApp;
