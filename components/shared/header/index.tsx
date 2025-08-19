import { ShoppingCartIcon, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import ThemeToggle from "@/components/theme-toggle";


const Header = () => {
    return <header className="wrapper flex-between w-full border-b">

        <div className="flex-end">
            <Link className="flex-start" href='/'>
                <Image src="/images/logo.svg" alt={`${APP_NAME} Logo`} width={50} height={50} priority={true} />
                <span className="hidden lg:block font-bold text-2xl ml-3">{APP_NAME}</span>
            </Link>
        </div>

        <div className="flex-end space-x-1">

            <ThemeToggle></ThemeToggle>

            <Button asChild variant="ghost">
                <Link href="/cart"> <ShoppingCartIcon /> Cart</Link>
            </Button>
            <Button asChild >
                <Link href="/login"> <UserIcon /> Login</Link>
            </Button>
        </div>

    </header>;
}

export default Header;