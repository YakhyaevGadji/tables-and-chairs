"use client"
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
    isLogin: boolean;
}

export const SupportDescr: React.FC<Props> = ({ isLogin }: Props) => {
    const route = useRouter()
    return (
        <>
            {isLogin ? (
                <p className="text-center pt-3 text-grey700">
                    Don’t have an account?{" "}
                    <span
                        className="text-blue underline cursor-pointer"
                        onClick={() => route.push("/auth/register")}
                    >
                        Create Account
                    </span>
                </p>
            ) : (
                <p className="text-center pt-3 text-grey700">
                    Already have an account?{" "}
                    <span
                        className="text-blue underline cursor-pointer"
                        onClick={() => route.push("/auth/login")}
                    >
                        Login
                    </span>
                </p>
            )}
        </>
    );
};