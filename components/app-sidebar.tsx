// components/app-sidebar.tsx
"use client";

import {
  //  Calendar,
  Home,
  //  User,
  Shield,
} from "lucide-react";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  //   SidebarProvider,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Home", url: "/", icon: Home },
  {
    title: "Password Strength Checker",
    url: "/demos/password-strength-checker",
    icon: Shield,
  },
  {
    title: "Password Cracking Simulation",
    url: "/demos/password-cracking-simulation",
    icon: Shield,
  },
  // Add other menu items as needed
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div className="p-4">
          <h1 className="text-xl font-bold">SOTA Lab</h1>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Interactive Demos</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="p-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} SOTA Lab</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
