import type { NextPage } from 'next'
import Head from 'next/head'
import {useWidth} from "../shared/hooks";
import EditComponent from "../components/Edit"

const Edit: NextPage = () => {
  const width = useWidth();
  const onMobile: boolean = width > 1000 ? false : true;
  
  return (
    <main>
      <Head>
        <title>URLodge | Editing Profile</title>
      </Head>
      <EditComponent />
    </main>
  )
}

export default Edit
