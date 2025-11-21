"use client"
import React from 'react';
import { AuthForm } from './auth-form';
import { useYupForm } from '../model/use-yup-form';
import { SupportDescr } from './support-descr';
import { Button } from '@/shared/ui/button';
import Image from 'next/image'
import { signIn } from 'next-auth/react';
import { toast } from 'sonner';

export const AuthPage: React.FC = () => {

    const { register, handleSubmit, errors, isLogin, onSubmit, isSubmitting } = useYupForm()

    return (
        <div className='h-screen flex justify-center items-center'>
            <div className="max-w-[630px] w-[100%] bg-white rounded-2xl py-[90px] px-11  border shadow-lg">
                <h3 className="text-3xl font-bold text-center mb-4">
                    {isLogin ? "Login to Account" : "Register Account"}
                </h3>
                <p className="text-center mb-9">
                    Please enter your email and password to continue
                </p>
                <AuthForm className='mb-4'
                    {...{
                        register,
                        handleSubmit,
                        errors,
                        isLogin,
                        onSubmit,
                        isSubmitting
                    }}

                />
                <ul className='flex justify-center gap-4'>
                    <li>
                        <Button onClick={() => signIn('google', {
                            callbackUrl: '/',
                            redirect: true
                        })}>
                            <Image src="/google.svg" width={20} height={20} alt="google" />
                        </Button>
                    </li>
                    <li>
                        <Button onClick={() => signIn('yandex', {
                            callbackUrl: '/',
                            redirect: true
                        })} >
                            <Image src="/yandex.svg" width={20} height={20} alt="yandex" />
                        </Button>
                    </li>
                    <li>
                        <Button onClick={() =>
                            toast.info("Внимание!", {
                                description: "Данный вариант пока не работает",
                            })
                        }>
                            <Image src="/vk.svg" width={20} height={20} alt="google" />
                        </Button>
                    </li>
                </ul>
                <SupportDescr className="mb-4" isLogin={isLogin} />
            </div>
        </div>
    );
};