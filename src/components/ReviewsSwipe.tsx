import { Swiper, SwiperSlide } from 'swiper/react';
import {ReviewProp} from "../types"
import ReviewComponent from './Review';
import SwiperCore, {Pagination, A11y } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
SwiperCore.use([Pagination, A11y]);

interface ReviewsSwipeComponentProps  {
    reviews: ReviewProp[]
}

const ReviewsSwipeComponent: React.FC<ReviewsSwipeComponentProps> = ({reviews}): React.ReactElement => {
    return (
        <Swiper centeredSlides={true} pagination={true} >
                {reviews.map((review: ReviewProp) => {
                    return (
                    <SwiperSlide key={review.key}>
                        <ReviewComponent {...review} />
                    </SwiperSlide>  
                    )
                })}
        </Swiper>
    )
}

export default ReviewsSwipeComponent;