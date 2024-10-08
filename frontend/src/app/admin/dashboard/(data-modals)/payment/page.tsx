import React from 'react'
import {columns, Payment} from "@/app/admin/dashboard/(data-modals)/payment/columns";
import {DataTable} from "@/app/admin/dashboard/(data-modals)/payment/data-table";

async function getData(): Promise<Payment[]> {
    // Fetch data from your API here.
    return [{
        id: "m5gr84i9", amount: 316, status: "success", email: "ken99@yahoo.com",
    }, {
        id: "3u1reuv4", amount: 242, status: "success", email: "Abe45@gmail.com",
    }, {
        id: "derv1ws0", amount: 837, status: "processing", email: "Monserrat44@gmail.com",
    }, {
        id: "5kma53ae", amount: 874, status: "success", email: "Silas22@gmail.com",
    }, {
        id: "bhqecj4p", amount: 721, status: "failed", email: "carmella@hotmail.com",
    },]
}

const PaymentPage = async () => {

    const data = await getData();
    return (<div className="container mx-auto">
        <DataTable columns={columns} data={data}/>
    </div>)
}
export default PaymentPage;
