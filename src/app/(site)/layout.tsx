import React from "react";
import { Header } from "@/widgets/header";
import { SubHeader } from "@/widgets/sub-header";
import { Footer } from "@/widgets/footer";
import Container from "@/shared/ui/container";
import BreadcrumbsNav from "@/entities/breadcrumbs-nav/ui";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div>
                <SubHeader />
                <Header />
            </div>
            <main className="flex-1 py-2">
                <Container>
                    <BreadcrumbsNav/>
                    {children}
                </Container>
            </main>
            <Footer />
        </>
    );
}
