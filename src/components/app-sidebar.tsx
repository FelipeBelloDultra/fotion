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
import { NavUser } from "./nav-user";
import { File } from "lucide-react";
import Link from "next/link";

const user = {
  email: "felipe_bello_dultra@hotmail.com",
  avatar: "https://avatars.githubusercontent.com/u/51035716?v=4",
  name: "Felipe Bello Dultra",
};

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Tree({ item }: { item: string | any[] }) {
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
        <Tree key={index} item={subItem} />
      ))}
    </div>
  );
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
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
                <Tree key={index} item={item} />
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

      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
