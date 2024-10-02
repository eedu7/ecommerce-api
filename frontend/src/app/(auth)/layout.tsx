import React from "react";

export default function Layout({
                                   children,
                               }: Readonly<{
    children: React.ReactNode;
}>) {
    return (<section className="max-w-7xl mx-auto">
        <div className="flex w-full h-screen items-center justify-center">
            {children}
        </div>
    </section>);
}
