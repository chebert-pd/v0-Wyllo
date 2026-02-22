"use client"

import * as React from "react"
import { useState } from "react"

import { cn } from "@/lib/utils"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { StatCard } from "@/components/ui/stats"

export type MetricItem = {
  key: string

  /** StatCard large variant inputs */
  label: string
  value: string
  icon?: React.ReactNode
  description?: string
  secondary?: React.ReactNode

  /** The expanded content (chart, table, etc.) */
  content: React.ReactNode
}

export type MetricPanelProps = {
  title?: string
  subtitle?: string
  items: MetricItem[]

  /** Closed by default if omitted. Provide a key to open a metric by default. */
  defaultOpenKey?: string

  className?: string
}

export function MetricPanel({
  title,
  subtitle,
  items,
  defaultOpenKey,
  className,
}: MetricPanelProps) {
  // Closed by default unless a defaultOpenKey is provided.
  const [active, setActive] = useState<string | null>(defaultOpenKey ?? null)

  return (
    <Card level={1} className={cn("animate-in fade-in duration-500", className)}>
      <CardContent className="p-0">
        {/* Header */}
        {(title || subtitle) && (
          <div className="space-y-2 border-b border-border-subtle px-8 py-6">
            {title && <div className="label-lg">{title}</div>}
            {subtitle && <p className="p text-muted-foreground">{subtitle}</p>}
          </div>
        )}

        <Tabs
          // Radix Tabs expects undefined for uncontrolled/none.
          value={active ?? undefined}
          onValueChange={(v) => setActive(v || null)}
          className="w-full"
        >
          {/*
            Triggers: keep them in a single row on md+ with vertical separators.
            On small screens, stack them with horizontal separators.
          */}
          <TabsList
            className={cn(
              // Override shadcn TabsList defaults (it ships with fixed height/padding)
              "w-full bg-transparent p-0",
              "h-auto",
              "items-stretch",
              "flex flex-col md:flex-row",
              "divide-y divide-border-subtle md:divide-y-0 md:divide-x"
            )}
          >
            {items.map((item) => (
              <TabsTrigger
                key={item.key}
                value={item.key}
                className={cn(
                  // Override shadcn TabsTrigger defaults (fixed height + padding)
                  "w-full rounded-none p-0 text-left",
                  "h-auto",
                  "items-stretch",
                  "justify-stretch",
                  "transition-colors",
                  "data-[state=active]:bg-secondary",
                  "hover:bg-secondary/40",
                  "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                )}
              >
                {/*
                  Reuse the existing StatCard (large variant) layout.
                  We intentionally remove its own chrome (border/bg/radius/shadow)
                  so the MetricPanel owns the segmented layout and separators.
                */}
                <StatCard
                  surfaceLevel={1}
                  variant="large"
                  size="lg"
                  valueSize="lg"
                  label={item.label}
                  value={item.value}
                  icon={item.icon}
                  description={item.description}
                  secondary={item.secondary}
                  className={cn(
                    // Let the tabs segment own chrome.
                    "border-0 rounded-none bg-transparent shadow-none",
                    // Make the trigger feel like a tappable surface.
                    "w-full h-full"
                  )}
                />
              </TabsTrigger>
            ))}
          </TabsList>

          {items.map((item) => (
            <TabsContent
              key={item.key}
              value={item.key}
              className={cn(
                "border-t border-border-subtle",
                "px-8 pt-6 pb-8",
                "animate-in fade-in slide-in-from-top-2 duration-500"
              )}
            >
              {item.content}
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}