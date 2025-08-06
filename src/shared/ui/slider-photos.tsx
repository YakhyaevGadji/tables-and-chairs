'use client'

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
import { useEffect, useState } from "react";
type typeImageCarousel = Pick<TypeImage, "id" | "url">
interface IPropsSingleProductSlider {
    images: typeImageCarousel[];
}

const SliderPhotos = ({ images }: IPropsSingleProductSlider) => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
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
                                src={image.url}
                                alt={image.id + 'img'}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-2" />
                <CarouselNext className="absolute right-2" />
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
                        src={image.url}
                        alt={image.id + 'img'}
                    />
                ))}
            </div>
        </div>
    );
};

export default SliderPhotos;
