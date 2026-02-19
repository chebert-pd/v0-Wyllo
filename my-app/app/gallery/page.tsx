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
        "Buttons, Badge, Alert, Card — core reusable UI building blocks.",
      href: "/gallery/core",
    },
    {
      title: "Tables & Lists",
      description:
        "Data tables, sorting, pagination, row selection, and structured layouts.",
      href: "/gallery/tables",
    },
    {
      title: "Forms",
      description:
        "Field system, inputs, toggles, comboboxes, and the Create Merchant Workspace example.",
      href: "/gallery/forms",
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