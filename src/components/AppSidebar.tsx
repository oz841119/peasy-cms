"use client";

import { Command } from "lucide-react";
import { useTranslations } from "next-intl";
import type * as React from "react";
import { useMemo } from "react";
import { Navigation } from "@/components/Navigation";
import { NavUser } from "@/components/NavUser";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "@/i18n/navigation";

const useMenu = () => {
  const t = useTranslations();
  const adminBasePath = process.env.NEXT_PUBLIC_ADMIN_BASE_PATH || "/";
  const menu = useMemo(() => {
    return [
      {
        label: t("common.menu"),
        items: [
          {
            title: t("common.articleManagement"),
            url: `${adminBasePath}/article`,
            isActive: true,
            items: [
              {
                title: t("common.articleCreate"),
                url: `${adminBasePath}/article/create`,
                disabled: true,
              },
              {
                title: t("common.articleList"),
                url: `${adminBasePath}/article`,
                disabled: true,
              },
            ],
          },
        ],
      },
    ];
  }, [t, adminBasePath]);
  return {
    menu,
  };
};
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { menu } = useMenu();
  const user = {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  };
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href={process.env.NEXT_PUBLIC_ADMIN_BASE_PATH || "/"}>
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Acme Inc</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {menu.map((item) => (
          <Navigation key={item.label} label={item.label} items={item.items} />
        ))}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}
