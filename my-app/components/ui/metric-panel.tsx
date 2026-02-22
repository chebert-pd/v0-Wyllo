import React from "react"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

interface MetricPanelProps {
  title?: string
  subtitle?: string
  stats: React.ReactNode
  children: React.ReactNode
}

export function MetricPanel({
  title,
  subtitle,
  stats,
  children,
}: MetricPanelProps) {
  return (
    <Card level={1} className="animate-in fade-in duration-500">
      <CardContent className="p-0">

        {/* Header */}
        {(title || subtitle) && (
          <div className="px-8 py-6 border-b border-border-subtle space-y-2">
            {title && <div className="label-lg">{title}</div>}
            {subtitle && (
              <p className="p text-muted-foreground">{subtitle}</p>
            )}
          </div>
        )}

        {/* Interactive Stat Accordion */}
        <Accordion
          type="single"
          collapsible
          className="
            w-full
            md:grid md:grid-cols-3
            divide-y md:divide-y-0
            md:divide-x
            divide-border-subtle
          "
        >
          {React.Children.map(stats, (child, index) => (
            <AccordionItem
              key={index}
              value={`metric-${index}`}
              className="border-0 contents"
            >
              {/* Stat Trigger */}
              <AccordionTrigger
                className="
                  w-full
                  px-8 py-8
                  text-left
                  hover:bg-secondary/40
                  transition-all duration-300
                "
              >
                {child}
              </AccordionTrigger>

              {/* Expanded Analytics Panel */}
              <AccordionContent
                className="
                  col-span-full
                  px-8 pt-6 pb-8
                  border-t border-border-subtle
                  animate-in fade-in slide-in-from-top-2 duration-500
                "
              >
                {children}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}