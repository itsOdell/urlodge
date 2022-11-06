import styles from "../styles/Edit.module.css";
import axios from "axios";
import {useSession} from "next-auth/react"
import { useEffect, useState } from "react";
import {useRouter} from "next/router"
import { User } from "@prisma/client";
import LinkComponent from "./Link"
import type {Link} from "@prisma/client"

const EditComponent: React.FC = (): React.ReactElement => {
    const {data: session, status}: any = useSession()
    let router = useRouter()
    if (!session && status == "unauthenticated") {
        router.push("/signin")
    }
    let [userData, setUserData] = useState<Omit<User, "password">>()
    useEffect(() => {
        let url = `/api/user/?type=id&target=${session?.user?.id}`
        async function getData() {
            try {
                const res: User = (await axios.get(url)).data
                setUserData(res)   
            } catch (error) {
                console.error(error)    
            }
        }
        getData()
    }, [session])

    function addLink() {

    }

    if (!userData) {
        return <p style={{color: "black"}}>loading</p>
    }

    return (
        <section className={styles.edit}>
            <div className={styles.edit_container}>
                <div className={styles.edit_content}>
                    <div className={styles.edit_profile}>
                        <div className={styles.profile_img_container}>
                            {
                            userData?.image ?
                            <img src={userData.image} alt="user image" referrerPolicy="no-referrer"/> : 
                            <div>+</div>
                            }
                        </div>
                        <div className={styles.input_container}>
                            <label htmlFor="profile_name_input">Your Name</label>
                            <input type="text" className={styles.profile_name_input} name="profile_name_input" id="profile_name_input" placeholder="Your name"/>
                        </div>
                        <div className={styles.input_container}>
                            <label htmlFor="profile_biograhpy_input">Biograhpy</label>
                            <input type="text" className={styles.profile_biograhpy_input} name="profile_biograhpy_input" id="profile_biograhpy_input" placeholder="Your bio"/>
                        </div>
                </div>
                <div className={styles.edit_links}>
                    {/* @ts-ignore */}
                    {userData?.links?.map((link: Link) => {
                        console.log(link)
                        return (
                        <LinkComponent {...link} />
                        )
                    })}
                    <button className={styles.edit_add_button} onClick={addLink}>+</button>
                </div>
                </div>
            </div>
        </section>
    )
}

export default EditComponent