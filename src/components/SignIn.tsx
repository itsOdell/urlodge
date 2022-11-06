import {useSession } from "next-auth/react";
import Link from "next/link";
import {providerIcons} from "../shared/data"
import { ChangeEvent, useRef, useState } from "react";
import styles from "../styles/SignIn.module.css";
import {ProviderProp} from "../shared/types"
import ErrorComponent from "./Error";
import { useRouter } from "next/router";
import { credSignin, btnLoadingAnimation } from "src/shared/utils/utils";

const SignInComponent: React.FC<ProviderProp> = ({providers}): React.ReactElement => {
    const {data:session, status} = useSession()
    const router = useRouter();
    const button = useRef<HTMLButtonElement>(null)
    let [errorText, setErrorText] = useState<string>("");
    let [authCredits, setAuthCredits] = useState<{email: string, password: string}>({
        email: "",
        password: "",
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAuthCredits(prev => ({...prev, [e.target.id]: e.target.value}))
    }

    const handleSignIn = async (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault()
        let buttonCurrent = button.current as HTMLButtonElement
        btnLoadingAnimation(buttonCurrent, "Loading...", true)
        try {
            let signInRes = await credSignin(buttonCurrent, authCredits)
            console.log(signInRes)
            setErrorText("")
            router.push("/edit")
        }
        catch(e: any) {
            console.log(e)
            setErrorText(e.error)
        } finally {
            btnLoadingAnimation(buttonCurrent, "Sign in", false)
        }
    }
    
    return (
        <section className={styles.signin}>
            <div className={styles.signin_left}>
                <form className={styles.signin_form} onSubmit={handleSignIn}>
                    <header>
                        <h1>Get Started</h1>
                        <p>Login and explore the wilderness!</p>
                     </header>
                     <div className={styles.signin_inputs_container}>
                        <div className={styles.signin_input_container}>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Enter your email" onChange={handleChange} required={true}/>
                        </div>
                        <div className={styles.signin_input_container}>
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" placeholder="Enter your password" onChange={handleChange} required={true}/>
                        </div>
                     </div>
                     <div className={styles.signin_buttons_container}>
                        {Object.keys(providers).map((providerName: string) => {
                            let icon = providerIcons.hasOwnProperty(providerName) ? providerIcons[providerName].icon : "";
                            return (
                                <button id={providerName} className={styles[providerName]} key={providerName} type="submit" ref={button}>{icon}Sign in</button>
                            )
                        })}
                     </div>
                     <div className={styles.signin_signup}>
                    <Link href="/signup">
                        <p>Don't have an account? <span>Sign up for free</span></p>
                    </Link>
                     </div>
                     <ErrorComponent text={errorText} />
                </form>
            </div>
        </section>
    )
}

export default SignInComponent;
