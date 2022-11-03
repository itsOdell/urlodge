import { signIn } from "next-auth/react"

export const credSignin = async (e: React.MouseEvent<HTMLFormElement>, button: any, authCredits: {email: string, password: string}) => {
    e.preventDefault()
    // btnLoadingAnimation("loading", true)
    try {
        const buttonTarget = button.current as unknown as HTMLButtonElement
        let res = await signIn(buttonTarget.id, { ...authCredits, redirect: false})
        console.log(res)
        if (res?.ok === false) {
            throw(res)
        }
    } catch (error: any) {
        console.error("testing")
    }
}

// export const btnLoadingAnimation = (text: string, disabled: boolean): void => {
//     let buttonEl = (button.current as unknown as HTMLButtonElement);
//     buttonEl.innerText = text;
//     buttonEl.disabled = disabled;
// }