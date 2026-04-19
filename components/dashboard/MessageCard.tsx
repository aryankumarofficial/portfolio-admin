"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Message } from "@/types"
import { Mail, User } from "lucide-react"

interface MessageCardProps {
  message: Message
}

export function MessageCard({ message }: MessageCardProps) {
  console.log("message: ", message)
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  return (
    <Card className="transition-colors hover:bg-muted/50">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-base">
            <User className="h-4 w-4 text-muted-foreground" />
            {message.name}
          </CardTitle>
          {!message.isRead && <Badge variant="secondary">New</Badge>}
        </div>
      </CardHeader>
      <CardContent className="grid gap-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Mail className="h-4 w-4" />
          <a href={`mailto:${message.email}`} className="hover:underline">
            {message.email}
          </a>
        </div>
        <p className="text-sm">{message.message}</p>
        <span className="text-xs text-muted-foreground">
          {formatDate(message.createdAt)}
        </span>
      </CardContent>
    </Card>
  )
}
