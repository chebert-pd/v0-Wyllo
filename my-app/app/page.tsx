"use client"
import { Button } from "@/components/ui/button"
import { Alert, AlertTitle, AlertDescription, AlertAction } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2Icon, AlertCircleIcon, AlertTriangleIcon, ChevronUp, ChevronDown } from "lucide-react"

import React, { useEffect, useState } from "react"

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  SortingState,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldGroup,
} from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Combobox } from "@/components/ui/combobox"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"


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

  type Payment = {
    id: string
    amount: number
    status: "pending" | "processing" | "success" | "failed"
    email: string
  }

  const data = React.useMemo<Payment[]>(
    () => [
      { id: "728ed52f", amount: 100, status: "pending", email: "m@example.com" },
      { id: "489e1d42", amount: 125, status: "processing", email: "example@gmail.com" },
      { id: "8392ab21", amount: 230, status: "success", email: "cass@company.com" },
      { id: "aa12bb45", amount: 75, status: "failed", email: "fail@test.com" },
      { id: "bb23cc56", amount: 180, status: "success", email: "hello@world.com" },
      { id: "cc34dd67", amount: 95, status: "pending", email: "pending@test.com" },
      { id: "dd45ee78", amount: 310, status: "processing", email: "process@demo.com" },
      { id: "ee56ff89", amount: 45, status: "failed", email: "oops@fail.com" },
      { id: "ff67gg90", amount: 220, status: "success", email: "success@demo.com" },
      { id: "gg78hh01", amount: 150, status: "pending", email: "another@test.com" },
      { id: "hh89ii12", amount: 260, status: "processing", email: "table@demo.com" },
      { id: "ii90jj23", amount: 130, status: "failed", email: "broken@test.com" },
    ],
    []
  )

  const [sorting, setSorting] = useState<SortingState>([])
  const [rowSelection, setRowSelection] = useState({})

  const columns = React.useMemo<ColumnDef<Payment>[]>(
    () => [
      {
        id: "select",
        header: ({ table }) => {
          const isAllSelected = table.getIsAllPageRowsSelected()
          const isSomeSelected = table.getIsSomePageRowsSelected()

          return (
            <Checkbox
              checked={
                isAllSelected
                  ? true
                  : isSomeSelected
                  ? "indeterminate"
                  : false
              }
              onCheckedChange={(value) =>
                table.toggleAllPageRowsSelected(!!value)
              }
              aria-label="Select all"
            />
          )
        },
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        ),
        enableSorting: false,
        enableHiding: false,
      },
      {
        accessorKey: "status",
        size: 140,
        header: ({ column }) => {
          const isSorted = column.getIsSorted()

          return (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => column.toggleSorting(isSorted === "asc")}
              className="w-full h-auto px-0 py-0 label-md hover:bg-transparent justify-between text-left"
            >
              Status
              <div className="ml-2 flex h-4 w-4 shrink-0 flex-col items-center justify-center leading-none">
                <ChevronUp
                  className={`h-2.5 w-2.5 ${
                    isSorted === "asc"
                      ? "text-foreground opacity-100"
                      : "opacity-30"
                  }`}
                />
                <ChevronDown
                  className={`h-2.5 w-2.5 -mt-1.5 ${
                    isSorted === "desc"
                      ? "text-foreground opacity-100"
                      : "opacity-30"
                  }`}
                />
              </div>
            </Button>
          )
        },
        cell: ({ row }) => {
          const value = row.getValue("status") as Payment["status"]

          const variantMap: Record<Payment["status"], "success" | "warning" | "info" | "destructive"> = {
            success: "success",
            failed: "destructive",
            pending: "warning",
            processing: "info",
          }

          return (
            <div className="truncate">
              <Badge variant={variantMap[value]} className="label-sm" title={value}>
                {value}
              </Badge>
            </div>
          )
        },
      },
      {
        accessorKey: "email",
        size: 280,
        header: ({ column }) => {
          const isSorted = column.getIsSorted()

          return (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => column.toggleSorting(isSorted === "asc")}
              className="w-full h-auto px-0 py-0 label-md hover:bg-transparent justify-between text-left"
            >
              Email
              <div className="ml-2 flex h-4 w-4 shrink-0 flex-col items-center justify-center leading-none">
                <ChevronUp
                  className={`h-2.5 w-2.5 ${
                    isSorted === "asc"
                      ? "text-foreground opacity-100"
                      : "opacity-30"
                  }`}
                />
                <ChevronDown
                  className={`h-2.5 w-2.5 -mt-1.5 ${
                    isSorted === "desc"
                      ? "text-foreground opacity-100"
                      : "opacity-30"
                  }`}
                />
              </div>
            </Button>
          )
        },
        cell: ({ row }) => (
          <span
            className="body block truncate"
            title={String(row.getValue("email"))}
          >
            {row.getValue("email")}
          </span>
        ),
      },
      {
        accessorKey: "amount",
        size: 140,
        header: ({ column }) => {
          const isSorted = column.getIsSorted()

          return (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => column.toggleSorting(isSorted === "asc")}
              className="w-full h-auto px-0 py-0 label-md hover:bg-transparent justify-end gap-2 text-right"
            >
              Amount
              <div className="ml-2 flex h-4 w-4 shrink-0 flex-col items-center justify-center leading-none">
                <ChevronUp
                  className={`h-2.5 w-2.5 ${
                    isSorted === "asc"
                      ? "text-foreground opacity-100"
                      : "opacity-30"
                  }`}
                />
                <ChevronDown
                  className={`h-2.5 w-2.5 -mt-1.5 ${
                    isSorted === "desc"
                      ? "text-foreground opacity-100"
                      : "opacity-30"
                  }`}
                />
              </div>
            </Button>
          )
        },
        cell: ({ row }) => {
          const amount = parseFloat(row.getValue("amount"))
          const formatted = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(amount)
          return (
            <span
              className="body block truncate text-right"
              title={formatted}
            >
              {formatted}
            </span>
          )
        },
      },
    ],
    []
  )

  const table = useReactTable({
    data,
    columns,
    enableRowSelection: true,
    state: { sorting, rowSelection },
    onSortingChange: setSorting,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
  })

  return (
    <div className="mx-auto max-w-7xl p-10 space-y-16">
      <h1 className="h1">Button System Gallery</h1>
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
        <h2 className="h2">Text Buttons</h2>
        <p className="body text-muted-foreground">
          Standard buttons with text content. Shows every variant and size.
        </p>

        {variants.map((variant) => (
          <div key={variant} className="space-y-2">
            <h3 className="h3">Variant: {variant}</h3>
            <div className="flex flex-wrap gap-4">
              {sizes.map((size) => (
                <div key={size} className="flex flex-col items-start gap-1">
                  <Button variant={variant} size={size}>
                    {variant} / {size}
                  </Button>
                  <span className="label-sm text-muted-foreground">
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
        <h2 className="h2">Icon + Text Buttons</h2>
        <p className="body text-muted-foreground">
          Buttons with a leading icon and text label.
        </p>

        {variants.map((variant) => (
          <div key={variant} className="space-y-2">
            <h3 className="h3">Variant: {variant}</h3>
            <div className="flex flex-wrap gap-4">
              {sizes.map((size) => (
                <div key={size} className="flex flex-col items-start gap-1">
                  <Button variant={variant} size={size}>
                    <DemoIcon />
                    {variant} / {size}
                  </Button>
                  <span className="label-sm text-muted-foreground">
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
        <h2 className="h2">Icon Only Buttons</h2>
        <p className="body text-muted-foreground">
          Square buttons. Icon size scales with button size (16px for xs/sm,
          20px for md/lg).
        </p>

        {variants.map((variant) => (
          <div key={variant} className="space-y-2">
            <h3 className="h3">Variant: {variant}</h3>
            <div className="flex flex-wrap gap-4">
              {sizes.map((size) => (
                <div key={size} className="flex flex-col items-center gap-1">
                  <Button variant={variant} size={size} iconOnly>
                    <DemoIcon />
                  </Button>
                  <span className="label-sm text-muted-foreground text-center whitespace-pre-line">
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
        <h2 className="h2">State Examples</h2>
        <p className="body text-muted-foreground">
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

      {/* TYPOGRAPHY PREVIEW */}
      <section className="space-y-6">
        <h2 className="h2">Typography</h2>

        {/* Headings */}
        <div className="space-y-2">
          <h1 className="h1">Heading 1 — .h1</h1>
          <h2 className="h2">Heading 2 — .h2</h2>
          <h3 className="h3">Heading 3 — .h3</h3>
          <h4 className="h4">Heading 4 — .h4</h4>
        </div>

        {/* Body */}
        <div className="space-y-2">
          <p className="body-lg">Body Large — .body-lg</p>
          <p className="body">Body Default — .body</p>
          <p className="body-sm">Body Small — .body-sm</p>
        </div>

        {/* Labels */}
        <div className="space-y-2">
          <div className="label-lg">Label Large — .label-lg</div>
          <div className="label-md">Label Medium — .label-md</div>
          <div className="label-sm">Label Small — .label-sm</div>
        </div>

        {/* Data */}
        <div className="space-y-2">
          <div className="data-lg">12,490</div>
          <div className="data-md">4,320</div>
          <div className="data-sm">982</div>
        </div>
      </section>

      {/* ALERT + BADGE PREVIEW */}
      <section className="space-y-6">
        <h2 className="h2">Alert + Badge Preview</h2>
        <p className="body text-muted-foreground">
          Success (emerald), warning (amber), info (cyan), and destructive (rose) using semantic tokens.
        </p>

        <div className="space-y-4">
          {/* BASIC */}
          <Alert>
            <CheckCircle2Icon className="h-4 w-4" />
            <AlertTitle className="label-md">Account updated successfully</AlertTitle>
            <AlertDescription>
              Your profile information has been saved. Changes will be reflected immediately.
            </AlertDescription>
          </Alert>

          {/* DESTRUCTIVE */}
          <Alert variant="destructive">
            <AlertCircleIcon className="h-4 w-4" />
            <AlertTitle className="label-md">Payment failed</AlertTitle>
            <AlertDescription>
              Your payment could not be processed. Please check your payment method and try again.
            </AlertDescription>
          </Alert>

          {/* ACTION */}
          <Alert>
            <AlertTriangleIcon className="h-4 w-4" />
            <AlertTitle className="label-md">Dark mode is now available</AlertTitle>
            <AlertDescription>
              Enable it under your profile settings to get started.
            </AlertDescription>
            <AlertAction>
              <Button variant="outline" size="xs">Enable</Button>
            </AlertAction>
          </Alert>
        </div>

        <div className="flex gap-4 flex-wrap">
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="info">Info</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      </section>

      {/* MUTED UTILITY COLOR SCALES */}
      <section className="space-y-8">
        <h2 className="h2">Muted Utility Color Scales</h2>
        <p className="body text-muted-foreground">
          Preview of muted success (green), warning (amber), info (blue), and destructive (red) scales.
        </p>

        {[
          {
            label: "Green",
            values: [
              "oklch(0.97 0.02 160)",
              "oklch(0.92 0.04 160)",
              "oklch(0.82 0.07 160)",
              "oklch(0.72 0.10 160)",
              "oklch(0.62 0.14 160)",
              "oklch(0.52 0.12 160)",
              "oklch(0.42 0.10 160)",
              "oklch(0.32 0.09 160)",
              "oklch(0.22 0.08 160)",
            ],
          },
          {
            label: "Amber",
            values: [
              "oklch(0.97 0.03 85)",
              "oklch(0.92 0.05 85)",
              "oklch(0.82 0.09 85)",
              "oklch(0.72 0.12 85)",
              "oklch(0.62 0.14 85)",
              "oklch(0.52 0.12 85)",
              "oklch(0.42 0.10 85)",
              "oklch(0.32 0.09 85)",
              "oklch(0.22 0.08 85)",
            ],
          },
          {
            label: "Blue",
            values: [
              "oklch(0.97 0.02 240)",
              "oklch(0.92 0.04 240)",
              "oklch(0.82 0.08 240)",
              "oklch(0.72 0.12 240)",
              "oklch(0.62 0.15 240)",
              "oklch(0.52 0.13 240)",
              "oklch(0.42 0.11 240)",
              "oklch(0.32 0.10 240)",
              "oklch(0.22 0.09 240)",
            ],
          },
          {
            label: "Red",
            values: [
              "oklch(0.97 0.03 25)",
              "oklch(0.92 0.05 25)",
              "oklch(0.82 0.09 25)",
              "oklch(0.72 0.14 25)",
              "oklch(0.62 0.18 25)",
              "oklch(0.52 0.16 25)",
              "oklch(0.42 0.14 25)",
              "oklch(0.32 0.13 25)",
              "oklch(0.22 0.12 25)",
            ],
          },
        ].map((scale) => (
          <div key={scale.label} className="space-y-2">
            <h3 className="h3">{scale.label}</h3>
            <div className="flex flex-wrap gap-4">
              {scale.values.map((value) => (
                <div key={value} className="flex flex-col items-center gap-1">
                  <div
                    className="h-16 w-24 rounded-md border"
                    style={{ backgroundColor: value }}
                  />
                  <span className="label-sm text-muted-foreground text-center">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* CREATE MERCHANT WORKSPACE */}
      <section className="space-y-8 max-w-2xl">
        <h2 className="h2">Create Merchant Workspace</h2>
        <p className="body text-muted-foreground">
          Merchant onboarding form reflecting CS integration and portal setup requirements.
        </p>

        <FieldGroup className="space-y-6">
          {/* Basic Info */}
          <div className="space-y-4">
            <h3 className="h3">Basic Info</h3>

            <Field className="space-y-2">
              <FieldLabel className="label-md">Merchant Name</FieldLabel>
              <Input placeholder="Acme Co." className="body" />
            </Field>

            <Field className="space-y-2">
              <FieldLabel className="label-md">Billing Address</FieldLabel>
              <Input placeholder="123 Market St" className="body" />
              <FieldDescription className="body-sm text-muted-foreground">
                Used for invoicing and contract documentation.
              </FieldDescription>
            </Field>

            <Field className="space-y-2">
              <FieldLabel className="label-md">Phone Number</FieldLabel>
              <Input placeholder="(555) 123-4567" className="body" />
            </Field>

            <Field className="space-y-2">
              <FieldLabel className="label-md">Email Address</FieldLabel>
              <Input placeholder="merchant@company.com" className="body" />
            </Field>

            <div className="border-t pt-6" />
          </div>

          {/* CSM Checklist */}
          <div className="space-y-4">
            <h3 className="h3">CSM Checklist</h3>

            <Field className="space-y-2">
              <FieldLabel className="label-md">Industry / Descriptor</FieldLabel>
              <Combobox
                options={[
                  { label: "Retail", value: "retail" },
                  { label: "Digital Goods", value: "digital-goods" },
                  { label: "SaaS", value: "saas" },
                  { label: "Travel", value: "travel" },
                ]}
                placeholder="Select industry"
                className="body"
              />
            </Field>

            <div className="space-y-3">
              {[
                { label: "Selling Digital Gift Cards", value: "giftcards" },
                { label: "Accepting Phone Orders", value: "phone-orders" },
                { label: "Buy Online Pickup In Store (BOPIS)", value: "bopis" },
              ].map((item) => (
                <label
                  key={item.value}
                  className="flex items-start gap-3 border rounded-[var(--radius)] p-4 cursor-pointer"
                >
                  <Checkbox />
                  <span className="body">{item.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Portal Setup */}
          <div className="space-y-4">
            <h3 className="h3">Portal Setup</h3>
            <h4 className="h4">Set up how the product will work</h4>

            <Field className="space-y-3">
              <FieldLabel className="label-md">Payment Method Type</FieldLabel>
              <ToggleGroup type="single" className="flex gap-2">
                <ToggleGroupItem value="credit-card">Credit Card</ToggleGroupItem>
                <ToggleGroupItem value="ach">ACH</ToggleGroupItem>
                <ToggleGroupItem value="wire">Wire</ToggleGroupItem>
              </ToggleGroup>
              {/* Example conditional inputs */}
              <div className="space-y-2">
                <Input placeholder="Account Number" className="body" />
                <Input placeholder="Routing Number" className="body" />
              </div>
            </Field>

            <Field className="space-y-2">
              <FieldLabel className="label-md">Product Category</FieldLabel>
              <Combobox
                options={[
                  { label: "Apparel", value: "apparel" },
                  { label: "Electronics", value: "electronics" },
                  { label: "Home Goods", value: "home" },
                ]}
                placeholder="Select category"
                className="body"
              />
            </Field>

            <Field className="space-y-2">
              <FieldLabel className="label-md">Product Subcategory</FieldLabel>
              <Combobox
                options={[
                  { label: "Men's", value: "mens" },
                  { label: "Women's", value: "womens" },
                  { label: "Accessories", value: "accessories" },
                ]}
                placeholder="Select subcategory"
                className="body"
              />
            </Field>
          </div>

          {/* Chargeback Product Selection */}
          <div className="space-y-3">
            <h3 className="h3">Chargeback Product</h3>
            <RadioGroup defaultValue="none" className="space-y-3">
              {[
                { label: "None", value: "none" },
                { label: "Chargeback Management", value: "management" },
                { label: "Chargeback Protection", value: "protection" },
              ].map((item) => (
                <label
                  key={item.value}
                  className="flex items-start gap-3 border rounded-[var(--radius)] p-4 cursor-pointer"
                >
                  <RadioGroupItem value={item.value} />
                  <span className="body">{item.label}</span>
                </label>
              ))}
            </RadioGroup>
          </div>

          <div className="flex gap-4 pt-4">
            <Button variant="primary">Create Merchant</Button>
            <Button variant="outline">Cancel</Button>
          </div>
        </FieldGroup>
      </section>

      {/* DATA TABLE */}
      <section className="space-y-6">
        <h2 className="h2">Data Table</h2>
        <p className="body text-muted-foreground">
          Table with search, sorting, pagination, and row selection.
        </p>



        <div className="overflow-hidden rounded-md border">
          <Table className="table-fixed w-full">
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead
                      key={header.id}
                      className={`px-4 py-2 align-middle ${header.id === "amount" ? "text-right" : ""}`}
                      style={{ width: header.id === "select" ? 48 : undefined }}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} className="px-4 py-2 align-middle truncate">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center body-sm text-muted-foreground">
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        <div className="flex items-center justify-between py-4">
          <div className="body-sm text-muted-foreground">
            {table.getFilteredSelectedRowModel().rows.length} of {table.getFilteredRowModel().rows.length} row(s) selected.
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}