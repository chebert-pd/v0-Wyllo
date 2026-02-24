"use client"

import { useEffect, useState } from "react"
import { Sun, Moon, Menu, X } from "lucide-react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [mobileOpen, setMobileOpen] = useState(false)

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
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-64 border-r border-border bg-card sticky top-0 h-screen flex-col p-6">
        <div className="space-y-6">
          <div className="h3">Design System</div>

          <nav className="space-y-2 p-sm">
            <div className="space-y-1">
              <div className="label-sm text-muted-foreground">Primitives</div>
              <a href="/gallery/foundations" className="block hover:text-primary">Foundations</a>
              <a href="/gallery/logic" className="block hover:text-primary">Logic</a>
            </div>

            <div className="pt-4 space-y-1">
              <div className="label-sm text-muted-foreground">Components</div>
              <a href="/gallery/core" className="block hover:text-primary">Core</a>
              <a href="/gallery/buttons" className="block hover:text-primary">Buttons</a>
              <a href="/gallery/badge" className="block hover:text-primary">Badges</a>
              <a href="/gallery/forms" className="block hover:text-primary">Forms</a>
              <a href="/gallery/tables" className="block hover:text-primary">Tables</a>
              <a href="/gallery/data-table" className="block hover:text-primary">Data Table</a>
              <a href="/gallery/tabs" className="block hover:text-primary">Tabs</a>
              <a href="/gallery/accordions" className="block hover:text-primary">Accordions</a>
              <a href="/gallery/command-palette" className="block hover:text-primary">Command Palette</a>
              <a href="/gallery/sidebar" className="block hover:text-primary">Sidebar</a>
              <a href="/gallery/header" className="block hover:text-primary">Header</a>
              <a href="/gallery/stats" className="block hover:text-primary">Stats</a>
              <a href="/gallery/overlays/background" className="block hover:text-primary">Overlay Background</a>
              <a href="/gallery/overlays/dialog" className="block hover:text-primary">Dialog</a>
              <a href="/gallery/overlays/sheet" className="block hover:text-primary">Sheet</a>
            </div>

            <div className="pt-4 space-y-1">
              <div className="label-sm text-muted-foreground">Composed Patterns</div>
              <a href="/gallery/modules/metric-panel" className="block hover:text-primary">Metric Panel</a>
              <a href="/gallery/empty-state" className="block hover:text-primary">Empty State</a>
            </div>
          </nav>

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
              <Sun size={16} /> Light
            </ToggleGroupItem>
            <ToggleGroupItem value="dark" className="gap-2">
              <Moon size={16} /> Dark
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </aside>

      {/* Mobile Sidebar Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-overlay backdrop-blur-overlay"
            onClick={() => setMobileOpen(false)}
          />

          {/* drawer */}
          <aside className="absolute left-0 top-0 h-full w-64 bg-card border-r border-border p-6 shadow-[var(--elevation-overlay)]">
            <div className="flex items-center justify-between mb-6">
              <div className="h3">Design System</div>
              <button onClick={() => setMobileOpen(false)}>
                <X size={20} />
              </button>
            </div>

            <nav className="space-y-2 p-sm">
              <div className="space-y-1">
                <div className="label-sm text-muted-foreground">Primitives</div>
                <a href="/gallery/foundations" className="block" onClick={() => setMobileOpen(false)}>Foundations</a>
                <a href="/gallery/logic" className="block" onClick={() => setMobileOpen(false)}>Logic</a>
              </div>

              <div className="pt-4 space-y-1">
                <div className="label-sm text-muted-foreground">Components</div>
                <a href="/gallery/core" className="block" onClick={() => setMobileOpen(false)}>Core</a>
                <a href="/gallery/buttons" className="block" onClick={() => setMobileOpen(false)}>Buttons</a>
                <a href="/gallery/badge" className="block" onClick={() => setMobileOpen(false)}>Badges</a>
                <a href="/gallery/forms" className="block" onClick={() => setMobileOpen(false)}>Forms</a>
                <a href="/gallery/tables" className="block" onClick={() => setMobileOpen(false)}>Tables</a>
                <a href="/gallery/data-table" className="block" onClick={() => setMobileOpen(false)}>Data Table</a>
                <a href="/gallery/tabs" className="block" onClick={() => setMobileOpen(false)}>Tabs</a>
                <a href="/gallery/accordions" className="block" onClick={() => setMobileOpen(false)}>Accordions</a>
                <a href="/gallery/command-palette" className="block" onClick={() => setMobileOpen(false)}>Command Palette</a>
                <a href="/gallery/sidebar" className="block" onClick={() => setMobileOpen(false)}>Sidebar</a>
                <a href="/gallery/header" className="block" onClick={() => setMobileOpen(false)}>Header</a>
                <a href="/gallery/stats" className="block" onClick={() => setMobileOpen(false)}>Stats</a>
                <a href="/gallery/overlays/background" className="block" onClick={() => setMobileOpen(false)}>Overlay Background</a>
                <a href="/gallery/overlays/dialog" className="block" onClick={() => setMobileOpen(false)}>Dialog</a>
                <a href="/gallery/overlays/sheet" className="block" onClick={() => setMobileOpen(false)}>Sheet</a>
              </div>

              <div className="pt-4 space-y-1">
                <div className="label-sm text-muted-foreground">Composed Patterns</div>
                <a href="/gallery/modules/metric-panel" className="block" onClick={() => setMobileOpen(false)}>Metric Panel</a>
                <a href="/gallery/empty-state" className="block" onClick={() => setMobileOpen(false)}>Empty State</a>
              </div>
            </nav>
          </aside>
        </div>
      )}

      {/* Main */}
      <div className="flex-1 flex flex-col">
        {/* Mobile Header */}
        <header className="lg:hidden flex items-center justify-between border-b bg-background px-4 py-3">
          <button onClick={() => setMobileOpen(true)}>
            <Menu size={20} />
          </button>
          <div className="label-md">Design System</div>
        </header>

        <main className="flex-1 p-6 md:p-10 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}