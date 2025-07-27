import React from "react";
import type { Metadata } from "next";
import { Golos_Text } from 'next/font/google'
import { Header } from "@/widgets/header";
import { SubHeader } from "@/widgets/sub-header";
import { Footer } from "@/widgets/footer";
import StoreProvider from "@/redux-store/store-provider";
import "./globals.css";

const golosText = Golos_Text({
    subsets: ['latin'],
    weight: ['400', '500', '700']
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
            <body
                className={`${golosText.className}`}
            >
                <StoreProvider>
                    <SubHeader/>
                    <Header/>

                    {children}

                    <Footer />
                </StoreProvider>
            </body>
        </html>
    );
}
