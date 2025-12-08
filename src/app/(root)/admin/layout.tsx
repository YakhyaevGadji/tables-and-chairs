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
        <div>
            <div className="grid grid-cols-[200px_1fr]">
                <SidebarNav />

                <div className="p-5">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default LayoutAdmin;