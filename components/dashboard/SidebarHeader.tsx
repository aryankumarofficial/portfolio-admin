"use client"

import { SidebarHeader as UISidebarHeader } from "@/components/ui/sidebar"
import { Briefcase } from "lucide-react"

export function SidebarHeaderComponent() {
  return (
    <UISidebarHeader className="flex items-center gap-2 px-4 py-3">
      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
        <Briefcase className="h-4 w-4 text-primary-foreground" />
      </div>
      <span className="font-semibold text-sm group-data-[collapsible=icon]:hidden">Portfolio Admin</span>
    </UISidebarHeader>
  )
}
