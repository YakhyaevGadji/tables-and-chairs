import clsx from "clsx";
import type { JSX } from "react";
import type React from "react";
import { Button } from "@/shared/ui/button";
import { Field } from "./field";
import { SubmitButton } from "./submit-button";

interface Props {
    register: any;
    handleSubmit: any;
    errors: any;
    isLogin: boolean;
    onSubmit: (data: any) => void;
    className?: string;
}

export const AuthForm: React.FC<Props> = (props: Props): JSX.Element => {
    const { register, handleSubmit, errors, isLogin, onSubmit, className } =
        props;

    return (
        <form
            className={clsx("flex flex-col items-center", className)}
            onSubmit={handleSubmit(onSubmit)}
        >
            {!isLogin && (
                <Field
                    label="Name"
                    name="name"
                    placeholder="Your Name"
                    register={register}
                    error={errors.name?.message}
                />
            )}

            <Field
                label="Email"
                name="email"
                type="email"
                placeholder="Email"
                register={register}
                error={errors.email?.message}
            />

            <Field
                label="Password"
                name="password"
                type="password"
                placeholder="Password"
                register={register}
                error={errors.password?.message}
            />

            {!isLogin && (
                <Field
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                    register={register}
                    error={errors.confirmPassword?.message}
                />
            )}
            <SubmitButton >
                {isLogin ? "Войти" : "Зарегистрироваться"}
            </SubmitButton>
        </form>
    );
};