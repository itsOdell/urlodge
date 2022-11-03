import type { NextPage } from 'next'
import Head from 'next/head'
import {useWidth} from "../shared/hooks";
import EditComponent from "../components/Edit"
import axios from "axios";
import type { GetServerSidePropsContext } from 'next';
import {getToken} from "next-auth/jwt"

const Edit: NextPage = () => {
  const width = useWidth();
  const onMobile: boolean = width > 1000 ? false : true;
  
  return (
    <main>
      <Head>
        <title>URLodge | All in one links!</title>
      </Head>
      <EditComponent />
    </main>
  )
}

export default Edit


//use csr