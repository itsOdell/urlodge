// import { User } from "@prisma/client";
import axios from "axios";
import Head from "next/head";
import { NextPage, NextPageContext } from "next/types";
import UserComp from "src/components/User";
import { findUser } from "src/controller/UserController";
import { exclude } from "src/shared/utils/utils";

const User: NextPage<any> = ({user}): React.ReactElement => {
    return (
<>
<Head>
    <title>URLodge | {user.tag}</title>
</Head>
<UserComp {...user}/>
</>
    )
}

export default User

export async function getServerSideProps(context: NextPageContext) {
    let target = (context.req?.url)?.slice(1)
    let data = exclude(await findUser("linkTag", String(target), {links: true}), "password")
    if (!data) {
        return { 
            notFound: true
        }
    }
    return {
      props: {
           user: data
      }
    }
  }