"use client"
import React from "react";
import {QueryClient} from "@tanstack/query-core";
import {QueryClientProvider} from "@tanstack/react-query";
import DashboardSidebar from "@/components/dashboard-sidebar";

const queryClient = new QueryClient();

export default function Layout({
                                   children,
                               }: Readonly<{
    children: React.ReactNode;
}>) {
    return (<QueryClientProvider client={queryClient}>
            <main className="max-w-7xl mx-auto grid grid-cols-8">
                <aside className="col-span-1 md:col-span-2 lg:col-span-1">
                    <DashboardSidebar/>
                </aside>
                <section className="col-span-7 md:col-span-6 lg:col-span-7">
                    {children}

                </section>
            </main>
        </QueryClientProvider>

    );
}
