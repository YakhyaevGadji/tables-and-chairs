'use client'

import React from "react";
import Link from "next/link";
import { TypeNavs } from "@/widgets/header/ui/index";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

interface IPropsNavList {
    navs: TypeNavs[]
}

const NavList = ({navs}: IPropsNavList) => {
    const pathname = usePathname();

    return (
        <nav>
            <ul className="flex gap-6 items-center">
                {navs.map((item: TypeNavs, index) => {
                    const isActive = pathname === item.href;

                    return (
                        <li key={index}>
                            <Link
                                className={clsx('hover:text-neutral-500', isActive && 'underline')}
                                href={item.href}
                            >
                                {item.value}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    );
};

export default NavList;
