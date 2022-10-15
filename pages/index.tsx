import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HomeComponent from '../components/Home'
import NavbarComponent from '../components/Navbar'
import AboutComponent from '../components/About'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>URLodge | All in one links!</title>
      </Head>
      <NavbarComponent />
      <HomeComponent />
      <AboutComponent />
    </div>
  )
}

export default Home
