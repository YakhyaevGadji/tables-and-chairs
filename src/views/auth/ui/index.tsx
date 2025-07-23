"use client"
import React from 'react';
import { AuthForm } from './auth-form';
import { useYupForm } from '../model/use-yup-form';
import { SupportDescr } from './support-descr';


export const AuthPage: React.FC = () => {

    const { register, handleSubmit, errors, isLogin, onSubmit } = useYupForm()
    
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className="max-w-[630px] w-[100%] bg-white rounded-2xl py-[90px] px-11  border shadow-lg">
                <h3 className="text-3xl font-bold text-center mb-4">
                    {isLogin ? "Login to Account" : "Register Account"}
                </h3>
                <p className="text-center mb-9">
                    Please enter your email and password to continue
                </p>
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

            </div>
        </div>
    );
};