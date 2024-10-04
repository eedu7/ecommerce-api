"use client"

import {ColumnDef} from "@tanstack/react-table"
import {ArrowUpDown, Edit, MoreHorizontal, Trash} from "lucide-react"

import {Button} from "@/components/ui/button"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"
import {Checkbox} from "@/components/ui/checkbox";

export type Product = {
    id: number
    name: string
    description: string
    price: number
    stock_quantity: number
    category: {
        id: number
        name: string
        description: string
    }
}

export const columns: ColumnDef<Product>[] = [{
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
}, {
    accessorKey: "description", header: "Description"
}, {
    accessorKey: "category", header: "Category", cell: ({row}) => {
        const product = row.original;
        const {name} = product.category;
        return (<div>{name}</div>)
    }
}, {
    accessorKey: "price", header: ({column}) => {
        return (<Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
            Price
            <ArrowUpDown className="ml-2 h-4 w-4"/>
        </Button>)
    }, cell: ({row}) => {
        const amount = parseFloat(row.getValue("price"));
        const formatted = new Intl.NumberFormat("en-US", {
            style: "currency", currency: "USD",
        }).format(amount);
        return <div className="pl-4 font-medium">{formatted}</div>
    }
}, {
    accessorKey: "stock_quantity", header: "Stock"
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
