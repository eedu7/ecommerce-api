import React from 'react'
import {ChevronDown} from "lucide-react";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {
    DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

import {
    Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {usePathname} from "next/navigation";

const links_paths = {
    "/admin/dashboard/product": {
        "name": "Product",
    }, "/admin/dashboard/category": {
        name: "Category",
    }, "/admin/dashboard": {
        name: "Dashboard"
    }, "/admin/dashboard/user": {
        name: "User",
    }, "/admin/dashboard/payment": {
        name: "Payment",
    }
}


const DashboardHeader = () => {

    const pathname = usePathname();
    const isRootDashboard = pathname === "/admin/dashboard";
    const currentLink = links_paths[pathname];


    return (<header className="flex items-center justify-between mt-4">
        <div>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/admin/dashboard">Dashboard</BreadcrumbLink>
                    </BreadcrumbItem>

                    {!isRootDashboard && currentLink && (<BreadcrumbSeparator/>)}

                    {!isRootDashboard && currentLink && (<BreadcrumbItem>
                            <BreadcrumbLink href={pathname}>
                                {currentLink.name}
                            </BreadcrumbLink>
                        </BreadcrumbItem>

                    )}
                </BreadcrumbList>
            </Breadcrumb>
        </div>
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="shadcn"/>
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <span className="font-semibold">
                    Shad CN
                    </span>
                    <ChevronDown className="size-4"/>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem>Option 1</DropdownMenuItem>
                    <DropdownMenuItem>Option 2</DropdownMenuItem>
                    <DropdownMenuItem>Option 3</DropdownMenuItem>
                    <DropdownMenuItem>Option 4</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>

    </header>)
}
export default DashboardHeader
