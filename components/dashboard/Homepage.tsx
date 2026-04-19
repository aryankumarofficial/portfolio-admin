"use client"
import { Button } from "@/components/ui/button"
import { useAdminStore } from "@/store/adminStore"
import { useRouter } from "next/navigation"

export default function HomepageComponent() {
  const router = useRouter()
  const { logout, admin, isLoading } = useAdminStore()
  const handleLogout = async () => {
    await logout()
    router.refresh()
  }
  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="font-medium">Project ready!</h1>
          <p>You may now add components and start building.</p>
          <p>We&apos;ve already added the button component for you.</p>
          {admin && (
            <Button
              onClick={handleLogout}
              disabled={isLoading}
              className="mt-2"
            >
              Logout
            </Button>
          )}
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div>
      </div>
    </div>
  )
}
