"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const grayScale = [
  "gray-99","gray-96","gray-94","gray-91","gray-89",
  "gray-86","gray-63","gray-50","gray-38","gray-25","gray-12"
]

const violetScale = [
  "violet-99","violet-95","violet-88","violet-78","violet-68",
  "violet-64","violet-59","violet-47","violet-38","violet-31","violet-24"
]

export default function FoundationsPage() {
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
                        OKLCH: {getComputedStyle(document.documentElement).getPropertyValue(`--${color}`)}
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
                        OKLCH: {getComputedStyle(document.documentElement).getPropertyValue(`--${color}`)}
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
          <CardTitle className="label-lg">Semantic Tokens — Light Mode</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            "background","card","primary","secondary",
            "muted","accent","border","input","ring"
          ].map((token) => {
            const lightTokens = ["background","card","secondary","muted","accent","border","input"]
            const textColor = lightTokens.includes(token)
              ? "var(--gray-12)"
              : "var(--gray-99)"

            return (
              <div
                key={token}
                className="h-20 rounded-md border p-3 flex flex-col justify-between"
                style={{
                  backgroundColor: `var(--${token})`,
                  color: textColor,
                }}
              >
                <div className="p-sm">{token}</div>
                <div className="p-sm opacity-80">
                  OKLCH: {getComputedStyle(document.documentElement).getPropertyValue(`--${token}`)}
                </div>
              </div>
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
          <div className="rounded-md bg-card p-6 shadow-[var(--elevation-surface)]">
            <div className="p">elevation-surface (y1)</div>
          </div>
          <div className="rounded-md bg-card p-6 shadow-[var(--elevation-floating)]">
            <div className="p">elevation-floating (y2)</div>
          </div>
          <div className="rounded-md bg-card p-6 shadow-[var(--elevation-overlay)]">
            <div className="p">elevation-overlay (y6)</div>
          </div>
          <div className="rounded-md bg-card p-6 shadow-[var(--elevation-popover)]">
            <div className="p">elevation-popover (y16)</div>
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
            <div className="label-md">Level 0 — Canvas (secondary)</div>

            {/* Full-bleed canvas demo */}
            <div className="-mx-6 bg-secondary px-6 py-8 space-y-8">

              {/* Level 1 — Primary Surface */}
              <Card level={1}>
                <CardContent className="space-y-4">
                  <div className="label-md">Level 1 — Primary Surface (white)</div>

                  {/* Level 2 — Nested */}
                  <Card level={2}>
                    <CardContent>
                      <div className="p">
                        Level 2 — Nested (secondary background)
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
            <p className="p-sm text-muted-foreground">
              Level 0 (Canvas) uses the secondary background and has no border.
              Level 1 surfaces alternate tone against the canvas and use the
              primary border token (--border).
            </p>
            <p className="p-sm text-muted-foreground">
              Any surface nested inside another surface (Level 2+) alternates
              background tone and switches to the subtle border token
              (--border-subtle) to reduce visual weight and preserve hierarchy.
            </p>
          </div>

        </CardContent>
      </Card>


    </div>
  )
}   