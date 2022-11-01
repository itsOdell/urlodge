import type { NextPage } from 'next'
import Head from 'next/head'
import {useWidth} from "../shared/hooks";

const Edit: NextPage = () => {
  const width = useWidth();
  const onMobile: boolean = width > 1000 ? false : true;
  
  return (
    <main>
      <Head>
        <title>URLodge | All in one links!</title>
      </Head>
    </main>
  )
}

export default Edit
