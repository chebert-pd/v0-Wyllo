"use client"

import * as React from "react"
import { BarChart3, Laptop, Smartphone } from "lucide-react"

import { MetricPanel } from "@/components/ui/metric-panel"

export default function MetricPanelPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h1 className="h1">Metric Panel</h1>
        <p className="p text-muted-foreground">
          Large stat tabs that expand to reveal detailed analytics.
        </p>
      </div>

      <MetricPanel
        title="Traffic by platform"
        subtitle="Select a platform to view the breakdown."
        defaultOpenKey={undefined}
        items={[
          {
            key: "desktop",
            label: "Desktop",
            value: "7,324",
            icon: <Laptop className="size-5" />,
            helper: "Web",
            content: (
              <div className="rounded-[var(--radius)] border border-border bg-card p-6">
                <p className="p text-muted-foreground">Chart placeholder (Desktop)</p>
              </div>
            ),
          },
          {
            key: "mobile",
            label: "Mobile",
            value: "7,250",
            icon: <Smartphone className="size-5" />,
            helper: "iOS + Android",
            content: (
              <div className="rounded-[var(--radius)] border border-border bg-card p-6">
                <p className="p text-muted-foreground">Chart placeholder (Mobile)</p>
              </div>
            ),
          },
          {
            key: "total",
            label: "Total",
            value: "14,574",
            icon: <BarChart3 className="size-5" />,
            helper: "All platforms",
            content: (
              <div className="rounded-[var(--radius)] border border-border bg-card p-6">
                <p className="p text-muted-foreground">Chart placeholder (Total)</p>
              </div>
            ),
          },
        ]}
      />
    </div>
  )
}
