"use client"

import {
  Sidebar,
  SidebarContent,
} from "@/components/ui/sidebar"
import { SidebarHeaderComponent } from "./SidebarHeader"
import { SidebarNavComponent } from "./SidebarNav"
import { SidebarFooterComponent } from "./SidebarFooter"

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeaderComponent />
      <SidebarContent>
        <SidebarNavComponent />
      </SidebarContent>
      <SidebarFooterComponent />
    </Sidebar>
  )
}
