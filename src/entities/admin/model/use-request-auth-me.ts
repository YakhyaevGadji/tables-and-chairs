import { useAppDispatch } from "@/redux-store/hook";
import { fetchAuthMe } from "@/entities/admin/api/axips-auth-me";
import { setAuth } from "@/entities/admin/model/auth-slice";
import { SubmitHandler, useForm } from "react-hook-form";
import { TypeFromInputs } from "@/entities/admin/model/types-form";
import { fetchAuth } from "@/entities/admin/api/axios-auth";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { API_REQUEST } from "@/shared/api/endpoints";

export const useRequestAuthMe = () => {
    const [ isLoading, setIsLoading ] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const router = useRouter();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<TypeFromInputs>();

    const onSubmit: SubmitHandler<TypeFromInputs> = async (data: TypeFromInputs) => {
        setIsLoading(true);

        const requestData = await fetchAuth(data);

        if(requestData) {
            localStorage.setItem("token", requestData.token);


            router.push(API_REQUEST.ADMIN.ADMIN);
        }

        setIsLoading(false);
    }

    const handleAuthMe = async () => {
        const data = await fetchAuthMe();

        if(data) {
            dispatch(setAuth({
                isAuth: true,
                userId: data.id,
                name: data.name
            }))
        }else {
            router.push('/admin/auth');
        }
    }

    return {
        handleAuthMe,
        onSubmit,
        handleSubmit,
        isLoading,
        register
    };
};

