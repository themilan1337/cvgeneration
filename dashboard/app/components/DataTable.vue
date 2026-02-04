<script lang="ts">
import { z } from "zod"

export const schema = z.object({
  id: z.number(),
  header: z.string(),
  type: z.string(),
  status: z.string(),
  target: z.string(),
  limit: z.string(),
  reviewer: z.string(),
})
</script>

<script setup lang="ts">
import type {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
} from "@tanstack/vue-table"
import {
  IconChevronLeft,
  IconChevronRight,
  IconChevronsLeft,
  IconChevronsRight,
  IconCircleCheckFilled,
  IconDotsVertical,
  IconLoader,
} from "@tabler/icons-vue"
import {
  FlexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useVueTable,
} from "@tanstack/vue-table"
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const props = defineProps<{
  data: TableData[]
}>()

interface TableData {
  id: number
  header: string
  type: string
  status: string
  target: string
  limit: string
  reviewer: string
}

const sorting = ref<SortingState>([])
const columnFilters = ref<ColumnFiltersState>([])
const columnVisibility = ref<VisibilityState>({})
const rowSelection = ref({})

const columns: ColumnDef<TableData>[] = [
  {
    id: "select",
    header: ({ table }) => h(Checkbox, {
      "modelValue": table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate"),
      "onUpdate:modelValue": value => table.toggleAllPageRowsSelected(!!value),
      "aria-label": "Select all",
    }),
    cell: ({ row }) => h(Checkbox, {
      "modelValue": row.getIsSelected(),
      "onUpdate:modelValue": value => row.toggleSelected(!!value),
      "aria-label": "Select row",
    }),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "header",
    header: "Header",
    cell: ({ row }) => h("div", { class: "font-medium" }, String(row.getValue("header"))),
    enableHiding: false,
  },
  {
    accessorKey: "type",
    header: "Section Type",
    cell: ({ row }) => h(Badge, {
      variant: "outline",
    }, () => String(row.getValue("type"))),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      return h("div", { class: "flex items-center gap-2" }, [
        status === "Published" || status === "Done"
          ? h(IconCircleCheckFilled, { class: "size-4 text-emerald-500" })
          : h(IconLoader, { class: "size-4 animate-spin text-muted-foreground" }),
        h("span", {}, status),
      ])
    },
  },
  {
    accessorKey: "target",
    header: "Views",
    cell: ({ row }) => h("span", { class: "font-semibold tabular-nums" }, String(row.getValue("target"))),
  },
  {
    accessorKey: "reviewer",
    header: "Reviewer / Info",
    cell: ({ row }) => h("span", { class: "text-muted-foreground" }, String(row.getValue("reviewer"))),
  },
  {
    id: "actions",
    cell: () => h(DropdownMenu, {}, {
      default: () => [
        h(DropdownMenuTrigger, { asChild: true }, {
          default: () => h(Button, {
            variant: "ghost",
            class: "h-8 w-8 p-0",
          }, {
            default: () => [
              h("span", { class: "sr-only" }, "Open menu"),
              h(IconDotsVertical, { class: "size-4" }),
            ],
          }),
        }),
        h(DropdownMenuContent, { align: "end" }, {
          default: () => [
            h(DropdownMenuItem, {}, () => "Edit"),
            h(DropdownMenuItem, {}, () => "Analyze with AI"),
            h(DropdownMenuItem, {}, () => "Export PDF"),
            h(DropdownMenuSeparator, {}),
            h(DropdownMenuItem, { class: "text-red-600" }, () => "Delete"),
          ],
        }),
      ],
    }),
  },
]

const table = useVueTable({
  get data() {
    return props.data
  },
  columns,
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  onSortingChange: (updaterOrValue) => {
    sorting.value = typeof updaterOrValue === "function"
      ? updaterOrValue(sorting.value)
      : updaterOrValue
  },
  onColumnFiltersChange: (updaterOrValue) => {
    columnFilters.value = typeof updaterOrValue === "function"
      ? updaterOrValue(columnFilters.value)
      : updaterOrValue
  },
  onColumnVisibilityChange: (updaterOrValue) => {
    columnVisibility.value = typeof updaterOrValue === "function"
      ? updaterOrValue(columnVisibility.value)
      : updaterOrValue
  },
  onRowSelectionChange: (updaterOrValue) => {
    rowSelection.value = typeof updaterOrValue === "function"
      ? updaterOrValue(rowSelection.value)
      : updaterOrValue
  },
  state: {
    get sorting() { return sorting.value },
    get columnFilters() { return columnFilters.value },
    get columnVisibility() { return columnVisibility.value },
    get rowSelection() { return rowSelection.value },
  },
})
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="overflow-hidden rounded-lg border bg-card">
      <Table>
        <TableHeader class="bg-muted/50 sticky top-0 z-10">
          <TableRow v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
            <TableHead v-for="header in headerGroup.headers" :key="header.id" :col-span="header.colSpan">
              <FlexRender v-if="!header.isPlaceholder" :render="header.column.columnDef.header" :props="header.getContext()" />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <template v-if="table.getRowModel().rows.length">
            <TableRow v-for="row in table.getRowModel().rows" :key="row.id">
              <TableCell v-for="cell in row.getVisibleCells()" :key="cell.id">
                <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
              </TableCell>
            </TableRow>
          </template>
          <TableRow v-else>
            <TableCell
              :col-span="columns.length"
              class="h-24 text-center"
            >
              No results.
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
    <div class="flex items-center justify-between">
      <div class="text-muted-foreground hidden flex-1 text-sm lg:flex">
        {{ table.getFilteredSelectedRowModel().rows.length }} of
        {{ table.getFilteredRowModel().rows.length }} row(s) selected.
      </div>
      <div class="flex w-full items-center gap-8 lg:w-fit">
        <div class="ml-auto flex items-center gap-2 lg:ml-0">
          <Button
            variant="outline"
            class="hidden h-8 w-8 p-0 lg:flex"
            :disabled="!table.getCanPreviousPage()"
            @click="table.setPageIndex(0)"
          >
            <span class="sr-only">Go to first page</span>
            <IconChevronsLeft class="size-4" />
          </Button>
          <Button
            variant="outline"
            class="size-8"
            size="icon"
            :disabled="!table.getCanPreviousPage()"
            @click="table.previousPage()"
          >
            <span class="sr-only">Go to previous page</span>
            <IconChevronLeft class="size-4" />
          </Button>
          <Button
            variant="outline"
            class="size-8"
            size="icon"
            :disabled="!table.getCanNextPage()"
            @click="table.nextPage()"
          >
            <span class="sr-only">Go to next page</span>
            <IconChevronRight class="size-4" />
          </Button>
          <Button
            variant="outline"
            class="hidden size-8 lg:flex"
            size="icon"
            :disabled="!table.getCanNextPage()"
            @click="table.setPageIndex(table.getPageCount() - 1)"
          >
            <span class="sr-only">Go to last page</span>
            <IconChevronsRight class="size-4" />
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>
