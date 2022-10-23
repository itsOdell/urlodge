import NextAuth, { Awaitable, NextAuthOptions, RequestInternal, User } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt"
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      authorize: function (credentials: Record<string, string> | undefined, req: Pick<RequestInternal, "headers" | "body" | "query" | "method">): Awaitable<User | null> {
        //db lookup, check if user exsits
        const {email, password} = credentials as {email: string, password: string};
        // if user exists, check if they used the right password and return the user
        if (email === "abduladilsunnat@gmail.com" && password === "Sunnat1208") {
          return {id: "123", name: "odil", email: "abduladilsunnat@gmail.com"}
        }
        //if user doent exists, return null
        return null;
      }
    }),
    GoogleProvider({
      clientId: String(process.env.GOOGLE_CLIENT_ID),
      clientSecret: String(process.env.GOOGLE_CLIENT_SECRET),
    }),
  ],
  pages: {
    signIn: '/signin',
    signOut: '/signout',
  }
}

export default NextAuth(authOptions);