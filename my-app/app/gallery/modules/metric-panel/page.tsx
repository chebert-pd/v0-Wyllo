"use client"

import { MetricPanel } from "@/components/ui/metric-panel"
import { BarChart3, Laptop, Smartphone } from "lucide-react"

export default function MetricPanelPage() {
  return (
    <div className="space-y-10">

      {/* Page Header */}
      <div className="space-y-2">
        <h1 className="h1">Metric Panel</h1>
        <p className="p text-muted-foreground">
          A composed dashboard module combining large stat blocks with expandable analytics content.
        </p>
      </div>

      {/* Example 1 — With Header */}
      <MetricPanel
        title="Bar Chart – Interactive"
        subtitle="Showing total visitors for the last 3 months"
        defaultOpenKey="desktop"
        items={[
          {
            key: "desktop",
            label: "Desktop",
            value: "7,324",
            icon: <Laptop className="size-5" />,
            helper: "Web",
            content: (
              <div className="space-y-6">
                <div className="h-48 rounded-md bg-secondary flex items-center justify-center text-muted-foreground">
                  Chart placeholder
                </div>
                <p className="p text-muted-foreground">
                  This expanded section can contain charts, tables, filters, or deeper analysis related to the metrics above.
                </p>
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
              <div className="space-y-6">
                <div className="h-48 rounded-md bg-secondary flex items-center justify-center text-muted-foreground">
                  Chart placeholder
                </div>
                <p className="p text-muted-foreground">
                  Mobile traffic trends and device breakdowns.
                </p>
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
              <div className="space-y-6">
                <div className="h-48 rounded-md bg-secondary flex items-center justify-center text-muted-foreground">
                  Chart placeholder
                </div>
                <p className="p text-muted-foreground">
                  Aggregate view across all platforms.
                </p>
              </div>
            ),
          },
        ]}
      />

      {/* Example 2 — Without Header */}
      <MetricPanel
        items={[
          {
            key: "approval",
            label: "Approval Rate",
            value: "92.4%",
            content: (
              <div className="space-y-6">
                <div className="h-48 rounded-md bg-secondary flex items-center justify-center text-muted-foreground">
                  Approval Rate analytics placeholder
                </div>
                <p className="p text-muted-foreground">
                  Detailed approval rate metrics and trends.
                </p>
              </div>
            ),
          },
          {
            key: "fraud",
            label: "Fraud Prevented",
            value: "$124,320",
            content: (
              <div className="space-y-6">
                <div className="h-48 rounded-md bg-secondary flex items-center justify-center text-muted-foreground">
                  Fraud prevention analytics placeholder
                </div>
                <p className="p text-muted-foreground">
                  Insights into fraud prevention efforts.
                </p>
              </div>
            ),
          },
          {
            key: "roi",
            label: "Customer ROI",
            value: "4.2x",
            content: (
              <div className="space-y-6">
                <div className="h-48 rounded-md bg-secondary flex items-center justify-center text-muted-foreground">
                  Customer ROI analytics placeholder
                </div>
                <p className="p text-muted-foreground">
                  Return on investment details per customer.
                </p>
              </div>
            ),
          },
        ]}
      />

    </div>
  )
}
