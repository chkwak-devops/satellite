import '@/styles/globals.css'
import "semantic-ui-css/semantic.min.css";

import Top from '/src/components/Top'
import Footer from '/src/components/Footer'
import SideMenu from '/src/components/SideMenu'
import '@/styles/layout.css'
// import '@/styles/commonStyles.css'
// import '/src/styles/layout.css'


export default function App({ Component, pageProps }) {

  return (
    <div className="parent">
      <div className="topLayer" >
        <Top />
      </div>
      <div className="main">
        <div className="sideMenuLayer" >
          <SideMenu />
        </div>
        <div className="bodyLayer content" >
          <Component {...pageProps} />
        </div>
      </div>
      <div className="footerLayer">
        <Footer />
      </div>
    </div>
  )

}
