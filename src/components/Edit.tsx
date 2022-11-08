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
    let [userData, setUserData] = useState<User>()
    useEffect(() => {
        let url = `/api/user/?type=id&target=${session?.user?.id}`
        async function getData() {
            try {
                const res: User = (await axios.get(url)).data
                setUserData(res)   
            } catch (error: any) {
                console.error(error)    
            }
        }
        getData()
    }, [session])

    console.log(userData)

    async function addLink() {
        let link = prompt("The URL for the new link");
        let title = prompt("The title for the new link");
        if (link && title) {
            let linkres = (await axios.request({
                method: 'POST',
                url: 'http://localhost:3000/api/link/',
                params: {
                  link,
                  title,
                  userId: 'cl9qozkgl0000wnrjv0kha7sd'
                }
              })).data
            setUserData((prev: any) => ({...prev, links: [...prev.links, linkres]}));
        }
        else console.log("enter all credentials")
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
                    {userData?.links?.map((link: Link, i) => {
                        return (
                            <LinkComponent {...link} key={link.id || i}/>
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