"use client"

import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "@/components/ui/data-table"
import { StatusBadge } from "@/lib/status"
import { Button } from "@/components/ui/button"
import { Table as TableIcon } from "lucide-react"

type Payment = {
  status: "pending" | "processing" | "success" | "failed"
  email: string
  amount: number
}

type ServiceRow = {
  service: string
  usageCost: number
  credits: number | null
  chargebacks: number | null
  subtotal: number
  percentChange: number
  children?: ServiceRow[]
}

const data: Payment[] = Array.from({ length: 25 }).map((_, i) => {
  const statuses: Payment["status"][] = [
    "pending",
    "processing",
    "success",
    "failed",
  ]

  return {
    status: statuses[i % statuses.length],
    email: `user${i + 1}@example.com`,
    amount: Math.floor(Math.random() * 5000) + 25,
  }
})

const serviceData: ServiceRow[] = [
  {
    service: "Fraud Detection",
    usageCost: 6453.74,
    credits: null,
    chargebacks: null,
    subtotal: 6453.74,
    percentChange: 1,
    children: [
      {
        service: "United States",
        usageCost: 4517.62,
        credits: null,
        chargebacks: null,
        subtotal: 4517.62,
        percentChange: 0,
      },
      {
        service: "European Union",
        usageCost: 1290.75,
        credits: null,
        chargebacks: null,
        subtotal: 1290.75,
        percentChange: 0,
      },
      {
        service: "Other",
        usageCost: 645.37,
        credits: null,
        chargebacks: null,
        subtotal: 645.37,
        percentChange: 0,
      },
    ],
  },
  {
    service: "Chargeback Protection",
    usageCost: 2411.9,
    credits: -7.49,
    chargebacks: -50,
    subtotal: 2354.41,
    percentChange: 6,
    children: [
      {
        service: "United States",
        usageCost: 1688.33,
        credits: -5.24,
        chargebacks: -35,
        subtotal: 1648.09,
        percentChange: 0,
      },
      {
        service: "European Union",
        usageCost: 482.38,
        credits: -1.5,
        chargebacks: -10,
        subtotal: 470.88,
        percentChange: 0,
      },
      {
        service: "Other",
        usageCost: 241.19,
        credits: -0.75,
        chargebacks: -5,
        subtotal: 235.44,
        percentChange: 0,
      },
    ],
  },
  {
    service: "Account Screening",
    usageCost: 306.16,
    credits: null,
    chargebacks: -25,
    subtotal: 281.16,
    percentChange: 184,
  },
  {
    service: "Total",
    usageCost: 9171.8,
    credits: -7.49,
    chargebacks: -75,
    subtotal: 9089.31,
    percentChange: 0,
  },
]

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const value = row.getValue("status") as Payment["status"]
      return <StatusBadge status={value} />
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      const value = row.getValue("amount") as number
      return <div className="text-right">${value.toFixed(2)}</div>
    },
  },
]

const serviceColumns: ColumnDef<ServiceRow>[] = [
  {
    accessorKey: "service",
    header: "Service",
  },
  {
    accessorKey: "usageCost",
    header: () => <div className="text-right">Usage Cost</div>,
    cell: ({ row }) => {
      const value = row.getValue("usageCost") as number
      return <div className="text-right">${value.toFixed(2)}</div>
    },
  },
  {
    accessorKey: "credits",
    header: () => <div className="text-right">Credits</div>,
    cell: ({ row }) => {
      const value = row.getValue("credits") as number | null
      return (
        <div className="text-right">
          {value !== null ? `$${value.toFixed(2)}` : "—"}
        </div>
      )
    },
  },
  {
    accessorKey: "chargebacks",
    header: () => <div className="text-right">Chargebacks</div>,
    cell: ({ row }) => {
      const value = row.getValue("chargebacks") as number | null
      return (
        <div className="text-right">
          {value !== null ? `$${value.toFixed(2)}` : "—"}
        </div>
      )
    },
  },
  {
    accessorKey: "subtotal",
    header: () => <div className="text-right">Subtotal</div>,
    cell: ({ row }) => {
      const value = row.getValue("subtotal") as number
      return <div className="text-right">${value.toFixed(2)}</div>
    },
  },
  {
    accessorKey: "percentChange",
    header: () => <div className="text-right">% Change</div>,
    cell: ({ row }) => {
      const value = row.getValue("percentChange") as number
      return <div className="text-right">{value !== 0 ? `${value}%` : "—"}</div>
    },
  },
]

export default function DataTablePage() {
  return (
    <div className="space-y-6">
      <h1 className="h1">Data Table</h1>
      <p className="p text-muted-foreground">
        Advanced table with all optional controls enabled.
      </p>

      <DataTable
        columns={columns}
        data={data}
        title="Payments"
        description="Manage and review incoming payments."
        icon={<TableIcon className="h-5 w-5" />}
        actions={
          <>
            <Button variant="outline" size="md">
              Secondary Action
            </Button>
            <Button variant="primary" size="md">
              Primary Action
            </Button>
          </>
        }
        enableSearch
        enableFilters
        enableColumnVisibility
        pageSizeOptions={[10, 20, 50]}
      />

      <DataTable
        columns={serviceColumns}
        data={serviceData}
        title="Itemized Usage by Service"
        description="Breakdown of usage by product and region."
        icon={<TableIcon className="h-5 w-5" />}
        enableExpansion
        expansionVariant="nested"
        getSubRows={(row) => row.children ?? []}
        enableFooter
      />
    </div>
  )
}