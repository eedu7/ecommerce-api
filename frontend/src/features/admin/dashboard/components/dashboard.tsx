import {Button} from "@/components/ui/button";
import DatabaseTableAccordian from "@/features/admin/dashboard/components/database-table-accordian";
import {Separator} from "@/components/ui/separator";
import {DataTable} from "@/features/admin/dashboard/components/data-table";
import {columns, Payment} from "@/features/admin/dashboard/components/columns";
import {Plus} from "lucide-react";


async function getData(): Promise<Payment[]> {
    // Fetch data from your API here.
    return [
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "john.doe@example.com",
        },
        {
            id: "a93bc81d",
            amount: 150,
            status: "success",
            email: "jane.smith@example.com",
        },
        {
            id: "b12ef34a",
            amount: 200,
            status: "failed",
            email: "alice.brown@example.com",
        },
        {
            id: "d29af54e",
            amount: 250,
            status: "pending",
            email: "mike.jones@example.com",
        },
        {
            id: "e63de68b",
            amount: 300,
            status: "success",
            email: "sarah.johnson@example.com",
        },
        {
            id: "f45ac79f",
            amount: 400,
            status: "failed",
            email: "charlie.davis@example.com",
        },
        {
            id: "e12b345c",
            amount: 120,
            status: "success",
            email: "emily.wilson@example.com",
        },
        {
            id: "g93ac81b",
            amount: 130,
            status: "pending",
            email: "david.miller@example.com",
        },
        {
            id: "h78bc56f",
            amount: 500,
            status: "success",
            email: "laura.moore@example.com",
        },
        {
            id: "i56de48h",
            amount: 600,
            status: "failed",
            email: "paul.taylor@example.com",
        },
        {
            id: "j23af67i",
            amount: 700,
            status: "pending",
            email: "lisa.anderson@example.com",
        }
    ];
}


const Dashboard = async () => {
    const data = await getData();

    return (
        <section className="w-full h-full grid grid-cols-6">
            <aside className="col-span-1 rounded-lg space-y-3.5">
                <Button variant="link" className="w-full font-semibold text-lg mt-2" size="lg">Database Table</Button>
                <Separator/>
                <DatabaseTableAccordian />
            </aside>
            <section className="col-span-5 mx-2 rounded-lg shadow-2xl px-2">
                <div className="container  mx-auto py-4 w-full space-y-3.5">
                    <div className="flex  w-full p-2 justify-end">
                        <Button className="space-x-1 ">
                            <Plus className="size-4" />
                           <span>Add</span>
                        </Button>
                    </div>
                    <DataTable columns={columns} data={data}/>
                </div>
            </section>
        </section>
    )
}
export default Dashboard
