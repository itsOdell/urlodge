import { signIn, SignInResponse } from "next-auth/react"
import axios from "axios";
import type { SignUpRes } from "../types";
import { User } from "@prisma/client";

export const credSignin = async (button: HTMLButtonElement, authCredits: {email: string, password: string}, callbackUrl: string): Promise<SignInResponse | undefined> => {
    let userInfo: SignInResponse | undefined = await signIn(button.id, { ...authCredits, callbackUrl })
    if (userInfo?.ok === false) throw(userInfo)
    return userInfo
}

export const btnLoadingAnimation = (button: HTMLButtonElement, text: string, disabled: boolean): void => {
    button.innerText = text;
    button.disabled = disabled;
}

export function exclude(model: any, ...keys: string[]) {
    for (let key of keys) {
            delete model[key]
    }
    return model
}
