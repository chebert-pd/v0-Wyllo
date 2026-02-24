"use client"

import * as React from "react"
import { format } from "date-fns"
import type { DateRange } from "react-day-picker"
import { CalendarIcon, X } from "lucide-react"

import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"

interface DateRangePickerProps {
  value?: DateRange
  onChange: (range: DateRange | undefined) => void
  onClear?: () => void
  align?: "start" | "center" | "end"
  className?: string
}

export function DateRangePicker({
  value,
  onChange,
  onClear,
  align = "end",
  className,
}: DateRangePickerProps) {
  const [open, setOpen] = React.useState(false)

  const label = React.useMemo(() => {
    if (!value?.from) return "Pick a range"
    if (!value.to) return format(value.from, "MMM d, yyyy")
    return `${format(value.from, "MMM d, yyyy")} – ${format(value.to, "MMM d, yyyy")}`
  }, [value])

  const hasRange = !!value?.from

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "h-9 gap-2 border-border bg-secondary text-sm font-normal",
            hasRange ? "text-foreground pr-2" : "text-muted-foreground",
            className
          )}
        >
          <CalendarIcon className="h-4 w-4 shrink-0 text-muted-foreground" />
          <span className="truncate max-w-[200px]">{label}</span>
          {hasRange && onClear && (
            <span
              role="button"
              tabIndex={0}
              aria-label="Clear date range"
              className="ml-1 rounded-sm hover:bg-muted p-0.5 text-muted-foreground hover:text-foreground transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                onClear()
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.stopPropagation()
                  onClear?.()
                }
              }}
            >
              <X className="h-3 w-3" />
            </span>
          )}
        </Button>
      </PopoverTrigger>

      <PopoverContent align={align} className="w-auto p-0" sideOffset={8}>
        <div className="flex flex-col">

          {/* Quick presets */}
          <div className="flex items-center gap-1.5 border-b border-border px-3 py-2.5">
            <span className="p-sm text-muted-foreground mr-1">Quick:</span>
            {[
              { label: "Last 7 days", days: 7 },
              { label: "Last 30 days", days: 30 },
              { label: "Last 90 days", days: 90 },
            ].map((preset) => (
              <Button
                key={preset.days}
                variant="outline"
                size="sm"
                className="h-7 text-xs px-2.5"
                onClick={() => {
                  const to = new Date()
                  const from = new Date()
                  from.setDate(from.getDate() - preset.days)
                  onChange({ from, to })
                  setOpen(false)
                }}
              >
                {preset.label}
              </Button>
            ))}
          </div>

          {/* Calendar */}
          <Calendar
            mode="range"
            selected={value}
            onSelect={onChange}
            numberOfMonths={2}
            disabled={{ after: new Date() }}
            defaultMonth={
              value?.from
                ? new Date(value.from.getFullYear(), value.from.getMonth() - 1)
                : new Date(new Date().getFullYear(), new Date().getMonth() - 1)
            }
            className="p-3"
          />

          {/* Footer */}
          <div className="flex items-center justify-between border-t border-border px-3 py-2.5 gap-2">
            <div className="p-sm text-muted-foreground">
              {value?.from && value?.to
                ? `${Math.round(
                    (value.to.getTime() - value.from.getTime()) / (1000 * 60 * 60 * 24)
                  )} days selected`
                : value?.from
                ? "Select end date"
                : "Select start date"}
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="h-7 text-xs"
                onClick={() => {
                  onChange(undefined)
                  setOpen(false)
                }}
              >
                Clear
              </Button>
              <Button
                variant="primary"
                size="sm"
                className="h-7 text-xs"
                disabled={!value?.from || !value?.to}
                onClick={() => setOpen(false)}
              >
                Apply
              </Button>
            </div>
          </div>

        </div>
      </PopoverContent>
    </Popover>
  )
}
