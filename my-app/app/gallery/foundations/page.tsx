"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const grayScale = [
  "gray-99","gray-96","gray-94","gray-91","gray-89",
  "gray-86","gray-63","gray-50","gray-38","gray-25","gray-12"
]

const violetScale = [
  "violet-99","violet-95","violet-88","violet-78","violet-68",
  "violet-64","violet-59","violet-47","violet-38","violet-31","violet-24"
]

const semanticTokens = [
  {
    token: "background",
    label: "background",
    description: "The canvas background (level 0).",
    lightPrimitive: "gray-96",
    darkPrimitive: "gray-12",
  },
  {
    token: "foreground",
    label: "foreground",
    description: "Default foreground text color.",
    lightPrimitive: "gray-12",
    darkPrimitive: "gray-96",
  },
  {
    token: "card",
    label: "card",
    description: "Primary surface background (level 1).",
    lightPrimitive: "white",
    darkPrimitive: "gray-25",
  },
  {
    token: "card-foreground",
    label: "card-foreground",
    description: "Text on card surfaces.",
    lightPrimitive: "gray-12",
    darkPrimitive: "gray-96",
  },
  {
    token: "popover",
    label: "popover",
    description: "Popover / floating surface background.",
    lightPrimitive: "white",
    darkPrimitive: "gray-25",
  },
  {
    token: "popover-foreground",
    label: "popover-foreground",
    description: "Text on popovers.",
    lightPrimitive: "gray-25",
    darkPrimitive: "gray-96",
  },
  {
    token: "primary",
    label: "primary",
    description: "Primary brand / action color.",
    lightPrimitive: "violet-64",
    darkPrimitive: "violet-38",
  },
  {
    token: "primary-foreground",
    label: "primary-foreground",
    description: "Text/icon on primary surfaces.",
    lightPrimitive: "violet-95",
    darkPrimitive: "violet-95",
  },
  {
    token: "secondary",
    label: "secondary",
    description: "Secondary surface (often matches canvas tone).",
    lightPrimitive: "gray-96",
    darkPrimitive: "gray-12",
  },
  {
    token: "secondary-foreground",
    label: "secondary-foreground",
    description: "Text on secondary surfaces.",
    lightPrimitive: "gray-25",
    darkPrimitive: "gray-96",
  },
  {
    token: "muted",
    label: "muted",
    description: "Subtle surface for quiet sections.",
    lightPrimitive: "gray-91",
    darkPrimitive: "gray-38",
  },
  {
    token: "muted-foreground",
    label: "muted-foreground",
    description: "Muted text.",
    lightPrimitive: "gray-50",
    darkPrimitive: "gray-63",
  },
  {
    token: "accent",
    label: "accent",
    description: "Accent surface (hover / highlight).",
    lightPrimitive: "violet-95",
    darkPrimitive: "violet-24",
  },
  {
    token: "accent-foreground",
    label: "accent-foreground",
    description: "Text/icon on accent surfaces.",
    lightPrimitive: "violet-38",
    darkPrimitive: "violet-95",
  },
  {
    token: "border",
    label: "border",
    description: "Primary border.",
    lightPrimitive: "gray-86",
    darkPrimitive: "gray-38",
  },
  {
    token: "input",
    label: "input",
    description: "Input border.",
    lightPrimitive: "gray-89",
    darkPrimitive: "gray-38",
  },
  {
    token: "ring",
    label: "ring",
    description: "Focus ring.",
    lightPrimitive: "violet-64",
    darkPrimitive: "violet-64",
  },
  {
    token: "border-subtle",
    label: "border-subtle",
    description: "Low-emphasis border for nested surfaces.",
    lightPrimitive: "gray-94",
    darkPrimitive: "gray-50",
  },
  {
    token: "border-primary",
    label: "border-primary",
    description: "Primary emphasis border (selected states, active surfaces).",
    lightPrimitive: "violet-64",
    darkPrimitive: "violet-47",
  },
  {
    token: "accent-halo",
    label: "accent-halo",
    description: "Outer halo / focus emphasis color.",
    lightPrimitive: "violet-78",
    darkPrimitive: "violet-38",
  },
  {
    token: "success",
    label: "success",
    description: "Success background surface.",
    lightPrimitive: "oklch(0.95 0.03 155)",
    darkPrimitive: "oklch(0.20 0.05 155)",
  },
  {
    token: "success-foreground",
    label: "success-foreground",
    description: "Text on success surfaces.",
    lightPrimitive: "oklch(0.53 0.18 155)",
    darkPrimitive: "oklch(0.75 0.20 155)",
  },
  {
    token: "warning",
    label: "warning",
    description: "Warning background surface.",
    lightPrimitive: "oklch(0.97 0.03 85)",
    darkPrimitive: "oklch(0.20 0.05 85)",
  },
  {
    token: "warning-foreground",
    label: "warning-foreground",
    description: "Text on warning surfaces.",
    lightPrimitive: "oklch(0.62 0.16 85)",
    darkPrimitive: "oklch(0.78 0.18 85)",
  },
  {
    token: "destructive",
    label: "destructive",
    description: "Destructive / error surface.",
    lightPrimitive: "oklch(0.96 0.03 10)",
    darkPrimitive: "oklch(0.20 0.09 10)",
  },
  {
    token: "destructive-foreground",
    label: "destructive-foreground",
    description: "Text on destructive surfaces.",
    lightPrimitive: "oklch(0.55 0.22 10)",
    darkPrimitive: "oklch(0.90 0.20 10)",
  },
]


