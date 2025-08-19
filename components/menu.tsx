import { EllipsisVertical, MenuIcon, ShoppingCartIcon, UserIcon } from "lucide-react";
import Link from "next/link";

import ThemeToggle from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";


const Menu = () => {
    return (<div className="flex justify-end gap-3">

        <nav className="hidden md:flex w-full gap-1" >
            <ThemeToggle />

            <Button asChild variant="ghost">
                <Link href="/cart"> <ShoppingCartIcon /> Cart</Link>
            </Button>
            <Button asChild >
                <Link href="/login"> <UserIcon /> Login</Link>
            </Button>
        </nav>

        <nav className="md:hidden">

            <Sheet>
                <SheetTrigger className="align-middle">

                    <EllipsisVertical />
                </SheetTrigger>

                <SheetContent className="flex flex-col items-start p-5">
                    <SheetTitle>Menu</SheetTitle>

                    <ThemeToggle />
                    <Button asChild variant="ghost">
                        <Link href="/cart"> <ShoppingCartIcon /> Cart</Link>
                    </Button>
                    <Button asChild >
                        <Link href="/login"> <UserIcon /> Login</Link>
                    </Button>
                    <SheetDescription></SheetDescription>
                </SheetContent>
            </Sheet>
        </nav>

    </div>);
}

export default Menu;