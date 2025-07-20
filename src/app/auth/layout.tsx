import React from 'react';

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <main>
                1
                {children}
                1
            </main>
        </>);
}