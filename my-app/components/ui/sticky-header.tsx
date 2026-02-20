import * as React from "react"

import { cn } from "@/lib/utils"

interface StickyHeaderProps {
  title: string
  actions?: React.ReactNode
  className?: string
}

function StickyHeader({ title, actions, className }: StickyHeaderProps) {
  return (
    <div
      className={cn(
        "sticky top-0 z-10 flex w-full items-start gap-4 border-b border-border-subtle bg-card px-6 py-4",
        className
      )}
    >
      <h1 className="h1 min-w-0 flex-1">{title}</h1>
      {actions && (
        <div className="flex shrink-0 items-center gap-3">{actions}</div>
      )}
    </div>
  )
}

export { StickyHeader }
