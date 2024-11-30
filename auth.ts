import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { postFetch } from "./utils";

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/signin",
  },
  providers: [
    Credentials({
      authorize: async (credentials) => {
        console.log(credentials, "credentials");

        const { callbackUrl, ...data } = credentials;

        const response = await postFetch("/auth/signin", data);
        if (response.message !== "success") {
          throw new CredentialsSignin(response.message, {
            cause: {
              message: response.message,
              error: response.message,
            },
          });
        }

        return response;
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      return { ...token, ...user };
    },
    session: async ({ session, token }) => {
      return { ...session, ...token };
    },
  },
});
