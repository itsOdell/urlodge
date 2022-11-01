export interface ProviderProp {
    [x: string]: {
        id: string,
        name: string,
        type: string,
        signinUrl: string
        callbackUrl: string
    }
}
