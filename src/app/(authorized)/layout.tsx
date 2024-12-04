import { getServerSession } from "next-auth";

import { nextAuthOptions } from "@/lib/next-auth/config";

export default async function AuthorizedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(nextAuthOptions);

  console.log(session);

  return <>{children}</>;
}
