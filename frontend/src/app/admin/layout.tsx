"use client"
import React from "react";
import {QueryClient} from "@tanstack/query-core";
import {QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Layout({
                                   children,
                               }: Readonly<{
    children: React.ReactNode;
}>) {
    return (<QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>

    );
}
