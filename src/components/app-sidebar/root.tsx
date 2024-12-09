/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { File } from "lucide-react";
import Link from "next/link";
import { NavUser } from "./nav-user";

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  navUser: ReturnType<typeof NavUser>;
}

const data = {
  favorites: [
    {
      file: "Note 1",
    },
  ],
  tree: [
    [
      "app",
      [
        "api",
        ["hello", ["route.ts"]],
        "page.tsx",
        "layout.tsx",
        [
          "blog",
          [
            "blog",
            ["blog", ["blog", ["page.tsx", ["blog", ["blog", ["page.tsx"]]]]]],
          ],
        ],
      ],
    ],
    ".eslintrc.json",
  ],
};

function ItemsTree({ item }: { item: string | any[] }) {
  const [name, ...items] = Array.isArray(item) ? item : [item];

  if (!items.length) {
    return (
      <SidebarMenuButton
        isActive={name === "page.tsx"} // TODO::: Fix this rule with current path
        className="data-[active=true]:underline"
        asChild
      >
        <Link href="/">
          <File />
          {name}
        </Link>
      </SidebarMenuButton>
    );
  }

  return (
    <div className="pl-3 border-l flex flex-col gap-1">
      <SidebarMenuButton asChild>
        <Link href="/">
          <File />
          {name}
        </Link>
      </SidebarMenuButton>
      {items.map((subItem, index) => (
        <ItemsTree key={index} item={subItem} />
      ))}
    </div>
  );
}

export function AppSidebar({ navUser, ...props }: AppSidebarProps) {
  return (
    <Sidebar {...props}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>My favorites</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.favorites.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton asChild>
                    <Link href="/">
                      <File />
                      {item.file}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>All pages</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.tree.map((item, index) => (
                <ItemsTree key={index} item={item} />
              ))}
              <SidebarMenuButton asChild>
                <Link href="/">
                  <File />
                  name
                </Link>
              </SidebarMenuButton>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>{navUser}</SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
