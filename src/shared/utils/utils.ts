import { signIn, SignInResponse } from "next-auth/react"
import axios from "axios";

export const credSignin = async (button: any, authCredits: {email: string, password: string}): Promise<SignInResponse | undefined> => {
    const buttonTarget = button.current as unknown as HTMLButtonElement
    let res = await signIn(buttonTarget.id, { ...authCredits, redirect: false})
    if (res?.ok === false) {
        throw(res)
    }
    return res
}

export const credSignup = async (authCredits: {email: string, password: string}) => {
    const res = JSON.parse((await axios.post("/api/signup", authCredits)).data)
    if (res?.ok === false) {
        throw(res)
    }
    return res
}

export const btnLoadingAnimation = (button: any, text: string, disabled: boolean): void => {
    let buttonEl = (button.current as unknown as HTMLButtonElement);
    buttonEl.innerText = text;
    buttonEl.disabled = disabled;
}

export function exclude(model: any, ...keys: string[]) {
    for (let key of keys) {
      delete model[key]
    }
    return model
  }
  