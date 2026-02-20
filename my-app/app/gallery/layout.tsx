"use client"

import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const stored = localStorage.getItem("theme") as "light" | "dark" | null
    if (stored) {
      setTheme(stored)
      return
    }

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    setTheme(prefersDark ? "dark" : "light")
  }, [])

  // Sync theme to <html> + persist
  useEffect(() => {
    const root = document.documentElement

    if (theme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }

    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <div className="min-h-screen flex bg-background text-foreground">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-card sticky top-0 h-screen flex flex-col p-6">
        <div className="space-y-6">
          <div className="h3">Design System</div>

          <nav className="space-y-2 p-sm">
            <a href="/gallery/foundations" className="block hover:text-primary">
              Foundations
            </a>
            <a href="/gallery/logic" className="block hover:text-primary">
              Logic
            </a>
            <a href="/gallery/core" className="block hover:text-primary">
              Core
            </a>
            <a href="/gallery/buttons" className="block hover:text-primary">
              Buttons
            </a>
            <a href="/gallery/forms" className="block hover:text-primary">
              Forms
            </a>
            <a href="/gallery/tables" className="block hover:text-primary">
              Tables
            </a>
            <a href="/gallery/data-table" className="block hover:text-primary">
              Data Table
            </a>
            <a href="/gallery/tabs" className="block hover:text-primary">
              Tabs
            </a>
            <a href="/gallery/accordions" className="block hover:text-primary">
              Accordions
            </a>
            <a href="/gallery/command-palette" className="block hover:text-primary">
              Command Palette
            </a>
            <a href="/gallery/sidebar" className="block hover:text-primary">
              Sidebar
            </a>
            <a href="/gallery/sticky-header" className="block hover:text-primary">
              Sticky Header
            </a>
            <a href="/gallery/stats" className="block hover:text-primary">
              Stats
            </a>
            <a href="/gallery/overlays/background" className="block hover:text-primary">
              Overlay Background
            </a>
            <a href="/gallery/overlays/dialog" className="block hover:text-primary">
              Dialog
            </a>
            <a href="/gallery/overlays/sheet" className="block hover:text-primary">
              Sheet
            </a>
          </nav>

          {/* Theme toggle */}
          <ToggleGroup
            variant="outline"
            type="single"
            value={theme}
            onValueChange={(value) => {
              if (!value) return
              setTheme(value as "light" | "dark")
            }}
            className="inline-flex"
          >
            <ToggleGroupItem value="light" className="gap-2">
              <Sun size={16} />
              Light
            </ToggleGroupItem>
            <ToggleGroupItem value="dark" className="gap-2">
              <Moon size={16} />
              Dark
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-10 overflow-y-auto">
        {children}
      </main>
    </div>
  )
}