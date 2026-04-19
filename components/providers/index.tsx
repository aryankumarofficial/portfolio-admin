import React from "react"
import ThemeAwareToaster from "./ThemeAwareToaster"
import { ThemeProvider } from "../theme-provider"

interface RootProvidersProps {
  children: React.ReactNode
}

export default function RootProviders({ children }: RootProvidersProps) {
  return (
    <React.Fragment>
      <ThemeProvider>
        <ThemeAwareToaster />
        {children}
      </ThemeProvider>
    </React.Fragment>
  )
}
