import NextAuth, { NextAuthOptions, RequestInternal } from "next-auth"
import bcrypt from "bcryptjs"
import CredentialsProvider from "next-auth/providers/credentials"
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import prisma from "../../../prisma/prisma"
import { JWT } from "next-auth/jwt";
import {findUser} from "src/controller/UserController";


export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt"
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      authorize: async function (credentials: Record<string, string> | undefined, req: Pick<RequestInternal, "headers" | "body" | "query" | "method">) {
        const {email, password} = credentials as {email: string, password: string};
        let user = await findUser("email", email)
        
        if (user) {
          let passwordCompares: boolean = await bcrypt.compare(password, String(user.password));
          if (passwordCompares) {
            return {id: user.id, image: user.image}
          }
            throw new Error("Password does not match");
        }
        throw new Error("User does not exist");
      }
    }),
    // GoogleProvider({
    //   clientId: String(process.env.GOOGLE_CLIENT_ID),
    //   clientSecret: String(process.env.GOOGLE_CLIENT_SECRET),
    // }),
  ],
  pages: {
    signIn: '/signin',
  },
  callbacks: {
    session: async ({ session, token }: {session: any, token: JWT}) => {
      if (session?.user) {
        session.user.id = token.uid;
      }
      return session;
    },
    jwt: async ({ user, token }) => {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
  },
}

export default NextAuth(authOptions);