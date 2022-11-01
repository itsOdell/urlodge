import { NextPage } from "next"
import { getProviders } from "next-auth/react"
import SignInComponent from "../components/SignIn"
import type {ProviderProp} from "../types"

const SignIn: NextPage<ProviderProp> = ({ providers }) => {
  return (
    <SignInComponent providers={providers} />
  )
}

export default SignIn;

export async function getServerSideProps() {
  return {
    props: {
      providers: await getProviders()
    },
  }
}