"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

function GlassFrame({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="glass-frame"
      className={cn(
        "fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 p-[4px] rounded-[calc(var(--radius)+4px)] bg-background/25 dark:bg-background/20 backdrop-blur-sm border border-white/40 dark:border-white/20 shadow-2xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export { GlassFrame }