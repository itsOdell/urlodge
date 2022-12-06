import { NextPage } from "next"
import { getProviders } from "next-auth/react"
import SignInComponent from "../components/SignIn"
import type {ProviderProp} from "../shared/types"
import Head from "next/head"

const SignIn: NextPage<ProviderProp> = ({ providers }): React.ReactElement => {
  return (
    <>
    <Head>
    <title>
      URLodge | Sign in
    </title>
    </Head>
    
    <SignInComponent providers={providers} />
    </>
  )
}

export default SignIn;

export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: {
      providers
    }
  }
}