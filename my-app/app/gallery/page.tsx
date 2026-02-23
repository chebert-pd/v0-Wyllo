"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Sun, Moon } from "lucide-react"
import { useEffect, useState } from "react"

export default function GalleryHome() {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    const root = document.documentElement
    if (theme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }, [theme])

  const sections = [
    {
      title: "Foundations",
      description:
        "Type scale, color primitives, semantic tokens, elevation, and surface logic.",
      href: "/gallery/foundations",
    },
    {
      title: "Design System Logic",
      description:
        "Explains surface alternation, border rules, elevation patterns, and structural decisions.",
      href: "/gallery/logic",
    },
    {
      title: "Core",
      description:
        "Core primitives and structural components.",
      href: "/gallery/core",
    },
    {
      title: "Buttons",
      description:
        "Primary, outline, ghost, destructive, and link button variants.",
      href: "/gallery/buttons",
    },
    {
      title: "Badges",
      description:
        "Semantic status indicators, metadata labels, and composed badge patterns.",
      href: "/gallery/badge",
    },
    {
      title: "Forms",
      description:
        "Field system, inputs, toggles, comboboxes, and multi-step form patterns.",
      href: "/gallery/forms",
    },
    {
      title: "Tables",
      description:
        "Basic tables, structured layouts, and static data presentation.",
      href: "/gallery/tables",
    },
    {
      title: "Data Table",
      description:
        "Advanced data table with sorting, pagination, filters, and expandable rows.",
      href: "/gallery/data-table",
    },
    {
      title: "Tabs",
      description:
        "Line and pill variants, vertical tabs, and responsive behavior.",
      href: "/gallery/tabs",
    },
    {
      title: "Accordions",
      description:
        "Collapsible content sections for progressive disclosure.",
      href: "/gallery/accordions",
    },
    {
      title: "Command Palette",
      description:
        "Keyboard-driven command interface and search patterns.",
      href: "/gallery/command-palette",
    },
    {
      title: "Sidebar",
      description:
        "Responsive navigation patterns and layout structures.",
      href: "/gallery/sidebar",
    },
    {
      title: "Stats",
      description:
        "Metric display components with trends, badges, and action footers.",
      href: "/gallery/stats",
    },
    {
      title: "Overlay Background",
      description:
        "Backdrop treatments, blur layers, and glass-frame patterns.",
      href: "/gallery/overlays/background",
    },
    {
      title: "Dialog",
      description:
        "Modal dialogs with structured header, body, and footer patterns.",
      href: "/gallery/overlays/dialog",
    },
    {
      title: "Sheet",
      description:
        "Slide-over panels and contextual side drawers.",
      href: "/gallery/overlays/sheet",
    },
  ]

  return (
    <div className="mx-auto max-w-7xl p-10 space-y-12">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="h1">Component Gallery</h1>

        <div className="flex gap-2">
          <Button
            variant={theme === "light" ? "primary" : "outline"}
            size="sm"
            onClick={() => setTheme("light")}
          >
            <Sun className="h-4 w-4 mr-2" />
            Light
          </Button>

          <Button
            variant={theme === "dark" ? "primary" : "outline"}
            size="sm"
            onClick={() => setTheme("dark")}
          >
            <Moon className="h-4 w-4 mr-2" />
            Dark
          </Button>
        </div>
      </div>

      {/* Section Navigation */}
      <div className="grid gap-6 md:grid-cols-2">
        {sections.map((section) => (
          <Link key={section.href} href={section.href}>
            <Card level={1} className="hover:shadow-[var(--elevation-floating)] transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle>{section.title}</CardTitle>
                <CardDescription>{section.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="p text-muted-foreground">
                  View section →
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}