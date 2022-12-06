import { NextPage } from "next"
import SignUpComponent from "../components/SignUp"
import Head from "next/head"
const SignUp: NextPage = (): React.ReactElement => {
  return (
    <>
      <Head>
    <title>
      URLodge | Sign in
    </title>
    </Head>
    <SignUpComponent />
    </>
  )
}

export default SignUp;