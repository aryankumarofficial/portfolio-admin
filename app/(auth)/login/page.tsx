import type { Metadata } from "next"
import LoginComponent from "@/components/LoginComponent"

export const metadata: Metadata = {
  title: "Login",
}

export default function LoginPage() {
  return <LoginComponent />
}
