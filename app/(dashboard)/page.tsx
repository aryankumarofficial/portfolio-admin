import type { Metadata } from "next"
import HomepageComponent from "@/components/Homepage"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Dashboard",
}

export default function Homepage() {
  return (
    <Suspense
      fallback={
        <>
          <h1>Loading...</h1>
        </>
      }
    >
      <HomepageComponent />
    </Suspense>
  )
}
