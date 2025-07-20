import React from 'react';
import { AuthForm } from './auth-form';

interface Props {
    pathname: "register" | "login";
}

export const AuthPage: React.FC<Props> = ({ pathname }: Props) => {
    return (
        <>
            <AuthForm
                {...{
                    register,
                    handleSubmit,
                    errors,
                    isLogin,
                    onSubmit,
                }}
            />
        </>
    );
};