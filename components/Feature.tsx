import styles from "../styles/Feature.module.css"
import { FeatureProps } from "../types";

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