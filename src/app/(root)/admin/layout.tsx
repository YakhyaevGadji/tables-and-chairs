'use client'

import React, { useEffect } from "react";
import axios from "axios";
import { redirect } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux-store/hook";
import { setAuth } from "@/entities/admin/auth-slice";

const LayoutAdmin = ({children}: Readonly<{ children: React.ReactNode }>) => {
    const { isAuth } = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();

    const fetchAuthMe = async () => {
        const token = localStorage.getItem("token");

        try {
            const { data } = await axios.get(
                "https://cb3e1513c958829a.mokky.dev/auth_me",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            dispatch(setAuth({
                isAuth: true,
                userId: data.id,
                name: data.name,
            }))
        } catch (err) {
            redirect('/admin/auth')
        }
    };

    console.log(isAuth);

    useEffect(() => {
        fetchAuthMe();
    }, []);

    return (
        <div>
            {children}
        </div>
    );
};

export default LayoutAdmin;