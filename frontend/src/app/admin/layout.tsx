"use client"
import React from "react";
import {QueryClient} from "@tanstack/query-core";
import {QueryClientProvider} from "@tanstack/react-query";
import DashboardSidebar from "@/components/dashboard-sidebar";
import DashboardHeader from "@/components/dashboard-header";

const queryClient = new QueryClient();

export default function Layout({
                                   children,
                               }: Readonly<{
    children: React.ReactNode;
}>) {
    return (<QueryClientProvider client={queryClient}>
            <main className="max-w-7xl mx-auto grid grid-cols-12 lg:grid-cols-8">
                <aside className="col-span-1">
                    <DashboardSidebar/>
                </aside>
                <section className="col-span-11 lg:col-span-7 flex flex-col space-y-4 px-4 mt-4">
                    <DashboardHeader/>
                    {children}
                </section>
            </main>
        </QueryClientProvider>

    );
}
