import { Link, User } from '@prisma/client';
import React from 'react'
import styles from "src/styles/User.module.css"
import LinkComponent from "./Link"

export const UserComp: React.FC<Omit<User & {links: Link[]}, "password">> = (userData): React.ReactElement => {

    async function copyURL(): Promise<void> {
        const url = `${window.location.origin}/${userData.linkTag}`
        await navigator.clipboard.writeText(url);
        alert("copied");
    }

  return (
     <section className={styles.edit}>
    <img src={String(userData?.banner)} alt="your banner" className={styles.userBanner} referrerPolicy="no-referrer" />
<div className={styles.container}>
    <div className={styles.userContainer}>
        <div className={styles.userImage}>
        <img src={String(userData?.image)} alt="your image" className={styles.userImage} />
        </div>
        <div className={styles.userInputContainer}>
            <label htmlFor="tag">Name</label>
            <p>{String(userData?.tag)}</p>
        </div>
        <div className={styles.userInputContainer}>
            <label htmlFor="bio">Bio</label>
            <p>{String(userData?.biography)}</p>
        </div>
        <button onClick={copyURL} className={styles.add_link}>Copy Link</button>
    </div>
    <div className={styles.linksContainer}>
    {userData?.links?.map((link: Link) => <LinkComponent {...link} key={link.id}/>)}
    </div>
</div>
</section>
  )
}

export default UserComp