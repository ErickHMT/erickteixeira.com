import Head from 'next/head'
import Contact from '../components/contact'
import Header from '../components/header'
import Footer from '../components/footer'
import Galery from '../components/galery'
import About from '../components/about'

export default function Home() {
  return (
    <>
      <Head>
        <title>Erick Teixeira</title>
        <meta name="description" content="Erick Teixeira: Ilustrator / Front end developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Galery />
      <About />
      <Contact />
      <Footer />
    </>
  )
}
