export default function Loading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="size-8 animate-spin rounded-full border-2 border-primary/20 border-t-primary" />
        <p className="text-sm text-muted-foreground font-serif">Loading...</p>
      </div>
    </div>
  )
}