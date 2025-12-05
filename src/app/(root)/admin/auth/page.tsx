'use client'
import React, { useEffect } from "react";
import { useAppSelector } from "@/redux-store/hook";
import { FormAuthAdmin } from "@/entities/admin";
import { useRouter } from "next/navigation";

const AuthAdminPage = () => {
    const { isAuth } = useAppSelector((state) => state.auth);
    const router = useRouter();

    console.log(isAuth);

    useEffect(() => {
        if (isAuth) {
            router.replace('/admin');
        }
    }, [isAuth]);

    return (
        <div className="flex h-[100vh] items-center justify-center">
            <FormAuthAdmin/>
        </div>
    );
};

export default AuthAdminPage;