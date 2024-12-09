import { getServerSession } from "next-auth";

import { nextAuthOptions } from "@/lib/next-auth/config";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default async function AuthorizedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(nextAuthOptions);

  return (
    <SidebarProvider>
      <AppSidebar.Root
        navUser={
          <AppSidebar.NavUser
            user={{
              name: session?.user?.name || "",
              email: session?.user?.email || "",
              avatar: session?.user?.image || undefined,
            }}
          />
        }
      />
      <SidebarTrigger />
      {children}
    </SidebarProvider>
  );
}
