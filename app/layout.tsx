import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@/assets/styles/globals.css';
import { APP_DESCRIPTION, APP_NAME, APP_SERVER_URL } from "@/lib/constants";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: {
    default: APP_NAME,
    template: `%s | ${APP_NAME}`
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(APP_SERVER_URL)
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
