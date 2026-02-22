"use client"
import React, { useState } from "react"
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

interface MetricItem {
  key: string
  label: React.ReactNode
  value: React.ReactNode
  icon?: React.ReactNode
  helper?: React.ReactNode
  content: React.ReactNode
}

interface MetricPanelProps {
  title?: string
  subtitle?: string
  items: MetricItem[]
}

export function MetricPanel({
  title,
  subtitle,
  items,
}: MetricPanelProps) {
  const [active, setActive] = useState<string | null>(null)

  return (
    <Card level={1} className="animate-in fade-in duration-500">
      <CardContent className="p-0">

        {/* Header */}
        {(title || subtitle) && (
          <div className="px-8 py-6 border-b border-border-subtle space-y-2">
            {title && <div className="label-lg">{title}</div>}
            {subtitle && (
              <p className="p text-muted-foreground">{subtitle}</p>
            )}
          </div>
        )}

        {/* Metric Tabs */}
        <Tabs value={active ?? undefined} onValueChange={setActive} className="w-full">
          <TabsList
            className="
              w-full
              p-0
              bg-transparent
              md:grid md:grid-cols-3
              divide-y md:divide-y-0
              md:divide-x
              divide-border-subtle
            "
          >
            {items.map((item) => (
              <TabsTrigger
                key={item.key}
                value={item.key}
                className="
                  w-full
                  px-8 py-8
                  text-left
                  data-[state=active]:bg-secondary/40
                  transition-all duration-300
                "
              >
                <div className="space-y-2">
                  <div className="label-md text-muted-foreground flex items-center gap-2">
                    {item.icon}
                    {item.label}
                  </div>
                  <div className="data-lg">{item.value}</div>
                  {item.helper && (
                    <div className="label-sm text-muted-foreground">
                      {item.helper}
                    </div>
                  )}
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {items.map((item) => (
            <TabsContent
              key={item.key}
              value={item.key}
              className="
                border-t border-border-subtle
                px-8 pt-6 pb-8
                animate-in fade-in slide-in-from-top-2 duration-500
              "
            >
              {item.content}
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}