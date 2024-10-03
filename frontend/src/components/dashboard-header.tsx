import React from 'react'
import {ChevronDown} from "lucide-react";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {
    DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

const DashboardHeader = () => {
    return (<header className="flex items-center justify-between mt-4 px-2">
        <div>
            Dashboard
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
