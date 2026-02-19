"use client"

import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "@/components/ui/data-table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table as TableIcon } from "lucide-react"

type Payment = {
  status: "pending" | "processing" | "success" | "failed"
  email: string
  amount: number
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

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const value = row.getValue("status") as Payment["status"]

      return <Badge variant="secondary">{value}</Badge>
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
    </div>
  )
}