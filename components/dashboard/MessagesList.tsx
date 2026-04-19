"use client"

import { MessageCard } from "./MessageCard"
import { getMessages, markAsRead } from "@/lib/api"
import { Message } from "@/types"
import { InboxIcon } from "lucide-react"
import { useEffect, useState } from "react"

export function MessagesList() {
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getMessages()
      .then(setMessages)
      .finally(() => setIsLoading(false))
  }, [])

  const handleMarkAsRead = async (id: string) => {
    await markAsRead(id)
    setMessages((prev: Message[]) =>
      prev.map((msg: Message) => (msg.id === id ? { ...msg, isRead: true } : msg))
    )
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    )
  }

  if (messages.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 p-8 text-center text-muted-foreground">
        <InboxIcon className="h-8 w-8" />
        <p>No messages yet</p>
      </div>
    )
  }

  return (
    <div className="grid gap-4">
      {messages.map((message: Message) => (
        <div
          key={message.id}
          onClick={() => !message.isRead && handleMarkAsRead(message.id)}
        >
          <MessageCard message={message} />
        </div>
      ))}
    </div>
  )
}