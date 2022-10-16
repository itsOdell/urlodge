import styles from "../styles/Feature.module.css"
import parentStyles from "../styles/About.module.css"

interface FeatureProps {
    Icon: string | React.ElementType,
    title: string,
    description: string
}

const FeatureComponent: React.FC<FeatureProps> = ({Icon, title, description}): React.ReactElement => {
    return (
        <div className={styles.feature}>
            <div className={styles.icon_container}>
                <Icon />
            </div>
            <div className={styles.title_container}>
                <h2>{title}</h2>
            </div>
            <div className={styles.description_container}>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default FeatureComponent;