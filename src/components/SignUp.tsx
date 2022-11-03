import { useSession } from "next-auth/react";
import Link from "next/link";
import { ChangeEvent, useRef, useState } from "react";
import styles from "../styles/SignUp.module.css";
import { useRouter } from "next/router";
import ErrorComponent from "./Error";
import { credSignup, btnLoadingAnimation } from "src/shared/utils/utils";

const SignUpComponent: React.FC = (): React.ReactElement => {
    const {data:session} = useSession()
    console.log(session)
    const router = useRouter();
    const button = useRef(null)
    let [errorText, setErrorText] = useState<string>("")
    let [authCredits, setAuthCredits] = useState<{linkTag: string,email: string, password: string}>({ linkTag: "", email: "", password: ""})
        
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAuthCredits(prev => ({...prev, [e.target.id]: e.target.value}))
    }
    
    const handleSignIn = async (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault();
        btnLoadingAnimation(button, "loading", true)
        try {
            let signUpRes = await credSignup(authCredits)
            console.log(signUpRes)
            setErrorText("")
            router.push("/signin")
        } catch (e: any) {
            console.log(e)
            setErrorText(e.error)
        } finally {
            btnLoadingAnimation(button, "Sign up", false)
        }
    }
    
    return (
        <section className={styles.signup}>
            <div className={styles.signup_left}>
                <form className={styles.signup_form} onSubmit={handleSignIn}>
                    <header>
                        <h1>Greetings</h1>
                        <p>Create an account and start!</p>
                     </header>
                     <div className={styles.signup_inputs_container}>
                        <div className={styles.signup_input_container}>
                            <label htmlFor="linkTag">link</label>
                            <input type="text" id="linkTag" name="linkTag" placeholder="urlodge/" onChange={handleChange} required={true}/>
                        </div>
                        <div className={styles.signup_input_container}>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Enter your email" onChange={handleChange} required={true}/>
                        </div>
                        <div className={styles.signup_input_container}>
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" placeholder="Enter your password" onChange={handleChange} required={true}/>
                        </div>
                     </div>
                     <div className={styles.signup_buttons_container}>
                        <button id="credentials" className={styles.credentials_button} type="submit" ref={button}>Sign up</button>
                     </div>
                     <div className={styles.signup_signup}>
                    <Link href="/signin">
                        <p>Already have an account? <span>Login here</span></p>
                    </Link>
                     </div>
                </form>
                <ErrorComponent text={errorText}/>
            </div>
        </section>
    )
}

export default SignUpComponent;