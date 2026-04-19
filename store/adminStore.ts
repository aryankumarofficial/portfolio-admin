import { login, logout } from "@/lib/api"
import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"
import Cookies from "js-cookie"

type Admin = {
  email: string
}
interface AdminStore {
  admin: Admin | null
  isLoading: boolean
  error: string | null
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  clearError: () => void
}

export const useAdminStore = create<AdminStore>()(
  persist(
    devtools(
      (set, get) => ({
        admin: null,
        error: null,
        isLoading: false,
        clearError: () => set({ error: null }),
        login: async (email: string, password: string) => {
          set({ isLoading: true })
          get().clearError()
          try {
            await login(email, password)
            Cookies.set("isLoggedIn", "true", {
              expires: 1,
              sameSite: "Lax",
            })
            set({ admin: { email } })
          } catch (error) {
            set({ error: (error as Error).message })
            throw new Error(get().error || "Something went wrong"!)
          } finally {
            set({ isLoading: false })
          }
        },
        logout: async () => {
          set({ isLoading: true })
          get().clearError()
          try {
            await logout()
          } finally {
            Cookies.remove("isLoggedIn")
            set({ admin: null, isLoading: false })
          }
        },
      }),
      {
        name: "admin-store",
        enabled: process.env.NODE_ENV !== "production",
      }
    ),
    {
      name: "admin-store",
      partialize: (state) => ({ admin: state.admin }),
    }
  )
)
