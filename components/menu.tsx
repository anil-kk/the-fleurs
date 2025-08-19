import { ShoppingCartIcon, UserIcon } from "lucide-react";
import Link from "next/link";

import ThemeToggle from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";


const Menu = () => {
    return (<div className="flex-end">

        <nav className="hidden md:inline-block w-full" >
            <ThemeToggle />

            <Button asChild variant="ghost">
                <Link href="/cart"> <ShoppingCartIcon /> Cart</Link>
            </Button>
            <Button asChild >
                <Link href="/login"> <UserIcon /> Login</Link>
            </Button>
        </nav>

    </div>);
}

export default Menu;