import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session extends JWT {
    token: string;
    user: {
      _id: string;
      username: string;
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      role: string;
      isVerified: boolean;
      createdAt: string;
    } & DefaultSession["user"];
  }
}
