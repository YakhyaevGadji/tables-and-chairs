'use client'

import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@/shared/ui/button";
import axios from "axios";
import { Spinner } from "@/shared/ui/spinner";
import { redirect, useRouter } from "next/navigation";
import { useAppSelector } from "@/redux-store/hook";
import { Input } from "@/shared/ui/input";

type Inputs = {
    email: string;
    password: string;
}

const AuthAdminPage = () => {
    const [ isLoading, setIsLoading ] = useState<boolean>(false);
    const { isAuth } = useAppSelector((state) => state.auth);
    const router = useRouter();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>();

    const fetchAuth = async (props: Inputs) => {
        try {
            setIsLoading(true);

            const { data } = await axios.post("https://cb3e1513c958829a.mokky.dev/auth", props);

            localStorage.setItem("token", data.token);

            router.push("/admin")
        } catch (err) {
            console.log(err);
        }
    };

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        await fetchAuth(data);
        setIsLoading(false);
    }

    useEffect(() => {
        if (isAuth) {
            router.replace('/admin');
        }
    }, [isAuth]);

    return (
        <div className="flex h-[100vh] items-center justify-center">
            <form className="w-[200px]" onSubmit={handleSubmit(onSubmit)}>
                <label className="block mb-2" htmlFor="email">
                    <p className="mb-1">Login</p>
                    <Input {...register("email")} id="email" type="text" placeholder="login..." />
                </label>
                <label className="block mb-2" htmlFor="password">
                    <p className="mb-1">Password</p>
                    <Input {...register("password")} id="password" type="password" placeholder="password..." />
                </label>

                <Button className="w-full" disabled={isLoading} type="submit">
                    {isLoading && <Spinner />}
                    Войти
                </Button>
            </form>
        </div>
    );
};

export default AuthAdminPage;