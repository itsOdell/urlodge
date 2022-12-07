import styles from "../styles/Edit.module.css";
import request from "axios";
import {useSession} from "next-auth/react"
import { useEffect, useRef, useState } from "react";
import { User } from "@prisma/client";
import LinkComponent from "./Link"
import type {Link} from "@prisma/client"

const EditComponent: React.FC = (): React.ReactElement => {
    const {data: session, status}: any = useSession()
    const userTag = useRef<HTMLInputElement>(null);
    const userBiography = useRef<HTMLInputElement>(null);
    let [userData, setUserData] = useState<Omit<User & {links: Link[]}, "password">>()
    useEffect(() => {
        let url = `/api/user`
        async function getData() {
            try {
                const res: any = (await request({
                    method: 'GET',
                    url,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    params: {type: 'id'},
                })).data
                setUserData(res)   
            } catch (error: any) {
                console.error(error)
            }
        }
        getData()
    }, [session])
    
    if (status === "loading") {
        return <h1 style={{color: "black"}}>
            Loading
        </h1>
      }
    
    async function deleteHandler(linkId: string) {
        let url = "/api/link"
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


    async function updateUser() {
        let url = "/api/user"
        try {
            let updateRes: User = (await request({
                method: 'PUT',
                url: url,
                data: {
                    tag: userTag?.current?.value, 
                    biography: userBiography?.current?.value
                }
                })).data
            console.log(updateRes)
            setUserData((prev: any) => ({...prev, tag: updateRes.tag, biography: updateRes.biography}))
        } catch (error) {
            console.error(error)
            alert(alert)
        }
    }

    async function addImage(type: "image" | "banner") {
        let link = prompt("insert image address");
        if (!link) return;
        let url = "/api/user"
        try {
            let updateRes: User = (await request({
                method: "PUT",
                url,
                data: {
                    [type]: link
                }
            })).data;
            setUserData((prev: any) => ({...prev, [type]: link}))
        } catch (error) {
         console.error(error)
         alert(error)   
        }
    }

    async function addLink() {
        let url = "/api/link"
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

    async function copyURL(): Promise<void> {
        const url = `${window.location.origin}/${userData?.linkTag}`
        await navigator.clipboard.writeText(url);
        alert("copied");
    }

    return (
        <section className={styles.edit}>
                <div className={styles.input_file_container} onClick={() => addImage("banner")}>
                    <label htmlFor="file">+</label>
                </div>
                <img src={String(userData?.banner)} alt="your banner" className={styles.userBanner} referrerPolicy="no-referrer" />
            <div className={styles.container}>
                <div className={styles.userContainer}>
                    <div className={styles.userImage}>
                    <img src={String(userData?.image)} alt="your image" className={styles.userImage} />
                        <div className={styles.input_file_user} onClick={() => addImage("image")}>
                            <label htmlFor="file">+</label>
                        </div>
                    </div>
                    <div className={styles.userInputContainer}>
                        <label htmlFor="tag">Name</label>
                        <input type="text" name="tag" id="tag" className={styles.input} placeholder={String(userData?.tag) || ""} ref={userTag}/>
                    </div>
                    <div className={styles.userInputContainer}>
                        <label htmlFor="bio">Bio</label>
                        <input type="text" name="bio" id="bio" className={styles.input} placeholder={String(userData?.biography) || ""} ref={userBiography}/>
                    </div>
                    <button onClick={updateUser} className={styles.add_link}>Save</button>
                    <button onClick={copyURL} className={styles.add_link}>Copy Link</button>
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