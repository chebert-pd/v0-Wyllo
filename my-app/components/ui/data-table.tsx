"use client"

import * as React from "react"
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table"

import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ChevronUp, ChevronDown } from "lucide-react"

type DataTableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]

  /** Optional UI slots */
  icon?: React.ReactNode
  title?: string
  description?: string
  actions?: React.ReactNode
  tabs?: React.ReactNode
  columnVisibilityControl?: React.ReactNode
  filterTrigger?: React.ReactNode
  appliedFilters?: React.ReactNode

  /** Feature flags */
  enableSearch?: boolean
  enableSorting?: boolean
  enablePagination?: boolean
}

export function DataTable<TData, TValue>({
  columns = [],
  data = [],
  icon,
  title,
  description,
  actions,
  tabs,
  columnVisibilityControl,
  filterTrigger,
  appliedFilters,
  enableSearch = true,
  enableSorting = true,
  enablePagination = true,
  
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [globalFilter, setGlobalFilter] = React.useState("")

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      globalFilter,
    },
    onSortingChange: enableSorting ? setSorting : undefined,
    onGlobalFilterChange: enableSearch ? setGlobalFilter : undefined,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: enableSearch ? getFilteredRowModel() : undefined,
    getSortedRowModel: enableSorting ? getSortedRowModel() : undefined,
    getPaginationRowModel: enablePagination
      ? getPaginationRowModel()
      : undefined,
  })

  return (
    <Card className="p-6 space-y-8">
      {/* HEADER */}
      <div className="flex items-start justify-between gap-6">
        <div className="flex items-start gap-3">
          {icon && <div className="mt-1">{icon}</div>}
          <div className="space-y-1">
            {title && <h2 className="h2">{title}</h2>}
            {description && (
              <p className="p text-muted-foreground">{description}</p>
            )}
          </div>
        </div>
        {actions && (
          <div className="flex items-center gap-2">
            {actions}
          </div>
        )}
      </div>

      {/* TABS */}
      {tabs && <div>{tabs}</div>}

      {/* CONTROLS ROW */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          {filterTrigger ?? (
            <Button variant="outline" size="md">
              Filter
            </Button>
          )}

          {enableSearch && (
            <Input
              placeholder="Search..."
              value={globalFilter ?? ""}
              onChange={(e) => setGlobalFilter(e.target.value)}
              className="flex-1 p"
            />
          )}

          {columnVisibilityControl ?? (
            <Button variant="outline" size="md">
              Columns
            </Button>
          )}
        </div>

        {appliedFilters && (
          <div className="flex flex-wrap items-center gap-2">
            {appliedFilters}
          </div>
        )}
      </div>

      {/* TABLE */}
      <div className="space-y-0">
        <Table className="table-fixed w-full">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className={cn(
                      "px-4 py-2 align-middle label-md",
                      header.column.getCanSort() && "cursor-pointer select-none"
                    )}
                    onClick={
                      enableSorting
                        ? header.column.getToggleSortingHandler()
                        : undefined
                    }
                  >
                    {header.isPlaceholder ? null : (
                      <div className="flex items-center gap-1">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {enableSorting && header.column.getCanSort() && (
                          <span className="flex flex-col leading-none">
                            <ChevronUp
                              className={cn(
                                "h-3 w-3 transition-opacity",
                                header.column.getIsSorted() === "asc"
                                  ? "opacity-100 text-foreground"
                                  : "opacity-30"
                              )}
                            />
                            <ChevronDown
                              className={cn(
                                "h-3 w-3 -mt-1 transition-opacity",
                                header.column.getIsSorted() === "desc"
                                  ? "opacity-100 text-foreground"
                                  : "opacity-30"
                              )}
                            />
                          </span>
                        )}
                      </div>
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className="px-4 py-2 align-middle p"
                    >
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
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center p-sm text-muted-foreground"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* FOOTER */}
      {enablePagination && (
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="p-sm text-muted-foreground">
              Rows per page:
            </span>

            <select
              className="h-8 rounded-md border border-input bg-transparent px-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
              value={table.getState().pagination.pageSize}
              onChange={(e) => {
                table.setPageSize(Number(e.target.value))
              }}
            >
              {[5, 10, 20, 50].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-4">
            <span className="p-sm text-muted-foreground">
              Page {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </span>

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
        </div>
      )}
    </Card>
  )
}