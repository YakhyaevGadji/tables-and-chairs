'use client'

import React, { useEffect } from "react";
import { useRequestAuthMe } from "@/entities/admin/model/use-request-auth-me";

const LayoutAdmin = ({children}: Readonly<{ children: React.ReactNode }>) => {
    const { handleAuthMe } = useRequestAuthMe();

    useEffect(() => {
        handleAuthMe();
    }, []);

    return (
        <div>
            {children}
        </div>
    );
};

export default LayoutAdmin;