import React from 'react'
import {DropdownMenu, DropdownMenuContent, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {LogIn, Settings, User, UserPlus} from "lucide-react";

const AvatarDropdown = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"/>
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="flex flex-col justify-between">
                <div className="w-full hover:bg-gray-100 cursor-pointer">
                    <div className="flex items-center gap-2">
                        <LogIn className="size-4"/> <span>Log In</span>
                    </div>
                </div>
                <div className="w-full hover:bg-gray-100 cursor-pointer">
                    <div className="flex items-center gap-2">
                        <UserPlus className="size-4"/> <span>Register</span>
                    </div>
                </div>
                <div
                    className="w-full hover:bg-gray-100 cursor-pointer">
                    <div className="flex items-center gap-2">
                        <User className="size-4"/> <span>Profile</span>
                    </div>
                </div>
                <div
                    className="w-full hover:bg-gray-100 cursor-pointer">
                    <div className="flex items-center gap-2">
                        <Settings className="size-4"/> <span>Settings</span>
                    </div>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
export default AvatarDropdown
