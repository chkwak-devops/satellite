import '@/styles/globals.css'
import Top from '/src/components/Top'
import Footer from '/src/components/Footer'
import SideMenu from '/src/components/SideMenu'
import '@/styles/layout.css'


export default function App({ Component, pageProps }) {

  return (
    <div className="App">
      <SideMenu />
      <Top />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  )

}
