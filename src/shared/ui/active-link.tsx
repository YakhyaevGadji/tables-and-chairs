"use client"

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { clsx } from "clsx";

interface IPropsActiveLink {
    className?: string;
    children: React.ReactNode;
    href: string;
}

export const ActiveLink = ({ className, href, children }: IPropsActiveLink) => {
    const patchName = usePathname();

    const isActive = patchName === href;

    return (
        <Link
            href={href}
            className={clsx(className, isActive ? "active" : "")}
        >
            {children}
        </Link>
    );
};

