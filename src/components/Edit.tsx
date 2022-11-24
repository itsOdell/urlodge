import styles from "../styles/Edit.module.css";
import request from "axios";
import {useSession} from "next-auth/react"
import { useEffect, useRef, useState } from "react";
import { User } from "@prisma/client";
import LinkComponent from "./Link"
import type {Link} from "@prisma/client"

const EditComponent: React.FC = (): React.ReactElement => {
    const {data: session}: any = useSession()
    const userTag = useRef<HTMLInputElement>(null);
    const userBiography = useRef<HTMLInputElement>(null);
    let [userData, setUserData] = useState<any>()
    useEffect(() => {
        let url = `http://localhost:3000/api/user/`
        async function getData() {
            try {
                const res: any = (await request({
                    method: 'GET',
                    url,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    params: {type: 'id'}
                })).data
                setUserData(res)   
            } catch (error: any) {
                console.error(error)
            }
        }
        getData()
    }, [session])


    async function deleteHandler(linkId: string) {
        let url = "http://localhost:3000/api/link"
        try {
            let deleteRes = (await request({
                method: "DELETE",
                url,
                data: {
                    linkId
                }
            })).data;
            setUserData((prev: any) => ({...prev, links:  prev.links.filter((link: Link) => link.id != linkId)}))
        } catch (error) {
            console.error(error)
            alert(error)
        }
    }

    console.log("test",userData)

    async function updateUser() {
        let url = "http://localhost:3000/api/user"
        try {
            let updateRes: User = (await request({
                method: 'PUT',
                url: url,
                data: {
                    tag: userTag?.current?.value, 
                    biography: userBiography?.current?.value}
            })).data
            setUserData((prev: any) => ({...prev, tag: updateRes.tag, biography: updateRes.biography}))
        } catch (error) {
            console.error(error)
            alert(alert)
        }
    }

    async function addLink() {
        let url = "http://localhost:3000/api/link"
        try {
            let link = prompt("The URL for the new link");
            let title = prompt("The title for the new link");
            let linkres = (await request({
                method: 'POST',
                url,
                data: {link, title}
            })).data
                setUserData((prev: any) => ({...prev, links: [...prev.links, linkres]}));
        } catch (error: any) {
            alert(error.response.data.error)
        }
    }

    return (
        <section className={styles.edit}>
                <div className={styles.input_file_container}>
                    <input type="file" name="banner" id="file" className={styles.input_file}/>
                    <label htmlFor="file">+</label>
                </div>
                <img src={String(userData?.banner)} alt="your banner" className={styles.userBanner} referrerPolicy="no-referrer" />
            <div className={styles.container}>
                <div className={styles.userContainer}>
                    <div className={styles.userImage}>
                    <img src={String(userData?.image)} alt="your image" className={styles.userImage} />
                        <div className={styles.input_file_user}>
                            <input type="file" name="banner" id="file"/>
                            <label htmlFor="file">+</label>
                        </div>
                    </div>
                    <div className={styles.userInputContainer}>
                        <label htmlFor="tag">Name</label>
                        <input type="text" name="tag" id="tag" className={styles.input}/>
                    </div>
                    <div className={styles.userInputContainer}>
                        <label htmlFor="bio">Bio</label>
                        <input type="text" name="bio" id="bio" className={styles.input}/>
                    </div>
                    <button onClick={updateUser} className={styles.add_link}>Save</button>
                </div>
                <div className={styles.linksContainer}>
                {userData?.links?.map((link: Link) => <LinkComponent {...link} key={link.id} deleteHandler={() => deleteHandler(link.id)}/>)}
                <a>
                     <button onClick={addLink}>+</button>
                </a>
                </div>
            </div>
        </section>
    )
}

export default EditComponent
{/* <div className={styles.edit_container}>
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
                <input type="text" className={styles.profile_name_input} name="profile_name_input" id="profile_name_input" placeholder="Your name" defaultValue={String(userData?.tag) || ""} ref={userTag}/>
            </div>
            <div className={styles.input_container}>
                <label htmlFor="profile_biograhpy_input">Biograhpy</label>
                <input type="text" className={styles.profile_biograhpy_input} name="profile_biograhpy_input" id="profile_biograhpy_input" placeholder="Your bio" defaultValue={String(userData?.biography) || ""} ref={userBiography}/>
            </div>
            <button className={styles.profile_save} onClick={updateUser}>Save</button>
    </div>
    <div className={styles.edit_links}>
        <div className={styles.edit_links_container}>
        {/* @ts-ignore *
        {userData?.links?.map((link: Link) => {
            return (
                <LinkComponent {...link} key={link.id}/>
            )
        })}
        <a>
            <button className={styles.edit_add_button} onClick={addLink}>+</button>
        </a>
        </div>
    </div>
    </div>
</div> */}