import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Hero from '../components/Hero';
import Offers from '../components/Offers';
import AboutUs from '../components/AboutUs';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';

export default function GalleryPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero layout="small" page="gallery" title="Galerie"/>
      <div className='w-full h-[50px]'></div>
      <Gallery title="GALERIA NOASTRA" layout="all"/>
    </div>
  )
}
