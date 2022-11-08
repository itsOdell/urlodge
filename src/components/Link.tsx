import styles from "src/styles/Link.module.css"
interface LinkProp {
    link: string;
    title: string;
}

const LinkComponent: React.FC<LinkProp> = ({link, title}): React.ReactElement => {
    return (
        <a href={link} target="_blank">
            <button className={styles.link_button}>{title}</button>
        </a>
    )
}

export default LinkComponent