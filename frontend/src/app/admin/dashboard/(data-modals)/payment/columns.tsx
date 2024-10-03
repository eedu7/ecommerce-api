"use client"

import {ColumnDef} from "@tanstack/react-table"
import {ArrowUpDown, Edit, MoreHorizontal, Trash} from "lucide-react"

import {Button} from "@/components/ui/button"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"

export type Payment = {
    id: string
    amount: number
    status: "pending" | "processing" | "success" | "failed"
    email: string
}

export const columns: ColumnDef<Payment>[] = [{
    accessorKey: "status", header: "Status", cell: ({row}) => {
        const value: string = row.getValue("status");
        const titleCaseValue: string = value.charAt(0).toUpperCase() + value.slice(1);
        switch (value) {
            case "pending":
                return <div className="text-yellow-500">{titleCaseValue}</div>
            case "processing":
                return <div className="text-blue-500">{titleCaseValue}</div>
            case "success":
                return <div className="text-green-500">{titleCaseValue}</div>
            case "failed":
                return <div className="text-red-500">{titleCaseValue}</div>
        }

    }
}, {
    accessorKey: "email", header: ({column}) => {
        return (<Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Email
                <ArrowUpDown className="ml-2 h-4 w-4"/>
            </Button>)
    },
}, {
    accessorKey: "amount", header: () => <div className="text-right">Amount</div>, cell: ({row}) => {
        const amount = parseFloat(row.getValue("amount"));
        const formatted = new Intl.NumberFormat("en-US", {
            style: "currency", currency: "USD",
        }).format(amount);
        return <div className="text-right font-medium">{formatted}</div>
    }
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
