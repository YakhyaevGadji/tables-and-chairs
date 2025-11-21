import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { loginSchema, registerSchema, TLoginvValues, TRegistervValues } from "./auth-schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useParams, useRouter } from "next/navigation";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import { instance } from "@/shared/lib/axios-instance";
import { API_ROUTES } from "@/shared/api/endpoints";
export const useYupForm = () => {
    const { auth } = useParams()
    const router = useRouter()

    const isLogin = auth === "register" ? false : true
    console.log(isLogin);

    const {
        handleSubmit,
        register,
        reset,
        setValue,
        clearErrors,
        formState: { errors, isSubmitting },
    } = useForm<TRegistervValues | TLoginvValues>({
        resolver: yupResolver(isLogin ? loginSchema : registerSchema),
    });
    const funcSignIn = async (data: { email: string; password: string }): Promise<any> => {
        return signIn("credentials", { ...data, redirect: false });
    }
    const onSubmit = async (data: TRegistervValues | TLoginvValues) => {

        const objLogin = {
            email: data.email,
            password: data.password
        } as TLoginvValues
        if (isLogin) {
            try {
                const response = await funcSignIn(objLogin);
                console.log(response);

                if (!response?.ok) {
                    throw new Error()
                }

                toast.success("Вы успешно вошли в аккаунт", {
                    icon: "🚀",
                })
                     router.push(API_ROUTES.HOME)
            } catch (error) {

                toast.error("Не удалось войти в аккаунт", {
                    icon: "🚫",
                })
            }
        }
        else {
            const { confirmPassword, ...registerData } = data as TRegistervValues
            const response = await instance.post(API_ROUTES.AUTH.REGISTER, registerData);


            if (response.status === 200) {
                setTimeout(async () => {
                    const result = await funcSignIn(objLogin);

                    if (!result?.error) {
                        router.push("/")
                    }
                }, 1500)

                toast.success("Вы успешно зарегистрировались", {
                    icon: "🚀",
                })

                router.push(API_ROUTES.HOME)
            }
        }
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
        isSubmitting
    };
};