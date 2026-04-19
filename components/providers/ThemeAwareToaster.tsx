"use client"
import React from "react"
import { Toaster } from "../ui/sonner"
import { useTheme } from "next-themes"
import { ToasterProps } from "sonner"

export default function ThemeAwareToaster() {
  const { resolvedTheme } = useTheme()

  return (
    <Toaster
      position="top-right"
      richColors
      closeButton
      duration={3000}
      theme={resolvedTheme as ToasterProps["theme"]}
    />
  )
}
