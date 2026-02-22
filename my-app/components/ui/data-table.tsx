"use client"

import * as React from "react"
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getExpandedRowModel,
  SortingState,
  ExpandedState,
  useReactTable,
} from "@tanstack/react-table"

import { cn } from "@/lib/utils"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
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
  enableFooter?: boolean

  /** Enable expandable rows */
  enableExpansion?: boolean

  /** Function to return subRows */
  getSubRows?: (row: TData) => TData[] | undefined

  /** Optional row color accessor for color square */
  getRowColor?: (row: TData) => string | undefined

  /** Mode: client or server */
  mode?: "client" | "server"

  /** Controlled state props for server mode or controlled usage */
  search?: string
  onSearchChange?: (value: string) => void

  sortingState?: SortingState
  onSortingStateChange?: (updater: SortingState) => void

  paginationState?: { pageIndex: number; pageSize: number }
  onPaginationStateChange?: (updater: { pageIndex: number; pageSize: number }) => void

  pageCount?: number
  rowCount?: number
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
  enableFooter = false,
  enableExpansion = false,
  getSubRows,
  getRowColor,
  mode = "client",
  search,
  onSearchChange,
  sortingState,
  onSortingStateChange,
  paginationState,
  onPaginationStateChange,
  pageCount,
  rowCount,
}: DataTableProps<TData, TValue>) {
  const isServer = mode === "server"

  const [sorting, setSorting] = React.useState<SortingState>([])
  const [globalFilter, setGlobalFilter] = React.useState("")
  const [expanded, setExpanded] = React.useState<ExpandedState>({})
  const [pagination, setPagination] = React.useState({ pageIndex: 0, pageSize: 10 })

  const effectiveSorting = sortingState ?? sorting
  const setEffectiveSorting = onSortingStateChange ?? setSorting

  const effectiveSearch = search ?? globalFilter
  const setEffectiveSearch = onSearchChange ?? setGlobalFilter

  const effectivePagination = paginationState ?? pagination
  const setEffectivePagination = onPaginationStateChange ?? setPagination

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting: effectiveSorting,
      globalFilter: effectiveSearch,
      expanded,
      pagination: enablePagination ? effectivePagination : undefined,
    },
    onSortingChange: enableSorting ? setEffectiveSorting : undefined,
    onGlobalFilterChange: enableSearch ? setEffectiveSearch : undefined,
    onExpandedChange: enableExpansion ? setExpanded : undefined,
    onPaginationChange: enablePagination ? setEffectivePagination : undefined,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: !isServer && enableSearch ? getFilteredRowModel() : undefined,
    getSortedRowModel: !isServer && enableSorting ? getSortedRowModel() : undefined,
    getPaginationRowModel: !isServer && enablePagination ? getPaginationRowModel() : undefined,
    getSubRows: enableExpansion ? getSubRows : undefined,
    getExpandedRowModel: enableExpansion ? getExpandedRowModel() : undefined,
    manualPagination: isServer && enablePagination ? true : false,
    manualSorting: isServer && enableSorting ? true : false,
    manualFiltering: isServer && enableSearch ? true : false,
    pageCount: isServer && enablePagination ? pageCount : undefined,
  })

  const totalPages = React.useMemo(() => {
    if (!enablePagination) return 0
    return isServer && typeof pageCount === "number" ? pageCount : table.getPageCount()
  }, [enablePagination, isServer, pageCount, table])

  const [goToPage, setGoToPage] = React.useState<string>("")

  const commitGoToPage = React.useCallback(() => {
    if (!enablePagination) return
    const raw = Number(goToPage)
    if (!Number.isFinite(raw)) return

    // Users think in 1-based pages; TanStack uses 0-based.
    const target1Based = Math.max(1, Math.min(totalPages || 1, Math.trunc(raw)))
    table.setPageIndex(target1Based - 1)
    setGoToPage("")
  }, [enablePagination, goToPage, table, totalPages])

  return (
    <Card className="p-6">
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

      {/* BODY */}
      <div className="mt-4">
        {/* TABS */}
        {tabs && <div className="mb-4">{tabs}</div>}

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
                value={effectiveSearch ?? ""}
                onChange={(e) => setEffectiveSearch(e.target.value)}
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
        <div className="mt-3">
          <Table className="table-fixed w-full">
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead
                      key={header.id}
                      className={cn(
                        "px-4 py-2 align-middle label-md text-muted-foreground",
                        header.column.columnDef.meta?.align === "right" && "text-right",
                        header.column.getCanSort() && "cursor-pointer select-none"
                      )}
                      onClick={
                        enableSorting
                          ? header.column.getToggleSortingHandler()
                          : undefined
                      }
                    >
                      {header.isPlaceholder ? null : (
                        <div
                          className={cn(
                            "flex items-center gap-1",
                            header.column.columnDef.meta?.align === "right" && "justify-end"
                          )}
                        >
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
                  <React.Fragment key={row.id}>
                    <TableRow>
                      {enableExpansion && (
                        <TableCell className="px-4 py-2 align-middle w-8">
                          {row.getCanExpand() && (
                            <button
                              onClick={row.getToggleExpandedHandler()}
                              className="flex items-center justify-center"
                            >
                              {row.getIsExpanded() ? (
                                <ChevronDown className="size-4" />
                              ) : (
                                <ChevronUp className="size-4 rotate-90" />
                              )}
                            </button>
                          )}
                        </TableCell>
                      )}
                      {row.getVisibleCells().map((cell) => (
                        <TableCell
                          key={cell.id}
                          className="px-4 py-2 align-middle p"
                        >
                          {cell.column.id === table.getAllLeafColumns()[0]?.id && getRowColor && (
                            <span
                              className="inline-block size-3 rounded-sm mr-2 align-middle"
                              style={{ backgroundColor: getRowColor(row.original) }}
                            />
                          )}
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                    {row.getIsExpanded() && (
                      <TableRow>
                        <TableCell
                          colSpan={row.getVisibleCells().length + (enableExpansion ? 1 : 0)}
                          className="bg-secondary px-6 py-4"
                        >
                          {row.subRows?.map((subRow) => (
                            <div key={subRow.id} className="py-1">
                              {subRow.getVisibleCells().map((cell) => (
                                <div key={cell.id}>
                                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </div>
                              ))}
                            </div>
                          ))}
                        </TableCell>
                      </TableRow>
                    )}
                  </React.Fragment>
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

            {enableFooter && (
              <TableFooter>
                <TableRow className="border-t border-border">
                  {table.getFooterGroups().map((footerGroup) =>
                    footerGroup.headers.map((header) => (
                      <TableCell
                        key={header.id}
                        className="px-4 py-3 p-sm bg-secondary"
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.footer,
                              header.getContext()
                            )}
                      </TableCell>
                    ))
                  )}
                </TableRow>
              </TableFooter>
            )}
          </Table>
        </div>
      </div>

      {/* FOOTER */}
      {(enablePagination) && (
        <div className="mt-3 pt-3 border-t border-border flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="p-sm text-muted-foreground">
              Rows per page:
            </span>

            <Select
              value={String(effectivePagination.pageSize)}
              onValueChange={(value) => {
                setEffectivePagination({
                  ...effectivePagination,
                  pageSize: Number(value),
                })
              }}
            >
              <SelectTrigger size="inline" className="w-auto">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {[5, 10, 20, 50].map((size) => (
                  <SelectItem key={size} value={String(size)}>
                    {size}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-4">
            <span className="p-sm text-muted-foreground">
              Page {effectivePagination.pageIndex + 1} of {Math.max(totalPages, 1)}
            </span>

            {isServer && typeof rowCount === "number" && (
              <span className="p-sm text-muted-foreground">
                Total: {rowCount.toLocaleString()} rows
              </span>
            )}

            <div className="flex items-center gap-2">
              <span className="p-sm text-muted-foreground">Go to</span>
              <Input
                size="inline"
                inputMode="numeric"
                pattern="[0-9]*"
                type="number"
                min={1}
                max={Math.max(totalPages, 1)}
                value={goToPage}
                onChange={(e) => setGoToPage(e.target.value)}
                onBlur={commitGoToPage}
                onKeyDown={(e) => {
                  if (e.key === "Enter") commitGoToPage()
                }}
                className="w-16"
                aria-label="Go to page"
              />
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
        </div>
      )}
    </Card>
  )
}