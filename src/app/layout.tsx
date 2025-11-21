import React from "react";
import type { Metadata } from "next";
import { Golos_Text } from 'next/font/google'
import { Providers } from "@/shared/ui/providers";
import "./globals.css";

const golosText = Golos_Text({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
    title: "12 stuliev",
    description: "Интерент магазин где вы можете преобрести столы и стулья",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${golosText.className} flex flex-col h-screen `}  >
                <Providers>{children}</Providers>
            </body>
        </html >
    );
}
