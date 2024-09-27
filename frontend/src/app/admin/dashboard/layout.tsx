import React from 'react'
import {Button} from "@/components/ui/button";
import DatabaseTableAccordian from "@/features/admin/dashboard/components/database-table-accordian";
import {Separator} from "@/components/ui/separator";


const Layout = ({
                    children,
                }: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <section className="max-w-7xl mx-auto">

            <section className="w-full h-full grid grid-cols-6">
                <aside className="col-span-1 rounded-lg space-y-3.5">
                    <Button variant="link" className="w-full font-semibold text-lg mt-2" size="lg">Database
                        Table</Button>
                    <Separator/>
                    <DatabaseTableAccordian/>
                </aside>
                <section className="col-span-5 mx-2 rounded-lg shadow-2xl px-2">
                    <div className="container  mx-auto py-4 w-full space-y-3.5">
                        {children}
                    </div>
                </section>
            </section>
        </section>
    )
}
export default Layout
