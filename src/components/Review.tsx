import styles from "../styles/Review.module.css"
import { Quote } from "../icons";
import { ReviewProp } from "../types";

const ReviewComponent: React.FC<ReviewProp> = ({image, name, comment}): React.ReactElement => {
    // fix sttrucure
    return (
        <div className={styles.review}>
            <div className={styles.review_container}>
                <div className={styles.review_user_info}>
                    <img src={image} alt=""/>
                    <h2>{name}</h2>
                </div>
                <div className={styles.review_user_comment}>
                    <Quote size={"2x"} />
                    <p>{comment}</p>
                </div>
            </div>
        </div>
    )
}

export default ReviewComponent;