import Head from 'next/head'
import '../styles/globals.css'
import "@fontsource/roboto"
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

import Layout from './../components/Layout';

function MyApp({ Component, pageProps }) {
  return  <>
            <Head>

            </Head>
            
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </>
}

export default MyApp
