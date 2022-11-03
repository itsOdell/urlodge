import {useScroll} from "../shared/hooks";
import Link from "next/link"
import styles from  "../styles/Navbar.module.css"
import Image from "next/image";
import {User} from "./icons"
import {useSession} from "next-auth/react";

const NavbarComponent: React.FC = (): React.ReactElement => {
    const {data: session} = useSession();

    console.log(session?.user?.image)

    const defaultImage = <User size="2x"/>
    const userImage = <img src={String(session?.user?.image)} alt="" style={{width: "44px", height: "44px", borderRadius: "100px"}} referrerPolicy="no-referrer"/>
    const linkUrl = session !== null ? "/edit" : "/signin"

    const scroll = useScroll();
    const activated: string = scroll > 5 ? styles.activated : "";

    return (
        <nav>
            <div className={`container ${styles.nav_container} ${activated}`}>
                <div className={`${styles.nav_left}`}>
                    <Link href={"#Home"}>
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
                    <Link href={"#Plans"}>
                        <a>Plans</a>
                    </Link>
                </div>
                <div className={`${styles.nav_right}`}>
                <Link href={linkUrl} passHref={true}>
                    <a>
                        {session?.user?.image ? userImage : defaultImage}
                    </a>
                </Link>
                </div>
            </div>
        </nav>
    );
}

export default NavbarComponent;