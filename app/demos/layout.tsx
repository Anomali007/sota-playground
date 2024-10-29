// app/demos/layout.tsx
import type { Metadata } from "next";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export const metadata: Metadata = {
  title: "The SOTA Lab Cybersecurity Training",
  description: "Interactive cybersecurity demos and training",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="ml-[calc(var(--sidebar-width)/2)]">
        <SidebarTrigger />
        {children}
      </div>
    </SidebarProvider>
  );
}
