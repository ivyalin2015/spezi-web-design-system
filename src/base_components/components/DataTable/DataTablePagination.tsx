//
// This source file is part of the Stanford Spezi open-source project
//
// SPDX-FileCopyrightText: 2023 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//
import type { Table as TableType } from '@tanstack/table-core'
import { ButtonPagination } from '@/packages/design-system/src/components/Pagination/ButtonPagination'
import { RangeCounter } from '@/packages/design-system/src/components/RangeCounter'

interface DataTablePaginationProps<Data> {
  table: TableType<Data>
}

export const DataTablePagination = <Data,>({
  table,
}: DataTablePaginationProps<Data>) => {
  const rows = table.getRowModel().rows
  const filteredRowsLength = table.getFilteredRowModel().rows.length

  const tableState = table.getState()
  const currentPage = tableState.pagination.pageIndex + 1

  const itemsRangeStartIndex =
    tableState.pagination.pageIndex * tableState.pagination.pageSize

  const pageCount = table.getPageCount()

  return (
    <>
      <RangeCounter
        start={itemsRangeStartIndex + 1}
        end={itemsRangeStartIndex + rows.length}
        all={filteredRowsLength}
      />
      {pageCount > 1 && (
        <ButtonPagination
          total={pageCount}
          page={currentPage}
          onPageChange={(page) => table.setPageIndex(page - 1)}
        />
      )}
    </>
  )
}
