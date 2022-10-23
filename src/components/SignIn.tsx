import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import styles from "../styles/SignIn.module.css";
import {ProviderProp} from "../types"

const SignInComponent: React.FC<ProviderProp> = ({providers}): React.ReactElement => {
    const {data:session} = useSession()
    console.log(session)
    let [authCredits, setAuthCredits] = useState<{email: string, password: string}>({
        email: "",
        password: "",
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAuthCredits(prev => ({...prev, [e.target.id]: e.target.value}))
    }

    const handleSignIn = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const target = e.target as HTMLButtonElement
        signIn(target.id, { 
                ...authCredits,
                redirect: false
        })
        .then(res => console.log(res))
        .catch(err => console.error(err))
    }
    return (
        <section className={styles.signin}>
            <div className={styles.signin_left}>
                <form className={styles.signin_form}>
                    <header>
                        <h1>Get Started</h1>
                        <p>Login and explore the wilderness</p>
                     </header>
                     <div className={styles.signin_inputs_container}>
                        {/* <div className={styles.signin_input_container}>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="Enter your name" onChange={handleChange} />
                        </div> */}
                        <div className={styles.signin_input_container}>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Enter your email" onChange={handleChange} />
                        </div>
                        <div className={styles.signin_input_container}>
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" placeholder="Enter your email" onChange={handleChange}/>
                        </div>
                     </div>
                     <div className={styles.signin_buttons_container}>
                        {Object.keys(providers).map((providerName: string) => {
                            return (
                                <button id={providerName} className={styles[providerName]} onClick={handleSignIn} key={providerName}>Sign in with {providerName}</button>
                            )
                        })}
                     </div>
                     <div className={styles.signin_signup}>
                    <Link href="/signup">
                        <p>Don't have an account? <span>Sign up for free</span></p>
                    </Link>
                     </div>
                </form>
            </div>
        </section>
    )
}

export default SignInComponent;