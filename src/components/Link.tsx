import styles from "src/styles/Link.module.css"
interface LinkProp {
    link: string;
    title: string;
    deleteHandler?: () => void
}

const LinkComponent: React.FC<LinkProp> = ({link, title, deleteHandler}): React.ReactElement => {
    return (
        <div className={styles.link}>
            {
                typeof deleteHandler === 'function' ?
            <div onClick={deleteHandler} className={styles.x}>
                <span>x</span>
            </div> : ""
            }
        <a href={link} target="_blank" rel={"noreferrer"}>
            <button className={styles.link_button}>{title}</button>
        </a>
        </div>
    )
}

export default LinkComponent