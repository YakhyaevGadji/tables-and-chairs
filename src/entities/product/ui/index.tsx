import React from "react";
import { TypeChair } from "@/entities/product";
import Image from "next/image";
import { cn } from "@/shared/lib/utils";
import Link from "next/link";
import { Button } from "@/shared/ui/button";
import { PAGES } from "@/shared/config/pages.config";
import { API_GLOBAL } from "@/shared/lib/axios-instance";

interface IPropsProduct {
    data: TypeChair;
    className?: string;
}

export const Product = ({className, data}: IPropsProduct) => {
    return (
        <li className={cn('cursor-pointer w-[258px]', className)}> {/* фиксируем ширину */}
            <div className="flex h-[450px] flex-col">
                <Link href={PAGES.PRODUCT(data.slug)}>
                    {/* Контейнер изображения тоже фиксированной ширины */}
                    <div className="relative w-[258px] h-[200px]">
                        <Image
                            src={`${API_GLOBAL}${data.images[0].url}`}
                            alt="chair"
                            fill
                            priority
                            style={{ objectFit: 'cover' }}
                        />
                    </div>

                    <p className="mb-2 font-bold">
                        {data.title} на {data.attributes.totalHeight}
                    </p>
                    <p className="mb-8 line-clamp-4 h-[88px] break-words">{data.description}</p>

                    <Button
                        onClick={(event) => {
                            event.preventDefault();
                            console.log(true);
                        }}
                        className="bg-green"
                    >
                        В корзину
                    </Button>
                </Link>
            </div>
        </li>
    );
};