import { Swiper, SwiperSlide } from 'swiper/react';
import styles from "../styles/Reviews.module.css";
import ReviewComponent from "./Review";
import { ReviewProp } from "../types";
import {reviews} from "../data";

interface ReviewsComponentProp { 
    onMobile: boolean
}

const ReviewsComponent: React.FC<ReviewsComponentProp> = ({onMobile}): React.ReactElement => {
    return (
        <section className={styles.reviews} id="Reviews">
            <img src="/assets/middle_left_blob.png" alt="" className={styles.blob}/>
            <div className={`container ${styles.reviews_container}`}>

                <header className={styles.reviews_header}>
                    <h1>Join the world leading<br/>organization today!</h1>
                    <p>Here are some of our reviews</p>
                </header>

                <div className={styles.reviews_reviews}>
                    {onMobile ? 
                        <Swiper centeredSlides={true} pagination={true} >
                            {reviews.map((review: ReviewProp) => <SwiperSlide key={review.key}><ReviewComponent {...review} /></SwiperSlide>)}
                        </Swiper> :
                        reviews.map((review: ReviewProp) => <ReviewComponent {...review}/>)
                    }
                </div>

            </div>
            <img src="/assets/middle_right_blob.png" alt="" className={styles.blob}/>
        </section>
    )
}

export default ReviewsComponent;