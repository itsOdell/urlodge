import styles from "../styles/About.module.css";
import FeatureComponent from "../components/Feature";
import { features } from "../data";
import type { FeatureProps } from "../types";

const AboutComponent: React.FC = (): React.ReactElement => {
    return (
        <section id="About" className={styles.about}>
            <img src="/assets/top_left_blob.png" className={styles.blob}/>
            <div className={`container ${styles.about_container}`}>

                <header className={styles.about_header}>
                    <h1>Share all of your links, <br/>accounts and sites<br/>with <span>one link </span>easily</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Voluptates nisi omnis delectus deserunt aliquid vitae doloribus</p>
                    <button>Get Started</button>
                </header>

                <div className={styles.about_features}>
                    {features.map((feature: FeatureProps) => {
                        return (
                            <FeatureComponent {...feature}/>
                        )
                    })}
                </div>
            </div> 
            <img src="/assets/top_right_blob.png" className={styles.blob}/>
        </section>
    )
}

export default AboutComponent;