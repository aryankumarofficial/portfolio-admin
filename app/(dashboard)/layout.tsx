import { AppSidebar } from "@/components/dashboard/app-sidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { TooltipProvider } from "@/components/ui/tooltip"
import React from "react"

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <React.Fragment>
      <TooltipProvider>
        <SidebarProvider>
          <AppSidebar />
          <main className="container p-2">
            <SidebarTrigger />
            {children}
          </main>
        </SidebarProvider>
      </TooltipProvider>
    </React.Fragment>
  )
}
