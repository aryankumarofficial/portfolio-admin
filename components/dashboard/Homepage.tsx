"use client"

import { MessagesList } from "./MessagesList"

export default function HomepageComponent() {
  return (
    <div className="flex min-h-svh flex-col gap-6 p-6">
      <div>
        <h1 className="font-serif text-2xl font-semibold">Messages</h1>
        <p className="text-sm text-muted-foreground">
          View messages from your portfolio
        </p>
      </div>
      <MessagesList />
    </div>
  )
}
