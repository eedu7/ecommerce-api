import {Button} from "@/components/ui/button";
import AvatarDropdown from "@/components/avatar-dropdown";

const Navbar = () => {
    return (
        <header className="w-screen bg-zinc-100">
            <nav className="max-w-7xl mx-auto flex items-center justify-between p-4">
                <div>
                    <Button variant="outline">Logo</Button>
                </div>
                <AvatarDropdown/>

            </nav>
        </header>

    )
}
export default Navbar
