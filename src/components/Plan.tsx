import styles from "../styles/Plan.module.css";
import {Check} from "./icons";
import {PlanProp} from "../shared/types"

const PlanComponent: React.FC<PlanProp> = ({title, subTitle, price, features}): React.ReactElement => {
    return (
       <div className={styles.plan}>
        <header className={styles.plan_header}>
            <h2>{title}</h2>
            <p>{subTitle}</p>
        </header>
        <div className={styles.plan_price}>
            <h2><span>$</span>{price}</h2>
            <p>Per account per<br />month</p>
        </div>
        <div className={styles.plan_features}>
            <h3>includes</h3>
            <ul>
                {features.map((feature: string, i: number) => {
                    return (
                        <li key={i}>
                            <Check size={"2x"} color={"var(--dark-green)"}/>
                            <p>{feature}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
        <button className={styles.plan_button}>Get Started</button>
       </div> 
    )
}

export default PlanComponent;