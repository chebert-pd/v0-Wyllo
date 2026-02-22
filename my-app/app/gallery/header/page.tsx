"use client"

import * as React from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/ui/header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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
function TabsScrollDemo({ label }: { label: string }) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  return (
    <div className="space-y-2">
      <p className="label-sm text-muted-foreground">{label}</p>
      <Tabs defaultValue="overview">
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
              <TabsList variant="line" className="w-full justify-start px-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="items">Items</TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
                <TabsTrigger value="notes">Notes</TabsTrigger>
              </TabsList>
            }
            scrollContainerRef={containerRef}
          />
          <TabsContent value="overview">
            <div className="space-y-3 p-6">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="h-8 rounded bg-border-subtle" />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="items">
            <div className="p-6 p-sm text-muted-foreground">No items</div>
          </TabsContent>
          <TabsContent value="history">
            <div className="p-6 p-sm text-muted-foreground">No history</div>
          </TabsContent>
          <TabsContent value="notes">
            <div className="p-6 p-sm text-muted-foreground">No notes</div>
          </TabsContent>
        </div>
      </Tabs>
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
