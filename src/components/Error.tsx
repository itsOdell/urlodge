import styles from "../styles/Error.module.css"

interface ErrorComponentProp { 
    className?: string,
    text: string
}

const ErrorComponent: React.FC<ErrorComponentProp> = ({className, text}): React.ReactElement => {
    return (
        <div className={`${className} ${styles.error}`}>
            <p>{text}</p>
        </div>
    )
}

export default ErrorComponent;