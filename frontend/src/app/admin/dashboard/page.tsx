import React from 'react'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

const DashboardPage = () => {
    return (
        <main className="max-w-7xl mx-auto h-full">
            <Card>
                <CardHeader>
                    <CardTitle>Dashboard</CardTitle>
                    <CardDescription className="text-muted-foreground">Dashboard</CardDescription>
                </CardHeader>
                <CardContent>
                    <CardDescription>Dashboard</CardDescription>
                </CardContent>
            </Card>
        </main>
    )
}
export default DashboardPage;
