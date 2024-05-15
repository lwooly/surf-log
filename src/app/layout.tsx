import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import "./globals.css";
import Header from "@/components/global/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Surf Log",
  description: "Log your surf sessions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={`${inter.className}`}>
          <Header />
          <main className="mx-auto container">{children}</main>
        </body>
      </UserProvider>
    </html>
  );
}
