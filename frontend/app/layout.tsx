import type {Metadata} from "next";
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider";
import {Toaster} from "@/components/ui/toaster";



export const metadata: Metadata = {
    title: "E-Commerce", description: "Simple E-Commerce Website",
};



export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (<html lang="en" suppressHydrationWarning>
    <body
    >

        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
        >
            {children}
            <Toaster />
        </ThemeProvider>
    </body>
    </html>);
}
