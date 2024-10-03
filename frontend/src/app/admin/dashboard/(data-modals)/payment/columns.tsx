"use client"

import {ColumnDef} from "@tanstack/react-table"

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
    accessorKey: "email", header: "Email",
}, {
    accessorKey: "amount", header: () => <div className="text-right">Amount</div>, cell: ({row}) => {
        const amount = parseFloat(row.getValue("amount"));
        const formatted = new Intl.NumberFormat("en-US", {
            style: "currency", currency: "USD",
        }).format(amount);
        return <div className="text-right font-medium">{formatted}</div>
    }
},]
