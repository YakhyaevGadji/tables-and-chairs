import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { loginSchema, registerSchema } from "./auth-schema";
import { yupResolver } from "@hookform/resolvers/yup";

export const useYupForm = (pathname: string) => {

    const isLogin = pathname === "register" ? false : true
    const {
        handleSubmit,
        register,
        reset,
        setValue,
        clearErrors,
        formState: { errors },
    } = useForm<any>({
        resolver: yupResolver(isLogin ? loginSchema : registerSchema),
    });

    const onSubmit = async (data: any) => {
        console.log(data);

    };

    useEffect(() => {
        clearErrors();
    }, [isLogin]);

    return {
        register,
        handleSubmit,
        reset,
        setValue,
        errors,
        isLogin,
        clearErrors,
        onSubmit,
    };
};