import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-6 text-center">
      <div className="space-y-2">
        <h1 className="font-serif text-9xl font-bold text-primary/20">404</h1>
        <p className="font-serif text-xl text-foreground">Page not found</p>
        <p className="text-sm text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
      </div>
      <Link href="/">
        <Button variant="default">Go Home</Button>
      </Link>
    </div>
  )
}
