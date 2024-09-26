import {Button} from "@/components/ui/button";
import AvatarDropdown from "@/components/avatar-dropdown";
import Link from "next/link";

const Navbar = () => {
    return (
        <header className="w-screen bg-zinc-100">
            <nav className="max-w-7xl mx-auto flex items-center justify-between p-4">
                <div className="space-x-2">
                    <Button variant="outline">Logo</Button>
                    <Link href="/admin/dashboard">
                        <Button variant="outline">Dashboard</Button>
                    </Link>
                </div>

                <AvatarDropdown/>

            </nav>
        </header>

    )
}
export default Navbar
