'use client'

import React from "react";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/shared/ui/carousel";
import { TypeImage } from "@/entities/product/model/types";
import Image from "next/image";
import { clsx } from "clsx";
import { PATCH } from "@/shared/config/pages.config";

interface IPropsSingleProductSlider {
    images: TypeImage[]
}

const SingleProductSlider = ({images}: IPropsSingleProductSlider) => {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);

    React.useEffect(() => {
        if (!api) return

        setCurrent(api.selectedScrollSnap());

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])

    return (
        <div className="relative w-[560px]">
            <Carousel setApi={setApi}>
                <CarouselContent >
                    {images.map((image) => (
                        <CarouselItem key={image.id}>
                            <Image
                                width={560}
                                height={560}
                                src={PATCH.IMAGE(image.url)}
                                alt={image.product_id}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-2"/>
                <CarouselNext className="absolute right-2"/>
            </Carousel>
            <div className="flex gap-2">
                {images.map((image, index) => (
                    <Image
                        key={index}
                        onClick={() => api?.scrollTo(index)}
                        className={clsx(
                            "cursor-pointer w-[80px] h-[80px] object-cover border-2",
                            current === index
                                ? "border-gray-400"
                                : "border-transparent hover:border-gray-300"
                        )}
                        width={60}
                        height={60}
                        src={PATCH.IMAGE(image.url)}
                        alt={image.created_at}
                    />
                ))}
            </div>
        </div>
    );
};

export default SingleProductSlider;
