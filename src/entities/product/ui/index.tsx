import React from "react";
import { TypeChair } from "@/entities/product";
import Image from "next/image";
import { cn } from "@/shared/lib/utils";
import Link from "next/link";
import { Button } from "@/shared/ui/button";

interface IPropsProduct {
    data: TypeChair;
    className?: string;
}

export const Product = ({className, data}: IPropsProduct) => {
    return (
        <li className={cn('cursor-pointer mr-auto max-w-[258px]', className)}>
            <div className="flex h-full flex-col">
                <Link href={data.slug}>
                    <div className="mb-3">
                        <Image
                            priority={true}
                            width={258}
                            height={200}
                            src={data.images[0]}
                            alt="cheir"
                        />
                    </div>
                    <p className="mb-2 font-bold">
                        {data.title} на {data.attributes.totalHeight}
                    </p>
                    <p className="mb-8 line-clamp-4">
                        {data.description}
                    </p>
                </Link>

                <div className="mt-auto">
                    <Button className="bg-green">В корзину</Button>
                </div>
            </div>
        </li>
    );
};