'use client'

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuContent, DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { SunIcon, MoonIcon, SunMoonIcon } from "lucide-react";

const ThemeToggle = () => {

    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="focus-visible:ring-0 focus-visible:ring-offset-0">
                {theme === "system" ? <SunMoonIcon className="h-5 w-5" /> : theme === "dark" ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>Theme</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem checked={theme === "system"} onClick={() => setTheme("system")}>
                System
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked={theme === "dark"} onClick={() => setTheme("dark")}>
                dark
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked={theme === "light"} onClick={() => setTheme("light")}>
                light
            </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
    </DropdownMenu >;
}

export default ThemeToggle;