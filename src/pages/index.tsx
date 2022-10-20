import type { NextPage } from 'next'
import Head from 'next/head'
import {useWidth} from "../hooks";
import styles from '../styles/Home.module.css'
import HomeComponent from '../components/Home'
import NavbarComponent from '../components/Navbar'
import AboutComponent from '../components/About'
import ReviewsComponent from '../components/Reviews'
import PlansComponent from '../components/Plans'
import FooterComponent from '../components/Footer'

const Home: NextPage = () => {
  const width = useWidth();
  const onMobile: boolean = width > 1000 ? false : true;
  
  return (
    <div className={styles.container}>
      <Head>
        <title>URLodge | All in one links!</title>
      </Head>
      <NavbarComponent />
      <HomeComponent />
      <AboutComponent />
      <ReviewsComponent onMobile={onMobile}/>
      <PlansComponent onMobile={onMobile} />
      <FooterComponent />
    </div>
  )
}

export default Home
