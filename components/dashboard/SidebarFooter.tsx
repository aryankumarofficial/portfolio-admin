"use client"

import { Button } from "@/components/ui/button"
import {
  SidebarFooter as UISidebarFooter,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { LogOut, ExternalLink } from "lucide-react"
import { useAdminStore } from "@/store/adminStore"
import { useRouter } from "next/navigation"

export function SidebarFooterComponent() {
  const router = useRouter()
  const { logout, admin, isLoading } = useAdminStore()

  const handleLogout = async () => {
    await logout()
    router.refresh()
  }

  return (
    <UISidebarFooter>
      <SidebarSeparator />
      <div className="flex flex-col gap-2 px-2 py-2">
        <Button
          variant="default"
          size="sm"
          className="w-full cursor-pointer justify-start gap-2 [&_svg]:shrink-0"
          asChild
        >
          <a
            href="https://aryankumarofficial.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="relative h-4 w-4 group-data-[collapsible=icon]:right-1.5 group-data-[collapsible=icon]:h-3.5 group-data-[collapsible=icon]:w-3.5" />
            <span className="group-data-[collapsible=icon]:hidden">
              View Site
            </span>
          </a>
        </Button>
        {admin && (
          <Button
            variant="destructive"
            size="sm"
            className="w-full cursor-pointer justify-start gap-2 [&_svg]:shrink-0"
            onClick={handleLogout}
            disabled={isLoading}
          >
            <LogOut className="relative h-4 w-4 group-data-[collapsible=icon]:right-1.5 group-data-[collapsible=icon]:h-3.5 group-data-[collapsible=icon]:w-3.5" />
            <span className="group-data-[collapsible=icon]:hidden">Logout</span>
          </Button>
        )}
      </div>
    </UISidebarFooter>
  )
}
