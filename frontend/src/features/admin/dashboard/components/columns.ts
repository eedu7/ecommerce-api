"use client"

import { ColumnDef } from "@tanstack/react-table"

export type CategoryResponse = {
    id: number
    name: string
    description: string
}

export const categoryColumns: ColumnDef<CategoryResponse>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "name",
        header: "Name"
    },
    {
        accessorKey: "description",
        header: "Description"
    },

]
