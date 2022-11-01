import styles from "../styles/Footer.module.css";
import {Github} from"../icons"
import Link from "next/link";

const FooterComponent: React.FC = (): React.ReactElement => {
    return (
        <section className={styles.footer}>
            <div className={`container ${styles.footer_container}`}>
             <div>
                <h2>@2022 <span>URLodge</span></h2>
             </div>
             <div>
                {/* <Link href={"#Home"}>
                    <img src="/assets/logo.png" alt="" />
                </Link> */}
             </div>
             <div>
                <a href={"https://github.com"} target="_blank">
                    <Github size={"2x"} color={"var(--dark-green)"}/>
                </a>
            </div>   
            </div>
        </section>
    )
}

export default FooterComponent