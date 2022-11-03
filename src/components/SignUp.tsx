import { useSession } from "next-auth/react";
import Link from "next/link";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import styles from "../styles/SignUp.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import ErrorComponent from "./Error";

const SignUpComponent: React.FC = (): React.ReactElement => {
    const {data:session} = useSession()
    console.log(session)
    const router = useRouter();
    const button = useRef(null)
        let [errorText, setErrorText] = useState<string>("")
        let [authCredits, setAuthCredits] = useState<{linkTag: string,email: string, password: string}>({
            linkTag: "",
            email: "",
            password: "",
        })
        
        const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
            setAuthCredits(prev => ({...prev, [e.target.id]: e.target.value}))
    }

    const btnLoadingAnimation = (text: string, disabled: boolean): void => {
        let buttonEl = (button.current as unknown as HTMLButtonElement);
        buttonEl.innerText = text;
        buttonEl.disabled = disabled;
    }
    
    const handleSignIn = async (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault();
        btnLoadingAnimation("loading", true)
        try {
            let res = await axios.post("/api/signup", authCredits)
            let data = JSON.parse(res.data)
            console.log(data)
            if (data?.ok === false) {
                throw(data)
            }
            router.push(data.url)
        } catch (error: any) {
            console.log(error)
            setErrorText(error?.error)
        } finally {
            btnLoadingAnimation("Sign up", false)
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
                            <input type="password" id="password" name="password" placeholder="Enter your email" onChange={handleChange} required={true}/>
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