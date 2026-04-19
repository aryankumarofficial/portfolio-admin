import { Message } from "@/types"
import axios from "axios"

const API_URL = process.env.BACKEND_API_URL

export const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
})

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
