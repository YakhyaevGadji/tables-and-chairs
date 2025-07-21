import React from "react";
import { Header } from "@/widgets/header";
import { SubHeader } from "@/widgets/sub-header";
import { Footer } from "@/widgets/footer";




export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
            >
                <SubHeader />
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
