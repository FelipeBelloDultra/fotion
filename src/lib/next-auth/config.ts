import { AuthOptions } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import GithubProvider from "next-auth/providers/github";

import { prisma } from "@/lib/prisma";
import { AdapterUser } from "next-auth/adapters";

const prismaAdapter = PrismaAdapter(prisma);

export const nextAuthOptions: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/home",
  },
  adapter: {
    ...prismaAdapter,
    async createUser(user: AdapterUser) {
      const createdUser = await prisma.user.create({
        data: user,
      });

      return createdUser as AdapterUser;
    },
  },
};
