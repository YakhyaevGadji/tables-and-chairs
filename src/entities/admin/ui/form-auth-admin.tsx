import React, { useEffect } from "react";
import { Button } from "@/shared/ui/button";
import { Spinner } from "@/shared/ui/spinner";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux-store/hook";
import { Input } from "@/shared/ui/input";
import { useRequestAuthMe } from "@/entities/admin/model/use-request-auth-me";

export const FormAuthAdmin = () => {
    const {
        onSubmit,
        handleSubmit,
        register,
        isLoading
    } = useRequestAuthMe();
    const { isAuth } = useAppSelector((state) => state.auth);
    const router = useRouter();

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