function primitiveLabel(name: string) {
  if (name === "white") return "oklch(1 0 0)"
  return `--${name}`
}

function primitiveVar(name: string) {
  if (name === "white") return "oklch(1 0 0)"
  return `var(--${name})`
}

function resolvePrimitiveOklch(value: string) {
  return value.trim().replace(/\s+/g, " ")
}

export default function FoundationsPage() {
  const [primitiveOklch, setPrimitiveOklch] = React.useState<Record<string, string>>({})

  React.useEffect(() => {
    const root = document.documentElement
    const needed = new Set<string>()

    grayScale.forEach((p) => needed.add(p))
    violetScale.forEach((p) => needed.add(p))
    semanticTokens.forEach((t) => {
      needed.add(t.lightPrimitive)
      needed.add(t.darkPrimitive)
    })

    const next: Record<string, string> = {}

    // "white" isn't a CSS var in our system — it's explicit.
    next.white = "oklch(1 0 0)"

    needed.forEach((name) => {
      if (name === "white") return
      const raw = getComputedStyle(root).getPropertyValue(`--${name}`)
      if (raw) next[name] = resolvePrimitiveOklch(raw)
    })

    setPrimitiveOklch(next)
  }, [])

  return (
    <div className="space-y-12">

      {/* ===================== */}
      {/* Page Header */}
      {/* ===================== */}
      <div className="space-y-2">
        <div className="h1">Foundations</div>
        <p className="p text-muted-foreground">
          Primitive tokens, semantic mappings, and foundational system rules.
        </p>
      </div>

      {/* ===================== */}
      {/* Typography */}
      {/* ===================== */}
      <Card>
        <CardHeader>
          <CardTitle className="label-lg">Typography</CardTitle>
          <CardDescription className="p-sm">
            Type scale and weight system.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Headings */}
            <Card level={2}>
              <CardContent className="space-y-3">
                <div className="label-md">Headings</div>
                <div className="h1">h1 — text-2xl / 650</div>
                <div className="h2">h2 — text-base / 650</div>
                <div className="h3">h3 — text-sm / 650</div>
                <div className="h4">h4 — text-xs / 650</div>
              </CardContent>
            </Card>

            {/* Body */}
            <Card level={2}>
              <CardContent className="space-y-3">
                <div className="label-md">Body</div>
                <p className="p-lg">p-lg — 16px / 425</p>
                <p className="p">p — 14px / 425</p>
                <p className="p-sm">p-sm — 12px / 425</p>
              </CardContent>
            </Card>

            {/* Labels */}
            <Card level={2}>
              <CardContent className="space-y-3">
                <div className="label-md">Labels</div>
                <div className="label-lg">label-lg — 16px / 525</div>
                <div className="label-md">label-md — 14px / 525</div>
                <div className="label-sm">label-sm — 12px / 525</div>
              </CardContent>
            </Card>

            {/* Data */}
            <Card level={2}>
              <CardContent className="space-y-3">
                <div className="label-md">Data</div>
                <div className="data-lg">123,456.78</div>
                <div className="data-md">123,456.78</div>
                <div className="data-sm">123,456.78</div>
              </CardContent>
            </Card>

          </div>
        </CardContent>
      </Card>

      {/* ===================== */}
      {/* Color Primitives */}
      {/* ===================== */}
      <Card>
        <CardHeader>
          <CardTitle className="label-lg">Color Primitives</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">

          {/* Gray */}
          <div className="space-y-3">
            <div className="label-md">Gray Scale</div>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
              {grayScale.map((color) => {
                const lightness = parseInt(color.split("-")[1])
                const isLight = lightness >= 86
                const textColor = isLight ? "var(--gray-12)" : "var(--gray-99)"
                return (
                  <div
                    key={color}
                    className="h-20 rounded-md border p-2 flex flex-col justify-between"
                    style={{
                      backgroundColor: `var(--${color})`,
                      color: textColor,
                    }}
                  >
                    <div className="p-sm">{color}</div>
                    <div className="space-y-0.5">
                      <div className="p-sm opacity-80">
                        OKLCH: {primitiveOklch[color] ?? ""}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Violet */}
          <div className="space-y-3">
            <div className="label-md">Violet Scale</div>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
              {violetScale.map((color) => {
                const isLight =
                  color.includes("99") ||
                  color.includes("95") ||
                  color.includes("88") ||
                  color.includes("78") ||
                  color.includes("68")

                const textColor = isLight ? "var(--violet-24)" : "var(--violet-99)"

                return (
                  <div
                    key={color}
                    className="h-20 rounded-md border p-2 flex flex-col justify-between"
                    style={{
                      backgroundColor: `var(--${color})`,
                      color: textColor,
                    }}
                  >
                    <div className="p-sm">{color}</div>
                    <div className="space-y-0.5">
                      <div className="p-sm opacity-80">
                        OKLCH: {primitiveOklch[color] ?? ""}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Tailwind Semantic Families */}
          <div className="space-y-4">
            <div className="label-md">Tailwind Semantic Families (50 / 200 / 600)</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "emerald", values: ["50","200","600"] },
                { name: "amber", values: ["50","200","600"] },
                { name: "cyan", values: ["50","200","600"] },
                { name: "rose", values: ["50","200","600"] },
              ].map((family) => (
                <div key={family.name} className="space-y-2">
                  <div className="label-sm capitalize">{family.name}</div>
                  {family.values.map((level) => (
                    <div
                      key={level}
                      className={`rounded-md border p-3 bg-${family.name}-${level} ${
                        level === "50" ? "text-gray-12" : "text-white"
                      }`}
                    >
                      <div className="p-sm">
                        {family.name}-{level}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

        </CardContent>
      </Card>

      {/* ===================== */}
      {/* Semantic Tokens */}
      {/* ===================== */}
      <Card>
        <CardHeader>
          <CardTitle className="label-lg">Semantic Mode</CardTitle>
          <CardDescription className="p">
            Semantic tokens mapped to primitives. Shows both Light + Dark mappings.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {semanticTokens.map((t) => {
            const lightLabel = primitiveLabel(t.lightPrimitive)
            const darkLabel = primitiveLabel(t.darkPrimitive)

            return (
              <Card key={t.token} level={2} size="sm">
                <CardContent className="flex items-start gap-4">
                  <div
                    className="size-12 rounded-md border"
                    style={{ backgroundColor: `var(--${t.token})` }}
                    aria-hidden="true"
                  />

                  <div className="min-w-0 flex-1 space-y-2">
                    <div className="space-y-0.5">
                      <div className="label-md">{t.label}</div>
                      <p className="p">{t.description}</p>
                    </div>

                    <div className="space-y-1">
                      <div className="p-sm">
                        <span className="text-muted-foreground">Light:</span>{" "}
                        <span className="font-[525]">{t.lightPrimitive === "white" ? "white" : `--${t.lightPrimitive}`}</span>
                      </div>
                      <div className="p-sm text-muted-foreground">
                        OKLCH: {primitiveOklch[t.lightPrimitive] ?? (t.lightPrimitive === "white" ? "oklch(1 0 0)" : "")}
                      </div>

                      <div className="p-sm pt-1">
                        <span className="text-muted-foreground">Dark:</span>{" "}
                        <span className="font-[525]">{t.darkPrimitive === "white" ? "white" : `--${t.darkPrimitive}`}</span>
                      </div>
                      <div className="p-sm text-muted-foreground">
                        OKLCH: {primitiveOklch[t.darkPrimitive] ?? (t.darkPrimitive === "white" ? "oklch(1 0 0)" : "")}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </CardContent>
      </Card>

      {/* ===================== */}
      {/* Elevation */}
      {/* ===================== */}
      <Card>
        <CardHeader>
          <CardTitle className="label-lg">Elevation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-8">

            {/* elevation-none */}
            <div className="rounded-md bg-card p-6 shadow-none border border-subtle">
              <div className="label-md">elevation-none</div>
              <p className="p">
                No shadow. Used for nested surfaces (Level 2 cards), inline panels,
                subtle containers, and low-emphasis UI groupings.
              </p>
            </div>

            {/* elevation-surface */}
            <div className="rounded-md bg-card p-6 shadow-[var(--elevation-surface)]">
              <div className="label-md">elevation-surface (y1)</div>
              <p className="p">
                Base surface elevation. Used for primary cards, panels,
                and standard content containers.
              </p>
            </div>

            {/* elevation-floating */}
            <div className="rounded-md bg-card p-6 shadow-[var(--elevation-floating)]">
              <div className="label-md">elevation-floating (y2)</div>
              <p className="p">
                Floating surfaces above standard content. Used for dropdowns,
                hover panels, compact toolbars, and contextual UI.
              </p>
            </div>

            {/* elevation-overlay */}
            <div className="rounded-md bg-card p-6 shadow-[var(--elevation-overlay)]">
              <div className="label-md">elevation-overlay (y6)</div>
              <p className="p">
                Modal-level elevation. Used for dialogs, sheets, drawers,
                and surfaces that block or interrupt workflow.
              </p>
            </div>

            {/* elevation-popover */}
            <div className="rounded-md bg-card p-6 shadow-[var(--elevation-popover)]">
              <div className="label-md">elevation-popover (y16)</div>
              <p className="p">
                Highest elevation tier. Used for tooltips, transient popovers,
                command palettes, and attention-grabbing overlays.
              </p>
            </div>

          </div>
        </CardContent>
      </Card>

      {/* ===================== */}
      {/* Surface Tone Alternation */}
      {/* ===================== */}
      <Card level={1}>
        <CardHeader>
          <CardTitle className="label-lg">Surface Tone Alternation</CardTitle>
          <CardDescription className="p-sm">
            Demonstrates canvas (level 0), primary surface (level 1), and nested surface logic.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">

          {/* Level 0 — Canvas */}
          <div className="space-y-4">
            <div className="label-md">Level 0 — Canvas (--background)</div>

            {/* Full-bleed canvas demo */}
            <div className="-mx-6 bg-secondary px-6 py-8 space-y-8">

              {/* Level 1 — Primary Surface */}
              <Card level={1}>
                <CardContent className="space-y-4">
                  <div className="label-md">Level 1 — Primary surface (--card)</div>

                  {/* Level 2 — Nested */}
                  <Card level={2}>
                    <CardContent>
                      <div className="p">
                        Level 2 — Nested surface (--secondary)
                      </div>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>

              {/* Alternate Example */}
              <Card level={1}>
                <CardContent className="space-y-4">
                  <div className="label-md">Level 1 — Secondary Surface</div>

                  <Card level={2}>
                    <CardContent>
                      <div className="p">
                        Level 2 — Nested (white background)
                      </div>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>

            </div>
          </div>

          {/* Surface Logic Explanation */}
          <div className="space-y-2 pt-6">
            <div className="label-md">Surface & Border Logic</div>
            <p className="p">
              Level 0 (Canvas) uses the secondary background and has no border.
              Level 1 surfaces alternate tone against the canvas and use the
              primary border token (--border).
            </p>
            <p className="p">
              Any surface nested inside another surface (Level 2+) alternates
              background tone and switches to the subtle border token
              (--border-subtle) to reduce visual weight and preserve hierarchy.
            </p>
          </div>

        </CardContent>
      </Card>

      {/* ===================== */}
      {/* Corners */}
      {/* ===================== */}
      <Card>
        <CardHeader>
          <CardTitle className="label-lg">Corners</CardTitle>
          <CardDescription className="p">
            We use a consistent 0.5rem (8px) corner radius across the system.
            The shape feels approachable and modern, while remaining structured
            and professional — introducing just enough softness for sensitive
            and high-trust experiences.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 max-w-xs">

            <Card level={1}>
              <CardContent className="h-20" />
            </Card>

            <Card level={2}>
              <CardContent className="h-20" />
            </Card>

          </div>
        </CardContent>
      </Card>


    </div>
  )
}  