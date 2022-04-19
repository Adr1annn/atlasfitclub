import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Hero from '../components/Hero';
import Offers from '../components/Offers';
import AboutUs from '../components/AboutUs';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Atlas FitClub</title>
        <meta name="description" content="Atlas FitClub este o sală situată în Rădăuți, dotată cu aparate noi, de top cu ajutorul cărora poti să îți atingi potențialul maxim. În sala de aerobic se țin clase variate, cu antrenori bine pregătiți care te ajută să ai un program de fitness profesionist." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero title="Atlas FitClub" layout="large" page="home"/>
      <Offers/>
      <AboutUs/>
      <Gallery title="GALERIE" layout="few"/>
      <Testimonials/>
    </div>
  )
}
