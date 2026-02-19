

"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const variants = [
  "primary",
  "outline",
  "ghost",
  "destructive",
  "link",
] as const

const sizes = ["xs", "sm", "md", "lg"] as const

function DemoIcon() {
  return <Star className="size-4" />
}

export default function ButtonsPage() {
  return (
    <div className="p-8">
      <Card level={1}>
        <CardContent className="space-y-10">
          <section className="space-y-10">
            <h2 className="h2">Buttons</h2>

            {/* TYPE */}
            <div className="space-y-4">
              <h3 className="h3">Type</h3>
              <div className="flex flex-wrap gap-4">
                {variants.map((variant) => (
                  <Button key={variant} variant={variant} size="md">
                    {variant} md
                  </Button>
                ))}
              </div>
            </div>

            {/* SIZE */}
            <div className="space-y-4">
              <h3 className="h3">Size</h3>
              <div className="flex flex-wrap gap-4">
                {sizes.map((size) => (
                  <Button key={size} variant="outline" size={size}>
                    outline {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* CONTENT INSIDE */}
            <div className="space-y-4">
              <h3 className="h3">Content Inside</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="ghost" size="xs" iconOnly>
                  <DemoIcon />
                </Button>

                <Button variant="primary" size="sm">
                  primary sm
                </Button>

                <Button variant="destructive" size="md">
                  <DemoIcon />
                  destructive md
                </Button>

                <Button variant="outline" size="lg">
                  <DemoIcon />
                  outline lg
                </Button>
              </div>
            </div>

            {/* STATES */}
            <div className="space-y-4">
              <h3 className="h3">States</h3>

              {/* Enabled - Text */}
              <div className="flex flex-wrap gap-4">
                {variants.map((variant) => (
                  <Button key={variant + "-enabled"} variant={variant} size="md">
                    {variant} md
                  </Button>
                ))}
              </div>

              {/* Enabled - Icon Only */}
              <div className="flex flex-wrap gap-4">
                {variants.map((variant) => (
                  <Button
                    key={variant + "-icon"}
                    variant={variant}
                    size="md"
                    iconOnly
                  >
                    <DemoIcon />
                  </Button>
                ))}
              </div>

              {/* Disabled - Text */}
              <div className="flex flex-wrap gap-4">
                {variants.map((variant) => (
                  <Button
                    key={variant + "-disabled"}
                    variant={variant}
                    size="md"
                    disabled
                  >
                    {variant} md
                  </Button>
                ))}
              </div>

              {/* Disabled - Icon Only */}
              <div className="flex flex-wrap gap-4">
                {variants.map((variant) => (
                  <Button
                    key={variant + "-icon-disabled"}
                    variant={variant}
                    size="md"
                    iconOnly
                    disabled
                  >
                    <DemoIcon />
                  </Button>
                ))}
              </div>
            </div>
          </section>
        </CardContent>
      </Card>
    </div>
  )
}