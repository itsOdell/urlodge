import { User } from "@prisma/client";
import axios from "axios";
import { NextPage, NextPageContext } from "next/types";
import UserComp from "src/components/User";
const User: NextPage<any> = ({user}): React.ReactElement => {
    return (
        <UserComp {...user}/>
    )
}

export default User

export async function getServerSideProps(context: NextPageContext) {
    let target = (context.req?.url)?.slice(1)
    const url = `${process.env.NEXT_PUBLIC_API_URL}/user`;
    let data: Promise<User> = (await axios.request({
        method: "GET",
        url: url,
        params: {
            type: "linkTag",
            target: target
        }
    })).data
    return {
      props: {
           user: data
      }
    }
  }