"use client"
import StoreProvider from '@/redux-store/store-provider';
import { SessionProvider } from 'next-auth/react';
import React, { ReactNode } from 'react';
import { Toaster } from "@/shared/ui/sonner";
import NextTopLoader from 'nextjs-toploader';
interface Props {
    children: ReactNode;
}

export const Providers: React.FC<Props> = ({ children }: Props) => {
    return (
        <SessionProvider>
            <StoreProvider>
                {children}
                <Toaster position="top-center" expand={false} richColors />
                <NextTopLoader />
            </StoreProvider>
        </SessionProvider>
    );
};