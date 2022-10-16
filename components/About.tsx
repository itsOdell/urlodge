import styles from "../styles/About.module.css";
import FeatureComponent from "../components/Feature"
import {User} from "../icons/";

const AboutComponent: React.FC = (): React.ReactElement => {
    return (
        <article id="About" className={styles.about}>
            <div className={`container ${styles.about_container}`}>

                <header className={styles.about_header}>
                    <h1>Share all of your links, <br/>accounts and sites<br/>with <span>one link </span>easily</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Voluptates nisi omnis delectus deserunt aliquid vitae doloribus</p>
                    <button>Get Started</button>
                </header>

                <div className={styles.about_features}>
                    <FeatureComponent title={"Feature"} description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit nemo amet eum cum aliquid ratione."} Icon={() => <User size="3x" color={"#52BF90"}/>}/>
                    <FeatureComponent title={"Feature"} description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit nemo amet eum cum aliquid ratione."} Icon={() => <User size="3x" color={"#52BF90"}/>}/>
                    <FeatureComponent title={"Feature"} description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit nemo amet eum cum aliquid ratione."} Icon={() => <User size="3x" color={"#52BF90"}/>}/>
                    <FeatureComponent title={"Feature"} description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit nemo amet eum cum aliquid ratione."} Icon={() => <User size="3x" color={"#52BF90"}/>}/>
                </div>
            </div> 
        </article>
    )
}

export default AboutComponent;