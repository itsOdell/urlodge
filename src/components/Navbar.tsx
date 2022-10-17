import {useScroll} from "../hooks";
import Link from "next/link"
import styles from  "../styles/Navbar.module.css"
import Image from "next/image";
import {User} from "../icons"

const NavbarComponent: React.FC = (): React.ReactElement => {
    const scroll = useScroll();
    const activated: string = scroll > 5 ? styles.activated : "";
    return (
        <nav>
            <div className={`container ${styles.nav_container} ${activated}`}>
                <div className={`${styles.nav_left}`}>
                    <Link href={"#Home"} passHref>
                        <a>
                            <Image src={"/assets/logo.png"} width="50" height="50"/>
                        </a>
                    </Link>
                    <Link href={"#About"}>
                        <a>About</a>
                    </Link>
                    <Link href={"#Reviews"}>
                        <a>Reviews</a>
                    </Link>
                    <Link href={"#Pricing"}>
                        <a>Pricing</a>
                    </Link>
                </div>
                <div className={`${styles.nav_right}`}>
                    <Link href={"/login"} passHref>
                        <a>
                            <User size={"2x"} />
                        </a>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default NavbarComponent;