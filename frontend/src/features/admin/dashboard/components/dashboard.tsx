import React from 'react'
import {Button} from "@/components/ui/button";
import DatabaseTableAccordian from "@/features/admin/dashboard/components/database-table-accordian";
import {Separator} from "@/components/ui/separator";

const Dashboard = () => {
    return (
        <section className="w-full h-full grid grid-cols-6">
            <aside className="col-span-1 bg-zinc-100 rounded-lg space-y-3.5">
                <Button variant="link" className="w-full font-semibold text-lg mt-2" size="lg">Database Table</Button>
                <Separator/>
                <DatabaseTableAccordian/>
            </aside>
            <section className="col-span-5">

            </section>
        </section>
    )
}
export default Dashboard
