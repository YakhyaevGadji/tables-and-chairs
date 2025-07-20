import React from 'react';
import { AuthForm } from './auth-form';
import { useYupForm } from '../model/use-yup-form';
import { SupportDescr } from './support-descr';

interface Props {
    pathname: "register" | "login";
}

export const AuthPage: React.FC<Props> = ({ pathname }: Props) => {
    const { register, handleSubmit, errors, isLogin, onSubmit } = useYupForm(pathname)
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
            <SupportDescr isLogin={isLogin} />

        </>
    );
};