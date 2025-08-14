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
            <main className="flex-1 wrapper bg-slate-100">
                {children}</main>
        </div>
    );
}
