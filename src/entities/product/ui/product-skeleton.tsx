import React from "react";
import { Skeleton } from "@/shared/ui/skeleton";

interface IPropsProductSkeleton {
    count: number;
}

export const ProductSkeleton = ({ count }: IPropsProductSkeleton) => {
    return (
        <ul className="grid grid-cols-3 grid-rows-6 gap-4">
            {Array.from({ length: count }).map((_, i) => (
                <li className="mx-auto" key={i}>
                    <Skeleton className="mb-3 w-[360px] h-[358px]" />
                    <Skeleton className="w-[230px] h-[30px]" />
                    <Skeleton className="w-[230px] h-[30px]" />
                </li>
            ))}
        </ul>
    );
};