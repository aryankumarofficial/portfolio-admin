import { Message } from "@/types"
import axios, { AxiosError } from "axios"

const API_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL

if (!API_URL) {
  throw new Error(`API URL Not Set.\nAPI_URL: ${API_URL}`)
}

export const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
})

api.interceptors.response.use(
  (res) => res,
  (error: AxiosError<{ error: string }>) => {
    const message =
      error?.response?.data?.error ?? error?.message ?? "Something went wrong"
    return Promise.reject(new Error(message))
  }
)

export async function getMessages(): Promise<Message[]> {
  const res = await api.get("/messages")
  return res.data
}

export async function login(email: string, password: string) {
  await api.post("/auth/login", { email, password })
}
export async function logout() {
  await api.post("/auth/logout")
}

export async function markAsRead(id: string) {
  await api.patch(`/messages/${id}`)
}
