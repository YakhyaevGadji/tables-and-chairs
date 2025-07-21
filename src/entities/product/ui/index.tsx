import React from "react";
import { TypeChair } from "@/entities/product";
import Image from "next/image";
import { cn } from "@/shared/lib/utils";
import Link from "next/link";

interface IPropsProduct {
    data: TypeChair;
    className?: string;
}

export const Product = ({className, data}: IPropsProduct) => {
    return (
        <Link href={data.slug} className={cn('cursor-pointer px-5', className)}>
            <div className="mb-3">
                <Image className="w-full h-full" width={200} height={200} src={data.images[0]} alt="cheir"/>
            </div>
            <p className="font-bold">{data.title} на {data.attributes.totalHeight}</p>
        </Link>
    );
};


