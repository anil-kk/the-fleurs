import Image from "next/image";
import Link from "next/link";

import { APP_NAME } from "@/lib/constants";
import Menu from "@/components/menu";


const Header = () => {
    return <header className="wrapper flex-between w-full border-b">

        <div className="flex-end">
            <Link className="flex-start" href='/'>
                <Image src="/images/logo.svg" alt={`${APP_NAME} Logo`} width={50} height={50} priority={true} />
                <span className="hidden lg:block font-bold text-2xl ml-3">{APP_NAME}</span>
            </Link>
        </div>

        <Menu />

    </header>;
}

export default Header;