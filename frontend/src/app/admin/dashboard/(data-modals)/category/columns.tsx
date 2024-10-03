"use client"

import {ColumnDef} from "@tanstack/react-table"
import {ArrowUpDown, Edit, MoreHorizontal, Trash} from "lucide-react"

import {Button} from "@/components/ui/button"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"
import {Checkbox} from "@/components/ui/checkbox";

export type Category = {
    id: number
    name: string
    description: string
}

export const columns: ColumnDef<Category>[] = [{
    id: "select", header: ({table}) => (<Checkbox
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
    />), cell: ({row}) => (<Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
    />), enableSorting: false, enableHiding: false,
}, {
    accessorKey: "name", header: ({column}) => {
        return (<Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
            Name
            <ArrowUpDown className="ml-2 h-4 w-4"/>
        </Button>)
    },
},

    {
        accessorKey: "description", header: "Description"
    }, {
        id: "actions", cell: () => {

            return (<div className="flex justify-end"><DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4"/>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem className="space-x-2 flex items-center"><Edit className="size-4"/>
                        <span>Edit</span></DropdownMenuItem>
                    <DropdownMenuItem className="space-x-2 flex items-center"><Trash className="size-4"/>
                        <span>Delete</span></DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu></div>)
        },
    },]
