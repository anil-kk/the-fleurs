import { APP_NAME } from "@/lib/constants";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return <footer className="wrapper w-full border-t">
        <div className="flex-center">
            {currentYear} {APP_NAME}. All rights reserved.
        </div>
    </footer>;
}

export default Footer;