"use client"

import {
  Badge,
  BadgeAvatar,
  BadgeAvatarGroup,
  BadgeDelta,
  BadgeIcon,
  BadgeIndicator,
  BadgeAction,
} from "@/components/ui/badge"
import { PropTable, type PropRow } from "@/app/gallery/_components/prop-table"

const BADGE_ROWS: PropRow[] = [
  { prop: "variant", type: '"default" | "secondary" | "destructive" | "outline" | "ghost" | "link" | "success" | "warning" | "info"', default: '"default"', description: "Visual style of the badge." },
  { prop: "asChild", type: "boolean", default: "false", description: "Merges badge styling onto a child element." },
  { prop: "className", type: "string", description: "Additional CSS classes." },
]

const BADGE_SUB_ROWS: PropRow[] = [
  { prop: "BadgeIcon", type: "component", description: "Renders a Lucide icon inside the badge. Props: icon (LucideIcon, required), className." },
  { prop: "BadgeAvatar", type: "component", description: "Renders a small avatar. Props: src, alt, fallback, size ('sm' | 'md', default 'sm')." },
  { prop: "BadgeAvatarGroup", type: "component", description: "Wraps multiple BadgeAvatars with overlapping layout." },
  { prop: "BadgeIndicator", type: "component", description: "Colored dot status indicator. Props: variant ('default' | 'success' | 'error' | 'warning' | 'info'), pulse (boolean)." },
  { prop: "BadgeDelta", type: "component", description: "Shows a numeric delta with automatic up/down color. Props: delta (number, required)." },
  { prop: "BadgeAction", type: "component", description: "Clickable area inside a badge (e.g. a dismiss ×). Accepts asChild." },
]
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import {
  CheckCircle,
  Users,
  X,
} from "lucide-react"

const variants = [
  {
    name: "default",
    description:
      "Neutral badge for general labeling. Use for non-semantic metadata like tags, IDs, or categories.",
  },
  {
    name: "secondary",
    description:
      "Low-emphasis badge for supporting metadata or contextual grouping.",
  },
  {
    name: "outline",
    description:
      "Subtle bordered badge for passive states or filter tokens.",
  },
  {
    name: "destructive",
    description:
      "Critical badge used for errors, blocked states, or high-risk indicators.",
  },
  {
    name: "success",
    description:
      "Positive outcome badge used for approvals, passes, or healthy states.",
  },
  {
    name: "warning",
    description:
      "Cautionary badge used for review states or attention-needed conditions.",
  },
  {
    name: "info",
    description:
      "Informational badge used for neutral system signals or contextual hints.",
  },
]

export default function BadgeGalleryPage() {
  return (
    <div className="space-y-16">
      {/* SECTION 1 — VARIANTS */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="h1">Badges</h1>
          <p className="p text-muted-foreground">
            Semantic and structural badges used for labeling, status, and metadata.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {variants.map((variant) => (
            <Card key={variant.name} level={1}>
              <CardHeader className="space-y-1">
                <CardTitle className="label-md">
                  {variant.name}
                </CardTitle>
                <CardDescription className="p-sm text-card-foreground">
                  {variant.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-4">
                <Badge variant={variant.name as any}>
                  {variant.name}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* SECTION 2 — COMPOSED TYPES */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="h2">Composed Badge Patterns</h2>
          <p className="p text-muted-foreground">
            Advanced badge compositions built using badge subcomponents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {/* Avatar */}
          <Card level={1}>
            <CardHeader>
              <CardTitle className="label-md">Avatar</CardTitle>
            </CardHeader>
            <CardContent>
              <Badge variant="secondary">
                <BadgeAvatar fallback="WH" />
                @wyllo
              </Badge>
            </CardContent>
          </Card>

          {/* Status with icon */}
          <Card level={1}>
            <CardHeader>
              <CardTitle className="label-md">Status</CardTitle>
            </CardHeader>
            <CardContent>
              <Badge variant="success">
                <BadgeIcon icon={CheckCircle} />
                Approved
              </Badge>
            </CardContent>
          </Card>

          {/* Indicator (pulse) */}
          <Card level={1}>
            <CardHeader>
              <CardTitle className="label-md">Indicator (Pulse)</CardTitle>
            </CardHeader>
            <CardContent>
              <Badge variant="outline">
                <BadgeIndicator variant="success" pulse />
                Live
              </Badge>
            </CardContent>
          </Card>

          {/* Delta */}
          <Card level={1}>
            <CardHeader>
              <CardTitle className="label-md">Delta</CardTitle>
            </CardHeader>
            <CardContent>
              <Badge variant="secondary">
                <BadgeDelta delta={12} />
                ↑ 12%
              </Badge>
            </CardContent>
          </Card>

          {/* Icon */}
          <Card level={1}>
            <CardHeader>
              <CardTitle className="label-md">Icon</CardTitle>
            </CardHeader>
            <CardContent>
              <Badge variant="secondary">
                <BadgeIcon icon={Users} />
                24 users
              </Badge>
            </CardContent>
          </Card>

          {/* Action (X button) */}
          <Card level={1}>
            <CardHeader>
              <CardTitle className="label-md">Action</CardTitle>
            </CardHeader>
            <CardContent>
              <Badge variant="outline">
                Filter: Fraud
                <BadgeAction>
                  <X className="size-3" />
                </BadgeAction>
              </Badge>
            </CardContent>
          </Card>

          {/* Avatar Group */}
          <Card level={1}>
            <CardHeader>
              <CardTitle className="label-md">Avatar Group</CardTitle>
            </CardHeader>
            <CardContent>
              <Badge variant="secondary">
                <BadgeAvatarGroup>
                  <BadgeAvatar fallback="AB" />
                  <BadgeAvatar fallback="CD" />
                  <BadgeAvatar fallback="EF" />
                </BadgeAvatarGroup>
                3 reviewers
              </Badge>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* API Reference */}
      <section className="space-y-6">
        <h2 className="h2">API Reference</h2>
        <PropTable title="Badge" rows={BADGE_ROWS} />
        <PropTable title="Sub-components" rows={BADGE_SUB_ROWS} />
      </section>
    </div>
  )
}