'use client';

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
import { useEffect, useState } from "react";

type typeImageCarousel = Pick<TypeImage, "id" | "url">;

interface IPropsSingleProductSlider {
    images: typeImageCarousel[];
    buttons: boolean;
    bottomSlider: boolean;
    bottomButtons: boolean;
    maxThumbs: number
}

const SliderPhotos = ({ images, buttons = true, bottomSlider = true, bottomButtons = true, maxThumbs = 4 }: IPropsSingleProductSlider) => {
    const [mainApi, setMainApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [thumbsApi, setThumbsApi] = useState<CarouselApi>();
    useEffect(() => {
        if (!mainApi) return;

        setCurrent(mainApi.selectedScrollSnap());

        const handleSelect = () => setCurrent(mainApi.selectedScrollSnap());
        mainApi.on("select", handleSelect);

        return () => {
            mainApi.off("select", handleSelect);
        };
    }, [mainApi]);

    return (
        <div className="relative w-[560px]">
            {/* Основной слайдер */}
            <Carousel setApi={setMainApi}>
                <CarouselContent>
                    {images.map((image) => (
                        <CarouselItem key={image.id}>
                            <Image
                                width={560}
                                height={560}
                                src={image.url}
                                alt={image.id + 'img'}
                                className="object-contain"
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {
                    buttons && (
                        <>
                            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
                            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
                        </>
                    )
                }
            </Carousel>

            {/* Мини-превью слайдер */}
            {
                bottomSlider && <div className="mt-4">
                    <Carousel setApi={setThumbsApi}>
                        <CarouselContent>
                            {images.map((image, index) => (
                                <CarouselItem key={image.id} className="basis-1/4 lg:basis-1/6">
                                    <Image
                                        onClick={() => mainApi?.scrollTo(index)}
                                        className={clsx(
                                            "cursor-pointer w-[80px] h-[80px] object-cover border-2",
                                            current === index
                                                ? "border-gray-400"
                                                : "border-transparent hover:border-gray-300"
                                        )}
                                        width={80}
                                        height={80}
                                        src={image.url}
                                        alt={image.id + 'img-thumb'}
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        {
                            bottomButtons && maxThumbs > 4 && (
                                <>
                                    <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
                                    <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
                                </>
                            )
                        }
                    </Carousel>
                </div>
            }
        </div>
    );
};

export default SliderPhotos;
