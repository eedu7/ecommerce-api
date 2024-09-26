import {Button} from "@/components/ui/button";
import DatabaseTableAccordian from "@/features/admin/dashboard/components/database-table-accordian";
import {Separator} from "@/components/ui/separator";
import {DataTable} from "@/features/admin/dashboard/components/data-table";
import {get_all_categories} from "@/external/category-api";
import {categoryColumns} from "@/features/admin/dashboard/components/columns";

type table = "user" | "products" | "category" | "address";

const Dashboard = async () => {

    const data = await get_all_categories();


    return (
        <section className="w-full h-full grid grid-cols-6">
            <aside className="col-span-1 bg-zinc-100 rounded-lg space-y-3.5">
                <Button variant="link" className="w-full font-semibold text-lg mt-2" size="lg">Database Table</Button>
                <Separator/>
                <DatabaseTableAccordian/>
            </aside>
            <section className="col-span-5 mx-2 rounded">
                <div className="container mx-auto py-10 w-full h-full">
                    <DataTable columns={categoryColumns} data={data}/>
                </div>
            </section>
        </section>
    )
}
export default Dashboard
