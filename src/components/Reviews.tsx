import styles from "../styles/Reviews.module.css";
import ReviewComponent from "./Review";
import { ReviewProp } from "../types";
import {reviews} from "../data";
import {useWidth} from "../hooks/useWidth";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ReviewsComponent: React.FC = (): React.ReactElement => {
    const width = useWidth()
    console.log(width)
    return (
        <section className={styles.reviews} id="Reviews">
            <img src="/assets/middle_left_blob.png" alt="" className={styles.blob}/>
            <div className={`container ${styles.reviews_container}`}>
                <header className={styles.reviews_header}>
                    <h1>Join the world leading<br/>organization today!</h1>
                    <p>ok i pull up hop out the after party</p>
                </header>
                <div className={styles.reviews_reviews}>
                    {width > 1000 ? reviews.map((review: ReviewProp) => {
                        return (
                            <ReviewComponent {...review}/>
                            )
                        }) : 
                        <Swiper 
                        centeredSlides={true}>
                            <SwiperSlide>
                                <ReviewComponent image={reviews[0].image} name={reviews[0].name} comment={reviews[0].comment} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ReviewComponent image={reviews[1].image} name={reviews[1].name} comment={reviews[1].comment} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ReviewComponent image={reviews[2].image} name={reviews[2].name} comment={reviews[2].comment} />
                            </SwiperSlide>
                        </Swiper>}
                </div>
            </div>
            <img src="/assets/middle_right_blob.png" alt="" className={styles.blob}/>
        </section>
    )
}

export default ReviewsComponent;