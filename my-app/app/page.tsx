// "use client"
"use client"
import { Button } from "@/components/ui/button"

import { useEffect, useState } from "react"

function DemoIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12h8" />
      <path d="M12 8v8" />
    </svg>
  )
}

const variants = [
  "primary",
  "secondary",
  "outline",
  "ghost",
  "destructive",
  "link",
] as const

const sizes = ["xs", "sm", "md", "lg"] as const

export default function ComponentGallery() {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    const root = document.documentElement
    if (theme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }, [theme])

  return (
    <div className="p-10 space-y-16">
      <h1 className="text-3xl font-bold">Button System Gallery</h1>
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium">Theme:</span>
        <Button
          variant={theme === "light" ? "primary" : "outline"}
          size="sm"
          onClick={() => setTheme("light")}
        >
          Light
        </Button>
        <Button
          variant={theme === "dark" ? "primary" : "outline"}
          size="sm"
          onClick={() => setTheme("dark")}
        >
          Dark
        </Button>
      </div>

      {/* TEXT BUTTONS */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold">Text Buttons</h2>
        <p className="text-sm text-muted-foreground">
          Standard buttons with text content. Shows every variant and size.
        </p>

        {variants.map((variant) => (
          <div key={variant} className="space-y-2">
            <h3 className="text-sm font-medium">Variant: {variant}</h3>
            <div className="flex flex-wrap gap-4">
              {sizes.map((size) => (
                <div key={size} className="flex flex-col items-start gap-1">
                  <Button variant={variant} size={size}>
                    {variant} / {size}
                  </Button>
                  <span className="text-xs text-muted-foreground">
                    variant={variant}, size={size}, iconOnly=false
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ICON + TEXT */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold">Icon + Text Buttons</h2>
        <p className="text-sm text-muted-foreground">
          Buttons with a leading icon and text label.
        </p>

        {variants.map((variant) => (
          <div key={variant} className="space-y-2">
            <h3 className="text-sm font-medium">Variant: {variant}</h3>
            <div className="flex flex-wrap gap-4">
              {sizes.map((size) => (
                <div key={size} className="flex flex-col items-start gap-1">
                  <Button variant={variant} size={size}>
                    <DemoIcon />
                    {variant} / {size}
                  </Button>
                  <span className="text-xs text-muted-foreground">
                    variant={variant}, size={size}, iconOnly=false
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ICON ONLY */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold">Icon Only Buttons</h2>
        <p className="text-sm text-muted-foreground">
          Square buttons. Icon size scales with button size (16px for xs/sm,
          20px for md/lg).
        </p>

        {variants.map((variant) => (
          <div key={variant} className="space-y-2">
            <h3 className="text-sm font-medium">Variant: {variant}</h3>
            <div className="flex flex-wrap gap-4">
              {sizes.map((size) => (
                <div key={size} className="flex flex-col items-center gap-1">
                  <Button variant={variant} size={size} iconOnly>
                    <DemoIcon />
                  </Button>
                  <span className="text-xs text-muted-foreground text-center whitespace-pre-line">
                    {`variant=${variant}
size=${size}
iconOnly=true`}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* STATES */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold">State Examples</h2>
        <p className="text-sm text-muted-foreground">
          Demonstrates disabled state across sizes.
        </p>

        <div className="flex flex-wrap gap-6">
          {sizes.map((size) => (
            <div key={size} className="flex flex-col gap-2">
              <Button size={size} disabled>
                Disabled / {size}
              </Button>
              <Button size={size} iconOnly disabled>
                <DemoIcon />
              </Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}