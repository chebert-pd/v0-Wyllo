"use client"

import * as React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StatCard } from "@/components/ui/stats"

interface MetricPanelItem {
  key: string
  label: string
  value: string
  icon?: React.ReactNode
  helper?: React.ReactNode
  content?: React.ReactNode
}

interface MetricPanelProps {
  title?: string
  subtitle?: string
  defaultOpenKey?: string
  items: MetricPanelItem[]
}

export function MetricPanel({ title, subtitle, defaultOpenKey, items }: MetricPanelProps) {
  const [openKey, setOpenKey] = React.useState(defaultOpenKey || items[0]?.key)

  return (
    <div className="space-y-6">
      {(title || subtitle) && (
        <div className="space-y-1">
          {title && <h2 className="h2">{title}</h2>}
          {subtitle && <p className="p text-muted-foreground">{subtitle}</p>}
        </div>
      )}

      <Tabs value={openKey} onValueChange={setOpenKey} className="space-y-4">
        <TabsList>
          {items.map((item) => (
            <TabsTrigger
              key={item.key}
              value={item.key}
              className="p-0 bg-transparent data-[state=active]:bg-transparent"
            >
              <StatCard
                variant="large"
                size="lg"
                valueSize="lg"
                surfaceLevel={1}
                label={item.label}
                value={item.value}
                icon={item.icon}
                secondary={item.helper}
                className="border-0 shadow-none"
              />
            </TabsTrigger>
          ))}
        </TabsList>

        {items.map((item) => (
          <TabsContent key={item.key} value={item.key} className="space-y-4">
            {item.content}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
