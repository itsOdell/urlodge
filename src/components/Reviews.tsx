import styles from "../styles/Reviews.module.css";
import ReviewComponent from "./Review";
import { ReviewProp } from "../types";
import {reviews} from "../data";
import {useWidth} from "../hooks";
import ReviewsSwipeComponent from "./ReviewsSwipe";

const ReviewsComponent: React.FC = (): React.ReactElement => {
    const width = useWidth();
    const onMobile: boolean = width > 100 ? false : true;
    return (
        <section className={styles.reviews} id="Reviews">
            <img src="/assets/middle_left_blob.png" alt="" className={styles.blob}/>
            <div className={`container ${styles.reviews_container}`}>

                <header className={styles.reviews_header}>
                    <h1>Join the world leading<br/>organization today!</h1>
                    <p>ok i pull up hop out the after party</p>
                </header>

                <div className={styles.reviews_reviews}>
                    {onMobile ? 
                        reviews.map((review: ReviewProp) => <ReviewComponent {...review}/>) : 
                        <ReviewsSwipeComponent reviews={reviews}/>
                    }
                </div>

            </div>
            <img src="/assets/middle_right_blob.png" alt="" className={styles.blob}/>
        </section>
    )
}

export default ReviewsComponent;