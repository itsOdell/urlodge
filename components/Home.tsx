// import { useSession, signIn, signOut } from "next-auth/react"
import styles from "../styles/Home.module.css";
import Img from "next/image";

const HomeComponent: React.FC = (): React.ReactElement => {
    return (
        <main id={"Home"} className={`${styles.home}`}>
            <div className={`container ${styles.home_container}`}>

                <header className={styles.home_header}>
                    <h1>ALL IN ONE <br />SELF PROMOTION</h1>
                     <h2>Share all your links, URL and URIs here with this
                        very cool and amazing, graceful so attention hungry
                        website</h2>
                    <div className={styles.home_buttons_container}>
                        <button>Get started</button>
                        <button>Learn more</button>
                    </div>
                    <div className={styles.home_achievements}>
                        <p>Over <span>1.5M</span> links</p>
                        <p>Over <span>300K</span> users</p>
                        <p>Over <span>500</span> things</p>
                    </div>
                </header>

                <div className={styles.home_image}>
                    <Img src={"/assets/hero_house.png"} alt={"hero house"} width="630" height="485"/>
                </div>
            </div>
        </main>
    );
}

export default HomeComponent;