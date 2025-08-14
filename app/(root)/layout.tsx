
import Header from "@/components/shared/header";

export const metadata = {
    title: 'Home',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex h-screen flex-col">
            <Header></Header>
            <main className="flex-1 wrapper">
                {children}</main>
        </div>
    );
}
