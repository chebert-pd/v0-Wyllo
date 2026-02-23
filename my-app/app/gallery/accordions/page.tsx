"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  AccordionGroup,
} from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Folder, Settings, Users, BarChart3 } from "lucide-react"

export default function AccordionsPage() {
  return (
    <div className="space-y-20">

      {/* ===================================================== */}
      {/* PAGE HEADER + VARIANTS OVERVIEW */}
      {/* ===================================================== */}
      <section className="space-y-10">
        <div className="space-y-4">
          <h1 className="h1">Accordion</h1>
          <div className="space-y-2">
            <h2 className="h2">Variants</h2>
            <p className="p text-muted-foreground">
              Accordions have versatility built into them, with optionality for icons,
              chevron position, subtitles, badges, sizing, and depth.
            </p>
          </div>
        </div>

        <div className="space-y-10">

          {/* LINE VARIANT */}
          <div className="space-y-4">
            <h3 className="h3">Line</h3>

            <Accordion type="single" collapsible size="sm">
              <AccordionItem value="line-sm">
                <AccordionTrigger>Size sm</AccordionTrigger>
                <AccordionContent>
                  Small size uses label-sm and p-sm for text.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible size="md">
              <AccordionItem value="line-md">
                <AccordionTrigger>
                  Size md <Badge variant="secondary">badge</Badge>
                </AccordionTrigger>
                <AccordionContent>
                  Medium size uses label-md and p for content.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible size="lg">
              <AccordionItem value="line-lg">
                <AccordionTrigger>
                  Size lg
                </AccordionTrigger>
                <AccordionContent>
                  Size large uses label-lg and p for text. Spacing increases proportionally.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* INDIVIDUAL CARD VARIANT */}
          <div className="space-y-4">
            <h3 className="h3">Individual Card</h3>

            <Card level={1}>
              <CardContent className="p-0">
                <Accordion type="single" collapsible size="sm">
                  <AccordionItem value="card-sm">
                    <AccordionTrigger>Size sm</AccordionTrigger>
                    <AccordionContent>
                      Small card accordion.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            <Card level={1}>
              <CardContent className="p-0">
                <Accordion type="single" collapsible size="md">
                  <AccordionItem value="card-md">
                    <AccordionTrigger>
                      Size md <Badge variant="secondary">badge</Badge>
                    </AccordionTrigger>
                    <AccordionContent>
                      Medium card accordion.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            <Card level={1}>
              <CardContent className="p-0">
                <Accordion type="single" collapsible size="lg">
                  <AccordionItem value="card-lg">
                    <AccordionTrigger>
                      Size lg
                    </AccordionTrigger>
                    <AccordionContent>
                      Large card accordion.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* GROUP CARD VARIANT */}
          <div className="space-y-4">
            <h3 className="h3">Group Card</h3>

            <AccordionGroup type="single" collapsible size="md">
              <AccordionItem value="group-docs">
                <AccordionTrigger icon={<FileText className="size-4 text-muted-foreground" />} subtitle="Manage your files">
                  Documents
                </AccordionTrigger>
                <AccordionContent>
                  View, upload, and organize all your documents in one place.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="group-projects">
                <AccordionTrigger icon={<Folder className="size-4 text-muted-foreground" />} subtitle="Organize your work">
                  Projects
                </AccordionTrigger>
                <AccordionContent>
                  Group initiatives and manage workflows.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="group-settings">
                <AccordionTrigger icon={<Settings className="size-4 text-muted-foreground" />} subtitle="Customize your experience">
                  Settings
                </AccordionTrigger>
                <AccordionContent>
                  Configure preferences and integrations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="group-team">
                <AccordionTrigger icon={<Users className="size-4 text-muted-foreground" />} subtitle="Manage users and roles">
                  Team Members
                </AccordionTrigger>
                <AccordionContent>
                  Add collaborators and assign permissions.
                </AccordionContent>
              </AccordionItem>
            </AccordionGroup>
          </div>

        </div>
      </section>

      {/* ===================================================== */}
      {/* SPACING TOKEN CALLOUT */}
      {/* ===================================================== */}
      <section className="space-y-6">
        <Card level={1}>
          <CardContent className="p-6 space-y-4">
            <h2 className="h2">Spacing System</h2>
            <p className="p text-muted-foreground">
              Accordion spacing is token-driven and scales by size:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card level={2}>
                <CardContent className="p-4 space-y-2">
                  <div className="label-sm">sm</div>
                  <p className="p-sm text-muted-foreground">
                    px-4 · compact rhythm · label-sm / p-sm
                  </p>
                </CardContent>
              </Card>
              <Card level={2}>
                <CardContent className="p-4 space-y-2">
                  <div className="label-sm">md (default)</div>
                  <p className="p-sm text-muted-foreground">
                    px-6 · balanced rhythm · label-md / p
                  </p>
                </CardContent>
              </Card>
              <Card level={2}>
                <CardContent className="p-4 space-y-2">
                  <div className="label-sm">lg</div>
                  <p className="p-sm text-muted-foreground">
                    px-6 · increased emphasis · label-lg / p
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ===================================================== */}
      {/* SIZE COMPARISON MATRIX */}
      {/* ===================================================== */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="h2">Size Comparison</h2>
          <p className="p text-muted-foreground">
            Visual comparison of typography scaling. Padding for md and lg is consistent; small is the compact variant.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {(["sm", "md", "lg"] as const).map((size) => (
            <Card key={size} level={1} className="self-start">
              <CardContent className="p-0">
                <Accordion type="single" collapsible size={size}>
                  <AccordionItem value={`matrix-${size}`}>
                    <AccordionTrigger>
                      {size.toUpperCase()} Example
                    </AccordionTrigger>
                    <AccordionContent>
                      This demonstrates spacing and typography scaling for the {size} size.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ===================================================== */}
      {/* 1. FULL WIDTH ACCORDIONS */}
      {/* ===================================================== */}
      <section className="space-y-8">
        <h2 className="h2">Layout Examples</h2>
        <p className="p text-muted-foreground">
          Structural layout patterns for organizing accordions across different contexts.
        </p>

        {/* Documentation Accordion */}
        <h3 className="h3">Full Width</h3>
        <Accordion type="single" collapsible size="md" className="w-full">
          <AccordionItem value="doc-1" className="border-b border-border-subtle">
            <AccordionTrigger>
              Documentation Accordion
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Ideal for structured information like help articles,
                API references, and legal policies.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Supports long-form text</li>
                <li>Works well with nested accordions</li>
                <li>Great for content-heavy pages</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Larger Size */}
        <Accordion type="single" collapsible size="lg" className="w-full">
          <AccordionItem value="doc-2" className="border-b border-border-subtle">
            <AccordionTrigger>
              <span className="label-lg">
                Large Documentation Variant
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex gap-3 items-center">
                <FileText className="size-5 text-muted-foreground" />
                <p>
                  Larger trigger size for high emphasis sections or onboarding flows.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Why Your Orders Failed AccordionGroup moved to Use Cases section */}
      </section>

      {/* ===================================================== */}
      {/* 2. GRID-BASED ACCORDIONS */}
      {/* ===================================================== */}


      {/* ===================================================== */}
      {/* 2. GRID-BASED ACCORDIONS */}
      {/* ===================================================== */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h3 className="h3">Grid</h3>
          <p className="p text-muted-foreground">
            Use when grouping multiple expandable cards within dashboards or configuration pages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-4">
          {["Projects", "Settings", "Team", "Integrations"].map((title, i) => (
            <Card key={i} level={1}>
              <CardContent className="p-0">
                <Accordion type="single" collapsible>
                  <AccordionItem value={`grid-${i}`} className="border-0">
                    <AccordionTrigger>
                      {title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="p text-muted-foreground">
                        This grid layout works well in dashboard-style layouts.
                      </p>
                      <Badge variant="secondary">Expandable</Badge>
                      <Button variant="ghost" size="sm">
                        Action
                      </Button>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>


      {/* ===================================================== */}
      {/* 3. MASONRY ACCORDIONS */}
      {/* ===================================================== */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h3 className="h3">Masonry</h3>
          <p className="p text-muted-foreground">
            Ideal for FAQ explorers, analytics panels, and modular dashboards.
            Items stack vertically and flow naturally based on height.
          </p>
        </div>

        <div className="columns-1 md:columns-2 gap-4 space-y-4">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Card key={item} level={1} className="break-inside-avoid">
              <CardContent className="p-0">
                <Accordion type="single" collapsible>
                  <AccordionItem value={`masonry-${item}`} className="border-0">
                    <AccordionTrigger>
                      Masonry Item {item}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="p text-muted-foreground">
                        Variable height content works well in masonry layouts.
                      </p>

                      {item % 2 === 0 && (
                        <div className="space-y-2">
                          <Badge variant="outline">Insight</Badge>
                          <Badge variant="secondary">Performance</Badge>
                        </div>
                      )}

                      {item === 3 && (
                        <div className="space-y-3">
                          <p className="p-sm text-muted-foreground">
                            This example includes additional explanatory content to
                            simulate uneven heights between columns.
                          </p>
                          <Button variant="ghost" size="sm">
                            View details
                          </Button>
                        </div>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>


      {/* ===================================================== */}
      {/* 4. ACCORDION TYPE EXPLAINERS */}
      {/* ===================================================== */}
      <section className="space-y-10">
        <div className="space-y-2">
          <h2 className="h2">Use Cases</h2>
          <p className="p text-muted-foreground">
            Examples of surface-aware and dashboard-integrated accordion variants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Surface Aware */}
          <Card level={0}>
            <CardContent className="p-6 space-y-4">
              <div className="label-md">Surface-Aware Accordion</div>
              <p className="p text-muted-foreground">
                Automatically adjusts elevation and borders based on background level.
                Use in complex layouts with layered surfaces.
              </p>
              <Accordion type="single" collapsible>
                <AccordionItem value="surface" className="border-b border-border-subtle">
                  <AccordionTrigger>
                    Expand Surface Example
                  </AccordionTrigger>
                  <AccordionContent>
                    Content adapts to its surface depth.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Contained Elevated */}
          <Card level={1}>
            <CardContent className="p-6 space-y-4">
              <div className="label-md">Contained Elevated Accordion</div>
              <p className="p text-muted-foreground">
                Used inside cards for grouped configurations.
                Full-width separators and shared elevation.
              </p>
              <Accordion type="single" collapsible>
                <AccordionItem value="contained" className="border-b border-border-subtle">
                  <AccordionTrigger>
                    Expand Contained Example
                  </AccordionTrigger>
                  <AccordionContent>
                    Ideal for settings clusters and admin panels.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Dashboard Stat Accordion */}
          <Card level={1}>
            <CardContent className="p-6 space-y-4">
              <div className="label-md">Dashboard Stat Accordion</div>
              <p className="p text-muted-foreground">
                Combine stats and expandable analytics for dashboards.
              </p>
              <Accordion type="single" collapsible>
                <AccordionItem value="stat" className="border-b border-border-subtle">
                  <AccordionTrigger>
                    <span className="flex items-center gap-3">
                      <BarChart3 className="size-4 text-muted-foreground" />
                      Fraud Rate
                      <Badge variant="secondary">↓ 3%</Badge>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    Detailed breakdown by region, payment method, and device type.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

        </div>
        <AccordionGroup
          type="single"
          collapsible
          size="md"
          headerTitle="Why Your Orders Failed"
          headerSubtitle="Understanding failed order reasons can highlight emerging fraud trends"
        >
          <AccordionItem value="velocity">
            <AccordionTrigger>
              <div className="flex w-full items-start justify-between gap-6 text-left">
                <div className="space-y-2">
                  <div className="space-y-1">
                    <div className="label-md">Card usage high velocity</div>
                    <div className="p-sm text-muted-foreground">Checks payment method used</div>
                  </div>
                </div>
                <div className="flex flex-col items-end space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="label-md text-destructive-foreground">33%</div>
                    <div className="w-20 h-1.5 rounded-full bg-destructive/40 shadow-inner overflow-hidden">
                      <div
                        className="h-full rounded-full bg-destructive-foreground transition-[width] duration-700 ease-out"
                        style={{ width: "33%" }}
                      />
                    </div>
                  </div>
                  <div className="p-sm text-muted-foreground">1,234 orders</div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <div>
                  <div className="label-sm text-muted-foreground">Contribution</div>
                  <p>
                    High velocity detected from multiple transactions using the same card
                    within a short timeframe. This pattern is commonly associated with
                    automated fraud attempts or card testing behavior.
                  </p>
                </div>

                <div>
                  <div className="label-sm text-muted-foreground">What this checks</div>
                  <p>
                    Monitors the frequency of transactions from a single payment method
                    across configurable time windows.
                  </p>
                </div>

                <div>
                  <div className="label-sm text-muted-foreground">Data evaluated</div>
                  <p>Card ending in 6180</p>
                </div>

                <Button variant="link" size="sm" className="px-0">
                  View orders flagged by this factor
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="avs">
            <AccordionTrigger>
              <div className="flex w-full items-start justify-between gap-6 text-left">
                <div className="space-y-2">
                  <div className="space-y-1">
                    <div className="label-md">Address verification mismatch</div>
                    <div className="p-sm text-muted-foreground">Checks billing and shipping addresses</div>
                  </div>
                </div>
                <div className="flex flex-col items-end space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="label-md text-destructive-foreground">16%</div>
                    <div className="w-20 h-1.5 rounded-full bg-destructive/40 shadow-inner overflow-hidden">
                      <div
                        className="h-full rounded-full bg-destructive-foreground transition-[width] duration-700 ease-out"
                        style={{ width: "16%" }}
                      />
                    </div>
                  </div>
                  <div className="p-sm text-muted-foreground">842 orders</div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <div>
                  <div className="label-sm text-muted-foreground">Contribution</div>
                  <p>
                    Billing address provided did not match the issuing bank’s records, increasing the likelihood of unauthorized card usage.
                  </p>
                </div>

                <div>
                  <div className="label-sm text-muted-foreground">What this checks</div>
                  <p>
                    Compares customer-submitted billing address details against issuer response codes during authorization.
                  </p>
                </div>

                <div>
                  <div className="label-sm text-muted-foreground">Data evaluated</div>
                  <p>ZIP code and street match response (AVS code N)</p>
                </div>

                <Button variant="link" size="sm" className="px-0">
                  View orders flagged by this factor
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="cvv">
            <AccordionTrigger>
              <div className="flex w-full items-start justify-between gap-6 text-left">
                <div className="space-y-2">
                  <div className="space-y-1">
                    <div className="label-md">CVV verification failure</div>
                    <div className="p-sm text-muted-foreground">Checks card security code validation</div>
                  </div>
                </div>
                <div className="flex flex-col items-end space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="label-md text-destructive-foreground">14%</div>
                    <div className="w-20 h-1.5 rounded-full bg-destructive/40 shadow-inner overflow-hidden">
                      <div
                        className="h-full rounded-full bg-destructive-foreground transition-[width] duration-700 ease-out"
                        style={{ width: "14%" }}
                      />
                    </div>
                  </div>
                  <div className="p-sm text-muted-foreground">765 orders</div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <div>
                  <div className="label-sm text-muted-foreground">Contribution</div>
                  <p>
                    Card security code mismatch indicates potential use of stolen or compromised card credentials.
                  </p>
                </div>

                <div>
                  <div className="label-sm text-muted-foreground">What this checks</div>
                  <p>
                    Validates the CVV value submitted during checkout against issuer verification results.
                  </p>
                </div>

                <div>
                  <div className="label-sm text-muted-foreground">Data evaluated</div>
                  <p>CVV response code Mismatch</p>
                </div>

                <Button variant="link" size="sm" className="px-0">
                  View orders flagged by this factor
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="ip">
            <AccordionTrigger>
              <div className="flex w-full items-start justify-between gap-6 text-left">
                <div className="space-y-2">
                  <div className="space-y-1">
                    <div className="label-md">IP risk signal</div>
                    <div className="p-sm text-muted-foreground">Checks network and geolocation signals</div>
                  </div>
                </div>
                <div className="flex flex-col items-end space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="label-md text-destructive-foreground">12%</div>
                    <div className="w-20 h-1.5 rounded-full bg-destructive/40 shadow-inner overflow-hidden">
                      <div
                        className="h-full rounded-full bg-destructive-foreground transition-[width] duration-700 ease-out"
                        style={{ width: "12%" }}
                      />
                    </div>
                  </div>
                  <div className="p-sm text-muted-foreground">640 orders</div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <div>
                  <div className="label-sm text-muted-foreground">Contribution</div>
                  <p>
                    The customer’s IP address was associated with proxy routing, abnormal geolocation, or previously identified high-risk activity.
                  </p>
                </div>

                <div>
                  <div className="label-sm text-muted-foreground">What this checks</div>
                  <p>
                    Analyzes IP reputation, proxy usage, velocity across accounts, and geographic anomalies.
                  </p>
                </div>

                <div>
                  <div className="label-sm text-muted-foreground">Data evaluated</div>
                  <p>IP address 185.203.119.42 (High Risk)</p>
                </div>

                <Button variant="link" size="sm" className="px-0">
                  View orders flagged by this factor
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="device">
            <AccordionTrigger>
              <div className="flex w-full items-start justify-between gap-6 text-left">
                <div className="space-y-2">
                  <div className="space-y-1">
                    <div className="label-md">Device fingerprint mismatch</div>
                    <div className="p-sm text-muted-foreground">Checks device identity consistency</div>
                  </div>
                </div>
                <div className="flex flex-col items-end space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="label-md text-destructive-foreground">10%</div>
                    <div className="w-20 h-1.5 rounded-full bg-destructive/40 shadow-inner overflow-hidden">
                      <div
                        className="h-full rounded-full bg-destructive-foreground transition-[width] duration-700 ease-out"
                        style={{ width: "10%" }}
                      />
                    </div>
                  </div>
                  <div className="p-sm text-muted-foreground">512 orders</div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <div>
                  <div className="label-sm text-muted-foreground">Contribution</div>
                  <p>
                    Device fingerprint characteristics did not align with the customer’s trusted historical activity.
                  </p>
                </div>

                <div>
                  <div className="label-sm text-muted-foreground">What this checks</div>
                  <p>
                    Compares device attributes such as browser version, OS, timezone, and hardware signature against known safe sessions.
                  </p>
                </div>

                <div>
                  <div className="label-sm text-muted-foreground">Data evaluated</div>
                  <p>New device signature – no historical match</p>
                </div>

                <Button variant="link" size="sm" className="px-0">
                  View orders flagged by this factor
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>
        </AccordionGroup>
      </section>
    {/* ===================================================== */}
    {/* PROPS API REFERENCE */}
    {/* ===================================================== */}
    <section className="space-y-6">
      <div className="space-y-2">
        <h2 className="h2">Component API</h2>
        <p className="p text-muted-foreground">
          Core props available on the Accordion component.
        </p>
      </div>

      <Card level={0}>
        <CardContent className="p-6 space-y-6">
          <div>
            <div className="label-md">Accordion</div>
            <ul className="p-sm text-muted-foreground space-y-2 list-disc pl-5">
              <li><strong>type</strong>: "single" | "multiple"</li>
              <li><strong>collapsible</strong>: boolean</li>
              <li><strong>size</strong>: "sm" | "md" | "lg"</li>
              <li><strong>variant</strong>: "line" | "card" (card groups should use the AccordionGroup convenience wrapper)</li>
            </ul>
          </div>

          <div>
            <div className="label-md">AccordionTrigger</div>
            <ul className="p-sm text-muted-foreground space-y-2 list-disc pl-5">
              <li><strong>subtitle</strong>: string (optional)</li>
              <li><strong>icon</strong>: ReactNode (optional)</li>
              <li><strong>chevronPosition</strong>: "left" | "right"</li>
            </ul>
          </div>

          <div>
            <div className="label-md">AccordionContent</div>
            <ul className="p-sm text-muted-foreground space-y-2 list-disc pl-5">
              <li>Accepts any content (text, media, forms, tables, nested accordions)</li>
              <li>Automatically scales typography by size</li>
            </ul>
          </div>

          <div>
            <div className="label-md">AccordionGroup</div>
            <ul className="p-sm text-muted-foreground space-y-2 list-disc pl-5">
              <li>Convenience wrapper for grouped card accordions</li>
              <li>Ensures consistent borders, separators, and shared elevation</li>
              <li>Accepts the same props as Accordion</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </section>
    </div>
  )
}