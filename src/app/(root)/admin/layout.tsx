'use client'

import React, { useEffect } from "react";
import { useRequestAuthMe } from "@/entities/admin/model/use-request-auth-me";
import { SidebarNav } from "@/widgets/admin/sidebar";

const LayoutAdmin = ({children}: Readonly<{ children: React.ReactNode }>) => {
    const { handleAuthMe } = useRequestAuthMe();

    useEffect(() => {
        handleAuthMe();
    }, []);

    return (
        <div className="flex h-full">
            <SidebarNav />

            <main className="p-5 w-full bg-gray-50">
                {children}
            </main>
        </div>
    );
};

export default LayoutAdmin;