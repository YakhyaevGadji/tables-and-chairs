"use client";

import React from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/shared/ui/breadcrumb";
import Link from "next/link";
import useBreadcrumbs from "@/entities/breadcrumbs-nav/model/use-breadcrumbs";

const BreadcrumbsNav = () => {
    const { pathname, pathTranslations } = useBreadcrumbs();

    if (pathname === "/") return null;

    const segments = pathname.split("/").filter((item) => item !== "");

    return (
        <div className="mb-2">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href="/" className="flex items-center gap-1">
                                Главная
                            </Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>

                    {segments.map((segment, index) => {
                        const href = "/" + segments.slice(0, index + 1).join("/");

                        const isLast = index === segments.length - 1;

                        const title = segment.split("-").join(" ");

                        const displayName = pathTranslations[segment] || title.charAt(0).toUpperCase() + title.slice(1);

                        return (
                            <div key={href} className="flex items-center">
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    {isLast ? (
                                        <BreadcrumbPage>{displayName}</BreadcrumbPage>
                                    ) : (
                                        <BreadcrumbLink asChild>
                                            <Link href={href}>{displayName}</Link>
                                        </BreadcrumbLink>
                                    )}
                                </BreadcrumbItem>
                            </div>
                        )
                    })}
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    )
};

export default BreadcrumbsNav;
