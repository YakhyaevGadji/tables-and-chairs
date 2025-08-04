"use client"
import { cn } from "@/shared/lib/utils";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
    className?: string;
    isLogin: boolean;
}

export const SupportDescr: React.FC<Props> = ({ className, isLogin }: Props) => {
    const route = useRouter()
    return (
        <div className={cn("", className)}>
            {isLogin ? (
                <p className="text-center pt-3   text-sm text-grey">
                    Don’t have an account?{" "}
                    <span
                        className="text-black text-sm underline cursor-pointer"
                        onClick={() => route.push("/auth/register")}
                    >
                        Create Account
                    </span>
                </p>
            ) : (
                <p className="text-center pt-3   text-sm text-grey">
                    Already have an account?{" "}
                    <span
                        className="text-black text-sm underline cursor-pointer"
                        onClick={() => route.push("/auth/login")}
                    >
                        Login
                    </span>
                </p>
            )}
        </div>
    );
};