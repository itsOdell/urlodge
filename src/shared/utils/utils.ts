import { signIn, SignInResponse } from "next-auth/react"
import axios from "axios";
import type { SignUpRes } from "../types";

export const credSignin = async (button: HTMLButtonElement, authCredits: {email: string, password: string}): Promise<SignInResponse | undefined> => {
    let userInfo: SignInResponse | undefined = await signIn(button.id, { ...authCredits, redirect: false})
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

// export async function requester<T>
//     (method: "GET" | "POST" | "DELETE" | "PUT", url: string, params: {[x: string]: any} = {},
//     headers: {[x: string]: string} = {'Content-Type': 'application/x-www-form-urlencoded'},
//     data: {[x: string]: any} = {})
// {
//     try {
//         const options = {method, url, params, headers, data};
//         let requesterResponse = await axios.request(options)
//         console.log("from util try", requesterResponse)
//         return requesterResponse      
//     } catch (error: any) {
//         console.log("from util error", error)
//         // return new Error(error)
//     }
// }