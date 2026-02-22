"use client"

import {
  ShoppingBag,
  ClipboardClock,
  CircleCheck,
  DollarSign,
} from "lucide-react"

import { StatCard, StatsGrid } from "@/components/ui/stats"

export default function StatsPage() {
  return (
    <div className="space-y-10">
      <h1 className="h1">Stats</h1>

      {/* -------------------------------- */}
      {/* Row of 3 — Level 0 */}
      {/* -------------------------------- */}
      <section className="space-y-4">
        <h2 className="h2">Level 0 — 3 Across</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <StatCard
            surfaceLevel={0}
            icon={<ShoppingBag className="size-5" />}
            label="Total Orders"
            value="12,482"
            valueSize="md"
          />

          <StatCard
            surfaceLevel={0}
            icon={<ClipboardClock className="size-5" />}
            label="Orders in Review"
            value="184"
            valueSize="md"
          />

          <StatCard
            surfaceLevel={0}
            icon={<CircleCheck className="size-5" />}
            label="Pass Rate"
            value="96.8%"
            valueSize="md"
          />
        </div>
      </section>

      {/* -------------------------------- */}
      {/* Row of 4 — With Badges + Comparison */}
      {/* -------------------------------- */}
      <section className="space-y-4">
        <h2 className="h2">Level 0 — With Comparison</h2>
        <StatsGrid surfaceLevel={0}>
          <StatCard
            label="Approval Rate"
            value="97.2%"
            valueSize="lg"
            trend={{ direction: "up", value: "+1.4%" }}
            comparison="vs last period"
          />

          <StatCard
            label="Revenue Passed"
            value="$482,320"
            valueSize="lg"
            trend={{ direction: "up", value: "+6.2%" }}
            comparison="vs last period"
          />

          <StatCard
            label="Fraud Prevented"
            value="$38,420"
            valueSize="lg"
            trend={{ direction: "up", value: "+4.8%" }}
            comparison="vs last period"
          />

          <StatCard
            label="Customer ROI"
            value="4.2x"
            valueSize="lg"
            trend={{ direction: "up", value: "+0.6x" }}
            comparison="vs last period"
          />
        </StatsGrid>
      </section>

      {/* -------------------------------- */}
      {/* Row of 4 — With Action */}
      {/* -------------------------------- */}
      <section className="space-y-4">
        <h2 className="h2">Level 0 — With Action</h2>
        <StatsGrid surfaceLevel={0}>
          <StatCard
            label="Approval Rate"
            value="97.2%"
            valueSize="lg"
            trend={{ direction: "up", value: "+1.4%" }}
            action={{ label: "Generate report" }}
          />

          <StatCard
            label="Revenue Passed"
            value="$482,320"
            valueSize="lg"
            trend={{ direction: "up", value: "+6.2%" }}
            action={{ label: "Generate report" }}
          />

          <StatCard
            label="Fraud Prevented"
            value="$38,420"
            valueSize="lg"
            trend={{ direction: "up", value: "+4.8%" }}
            action={{ label: "Generate report" }}
          />

          <StatCard
            label="Customer ROI"
            value="4.2x"
            valueSize="lg"
            trend={{ direction: "up", value: "+0.6x" }}
            action={{ label: "Generate report" }}
          />
        </StatsGrid>
      </section>

      {/* -------------------------------- */}
      {/* Row of 2 — Level 1 */}
      {/* -------------------------------- */}
      <section className="space-y-4">
        <h2 className="h2">Level 1 — Nested</h2>
        <div className="bg-card p-6 rounded-[var(--radius)] border border-border">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <StatCard
              surfaceLevel={1}
              icon={<ShoppingBag className="size-5" />}
              label="Orders"
              value="12,482"
              valueSize="sm"
            />

            <StatCard
              surfaceLevel={1}
              icon={<DollarSign className="size-5" />}
              label="Lifetime Spent"
              value="$1.2M"
              valueSize="sm"
            />
          </div>
        </div>
      </section>

      {/* -------------------------------- */}
      {/* Large Variant — Combinations */}
      {/* -------------------------------- */}
      <section className="space-y-6">
        <h2 className="h2">Level 0 — Large Variant Combinations</h2>

        {/* Row 1 — Minimal (Required Only) */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <StatCard
            variant="large"
            surfaceLevel={0}
            label="Total Orders"
            value="12,482"
            valueSize="lg"
          />

          <StatCard
            variant="large"
            surfaceLevel={0}
            label="Revenue Passed"
            value="$482,320"
            valueSize="lg"
          />

          <StatCard
            variant="large"
            surfaceLevel={0}
            label="Fraud Prevented"
            value="$38,420"
            valueSize="lg"
          />
        </div>

        {/* Row 2 — With Icon + Secondary */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <StatCard
            variant="large"
            surfaceLevel={0}
            icon={<ShoppingBag className="size-5" />}
            label="Total Orders"
            value="12,482"
            valueSize="lg"
            secondary="Includes approved and reviewed transactions"
          />

          <StatCard
            variant="large"
            surfaceLevel={0}
            icon={<ClipboardClock className="size-5" />}
            label="Orders in Review"
            value="184"
            valueSize="lg"
            secondary="Pending manual review"
          />

          <StatCard
            variant="large"
            surfaceLevel={0}
            icon={<CircleCheck className="size-5" />}
            label="Pass Rate"
            value="96.8%"
            valueSize="lg"
            secondary="Across all merchants"
          />
        </div>

        {/* Row 3 — With Action */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <StatCard
            variant="large"
            surfaceLevel={0}
            label="Approval Rate"
            value="97.2%"
            valueSize="lg"
            secondary="Compared to previous period"
            action={{ label: "View breakdown" }}
          />

          <StatCard
            variant="large"
            surfaceLevel={0}
            icon={<DollarSign className="size-5" />}
            label="Revenue Passed"
            value="$482,320"
            valueSize="lg"
            action={{ label: "Generate report" }}
          />

          <StatCard
            variant="large"
            surfaceLevel={0}
            label="Customer ROI"
            value="4.2x"
            valueSize="lg"
            secondary="Average return per merchant"
            action={{ label: "View details" }}
          />
        </div>
      </section>
    </div>
  )
}