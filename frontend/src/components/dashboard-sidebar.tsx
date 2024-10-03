"use client"
import React from 'react'
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Contact, CreditCard, Grid, LayoutDashboardIcon, LogOut, Settings, ShoppingCart, User} from "lucide-react";
import LogoIpsumIcon from "@/assets";
import Image from "next/image";
import {Separator} from "@/components/ui/separator";
import {usePathname} from "next/navigation";
import Cookie from "js-cookie";


const DashboardSidebar = () => {

    const pathname = usePathname();

    const handleLogOut = () => {
        Cookie.remove("token");
    }


    return (<section className="flex flex-col gap-4">
        <div className="flex items-center justify-center p-4">
            <Link href="/admin/dashboard">
                <Image src={LogoIpsumIcon} alt="logo" width={36} height={36}/>
            </Link>
        </div>
        <div className="flex flex-col gap-4">
            <Separator/>
            <Link href="/admin/dashboard">
                <Button
                    className={`w-full px-2 h-12 flex items-center gap-2 ${pathname === '/admin/dashboard' ? 'bg-zinc-300 text-white font-semibold hover:bg-zinc-400 hover:text-white' : ''}`}
                    variant="outline">
                    <LayoutDashboardIcon/>
                    <span className="hidden lg:block">Dashboard</span>
                </Button>
            </Link>
            <Link href="/admin/dashboard/product">
                <Button
                    className={`w-full px-2 h-12 flex items-center gap-2 ${pathname === '/admin/dashboard/product' ? 'bg-zinc-300 text-white font-semibold hover:bg-zinc-400 hover:text-white' : ''}`}
                    variant="outline">
                    <ShoppingCart/>
                    <span className="hidden lg:block">Products</span>
                </Button>
            </Link>
            <Link href="/admin/dashboard/user">
                <Button
                    className={`w-full px-2 h-12 flex items-center gap-2 ${pathname === '/admin/dashboard/user' ? 'bg-zinc-300 text-white font-semibold hover:bg-zinc-400 hover:text-white' : ''}`}
                    variant="outline">
                    <User/>
                    <span className="hidden lg:block">User</span>
                </Button>
            </Link>

            <Link href="/admin/dashboard/category">
                <Button
                    className={`w-full px-2 h-12 flex items-center gap-2 ${pathname === '/admin/dashboard/category' ? 'bg-zinc-300 text-white font-semibold hover:bg-zinc-400 hover:text-white' : ''}`}
                    variant="outline">
                    <Grid/>
                    <span className="hidden lg:block">Category</span>
                </Button>
            </Link>
            <Link href="/admin/dashboard/payment">
                <Button
                    className={`w-full px-2 h-12 flex items-center gap-2 ${pathname === '/admin/dashboard/payment' ? 'bg-zinc-300 text-white font-semibold hover:bg-zinc-400 hover:text-white' : ''}`}
                    variant="outline">
                    <CreditCard/>
                    <span className="hidden lg:block">Payment</span>
                </Button>
            </Link>
            <Link href="/admin/dashboard/settings">
                <Button
                    className={`w-full px-2 h-12 flex items-center gap-2 ${pathname === '/admin/dashboard/settings' ? 'bg-zinc-300 text-white font-semibold hover:bg-zinc-400 hover:text-white' : ''}`}
                    variant="outline">
                    <Settings/>
                    <span className="hidden lg:block">Settings</span>
                </Button>
            </Link>
            <Link href="/sign-in" onClick={handleLogOut}>
                <Button className="w-full px-2 h-12 flex items-center gap-2" variant="destructive">
                    <LogOut/>
                    <span className="hidden lg:block">Logout</span>
                </Button>
            </Link>
            <Separator/>
        </div>
        <div className="my-6 lg:flex flex-col items-center justify-center gap-2 hidden">
            <h1 className="text-lg font-semibold">Customer Support</h1>
            <p className="text-sm text-muted-foreground">Ask you query, place requests or important issues. Our support
                team will contact 24/7 to you.</p>
            <Button variant="outline" size="sm" className="w-full p-2 gap-2">
                <Contact/>
                <span>Connect Now</span>
            </Button>
        </div>
        <div className="absolute bottom-4">
            <p className="text-sm text-muted-foreground">Terms & Services</p>
            <p className="text-sm text-muted-foreground">Privacy Policy</p>
        </div>
    </section>)
}
export default DashboardSidebar
