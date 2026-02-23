"use client"

import * as React from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/ui/header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronDown } from "lucide-react"

/** Scrollable demo shell for the default (no-tabs) sticky variant */
function ScrollDemo({
  children,
  label,
}: {
  children: (ref: React.RefObject<HTMLDivElement>) => React.ReactNode
  label: string
}) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  return (
    <div className="space-y-2">
      <p className="label-sm text-muted-foreground">{label}</p>
      <div
        ref={containerRef}
        className="relative h-64 overflow-y-auto rounded-lg border border-border"
      >
        {children(containerRef as React.RefObject<HTMLDivElement>)}
        <div className="space-y-3 p-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="h-8 rounded bg-border-subtle" />
          ))}
        </div>
      </div>
      <p className="p-sm text-muted-foreground">↑ Scroll inside the box to see it condense</p>
    </div>
  )
}

/**
 * Tabs demo needs a different structure: <Tabs> must wrap the scroll container
 * (so Radix context is available to TabsList/TabsContent), but Header must be
 * a *direct* child of the overflow container so sticky positioning works.
 */
const TAB_ITEMS = [
  { value: "overview", label: "Overview" },
  { value: "items",    label: "Items" },
  { value: "history",  label: "History" },
  { value: "notes",    label: "Notes" },
]

function TabsScrollDemo({ label }: { label: string }) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = React.useState("overview")

  return (
    <div className="space-y-2">
      <p className="label-sm text-muted-foreground">{label}</p>

      {/* Mobile select fallback (matches tabs gallery pattern) */}
      <div className="sm:hidden relative">
        <select
          value={activeTab}
          onChange={(e) => setActiveTab(e.target.value)}
          className="w-full appearance-none rounded-md border border-input bg-card px-3 py-2 pr-8 label-md"
        >
          {TAB_ITEMS.map((t) => (
            <option key={t.value} value={t.value}>{t.label}</option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-2 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
      </div>

      {/* Tabs demo — variant set on <Tabs> root, inherited by TabsList/TabsTrigger */}
      <div className="hidden sm:block">
        <Tabs variant="line" value={activeTab} onValueChange={setActiveTab}>
          <div
            ref={containerRef}
            className="relative h-64 overflow-y-auto rounded-lg border border-border"
          >
            <Header
              variant="sticky"
              title="ORD-0123"
              badge={<Badge variant="destructive">Cancelled</Badge>}
              metadata="Month DD, YYYY, 00:00 AM ET"
              rightMetadata="$1,234"
              actions={
                <Button variant="outline" size="md">
                  Actions
                </Button>
              }
              tabs={
                <TabsList className="w-full justify-start px-6">
                  {TAB_ITEMS.map((t) => (
                    <TabsTrigger key={t.value} value={t.value}>{t.label}</TabsTrigger>
                  ))}
                </TabsList>
              }
              scrollContainerRef={containerRef}
            />
            {TAB_ITEMS.map((t) => (
              <TabsContent key={t.value} value={t.value}>
                {t.value === "overview" ? (
                  <div className="space-y-3 p-6">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div key={i} className="h-8 rounded bg-border-subtle" />
                    ))}
                  </div>
                ) : (
                  <div className="p-6 p-sm text-muted-foreground">No {t.label.toLowerCase()}</div>
                )}
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>

      <p className="p-sm text-muted-foreground">↑ Scroll inside the box to see it condense</p>
    </div>
  )
}

export default function HeaderGalleryPage() {
  return (
    <div className="space-y-16 pb-16">
      <div>
        <h2 className="h2 mb-1">Header</h2>
        <p className="p text-muted-foreground">
          Page-level header with two variants: sticky (condenses on scroll) and fixed (static, no
          background).
        </p>
      </div>

      {/* ── STICKY ───────────────────────────────────────────────────── */}
      <section className="space-y-8">
        <h3 className="h3">Sticky</h3>

        <ScrollDemo label="Default">
          {(ref) => (
            <Header
              variant="sticky"
              title="ORD-0123"
              badge={<Badge variant="destructive">Cancelled</Badge>}
              metadata="Month DD, YYYY, 00:00 AM ET"
              rightMetadata="$1,234"
              actions={
                <Button variant="outline" size="md">
                  Actions
                </Button>
              }
              scrollContainerRef={ref}
            />
          )}
        </ScrollDemo>

        <TabsScrollDemo label="With tabs" />
      </section>

      {/* ── FIXED ────────────────────────────────────────────────────── */}
      <section className="space-y-4">
        <h3 className="h3">Fixed</h3>
        <div className="rounded-lg border border-border">
          <Header
            variant="fixed"
            title="Settings"
            badge={<Badge variant="destructive">badge</Badge>}
            actions={
              <>
                <Button variant="outline" size="md">
                  Button text
                </Button>
                <Button variant="primary" size="md">
                  Button text
                </Button>
              </>
            }
          />
        </div>
      </section>
    </div>
  )
}
