import { Swiper, SwiperSlide } from 'swiper/react';
import styles from "../styles/Plans.module.css"
import PlanComponent from "./Plan";
import {plans} from "../shared/data";
import { PlanProp } from "../shared/types";

interface PlansComponentProp { 
    onMobile: boolean
}

const PlansComponent: React.FC<PlansComponentProp> = ({onMobile}): React.ReactElement => {
    return (
        <section id="Plans" className={styles.plans}>
            <img src="/assets/bottom_left_blob.png" alt="" className={styles.blob}/>
            <div className={`container ${styles.plans_container}`}>
                <header className={styles.plans_header}>
                    <h1>Find what fits for <span>you</span></h1>
                </header>
                <div className={styles.plans_plans}>
                    {onMobile ? 
                        <Swiper centeredSlides={true} pagination={true} >
                            {plans.map((plan: PlanProp) => <SwiperSlide key={plan.key}><PlanComponent {...plan} /></SwiperSlide>)}
                        </Swiper> :
                        plans.map((plan: PlanProp) => <PlanComponent {...plan} key={plan.key}/>)
                    }
                </div>
            </div>
            <img src="/assets/bottom_right_blob.png" alt="" className={styles.blob}/>
        </section>
    )
}

export default PlansComponent;