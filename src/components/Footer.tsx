import styles from "../styles/Footer.module.css";
import {Github} from"./icons"

const FooterComponent: React.FC = (): React.ReactElement => {
    return (
        <section className={styles.footer}>
            <div className={`container ${styles.footer_container}`}>
             <div>
                <h2>@2022 <span>URLodge</span></h2>
             </div>
             <div>
             </div>
             <div>
                <a href={"https://github.com"} target="_blank" rel="norefferer">
                    <Github size={"2x"} color={"var(--dark-green)"}/>
                </a>
            </div>   
            </div>
        </section>
    )
}

export default FooterComponent