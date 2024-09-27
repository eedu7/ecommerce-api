import React from 'react'
import {DataTable} from "@/features/admin/dashboard/components/data-table";
import {columns, Payment} from "@/app/admin/dashboard/payment/columns";

async function getData(): Promise<Payment[]> {
    // Fetch data from your API here.
    return [{
        id: "728ed52f", amount: 100, status: "pending", email: "john.doe@example.com",
    }, {
        id: "a93bc81d", amount: 150, status: "success", email: "jane.smith@example.com",
    }, {
        id: "b12ef34a", amount: 200, status: "failed", email: "alice.brown@example.com",
    }, {
        id: "d29af54e", amount: 250, status: "pending", email: "mike.jones@example.com",
    }, {
        id: "e63de68b", amount: 300, status: "success", email: "sarah.johnson@example.com",
    }, {
        id: "f45ac79f", amount: 400, status: "failed", email: "charlie.davis@example.com",
    }, {
        id: "e12b345c", amount: 120, status: "success", email: "emily.wilson@example.com",
    }, {
        id: "g93ac81b", amount: 130, status: "pending", email: "david.miller@example.com",
    }, {
        id: "h78bc56f", amount: 500, status: "success", email: "laura.moore@example.com",
    }, {
        id: "i56de48h", amount: 600, status: "failed", email: "paul.taylor@example.com",
    }, {
        id: "j23af67i", amount: 700, status: "pending", email: "lisa.anderson@example.com",
    }];
}


const Page = async () => {
    const data = await getData();
    return (<DataTable columns={columns} data={data}/>)
}
export default Page
