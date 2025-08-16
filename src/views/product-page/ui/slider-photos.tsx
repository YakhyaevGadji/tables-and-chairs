'use client';

import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/shared/ui/carousel";
import Image from "next/image";
import { clsx } from "clsx";
import { useEffect, useState } from "react";
import { SliderDialog } from "./slider-dialog";
import { typeImageCarousel } from "@/entities/product";




interface IPropsSingleProductSlider {
    images: typeImageCarousel[];
    buttons?: boolean;
    bottomSlider?: boolean;
    bottomButtons?: boolean;
    maxThumbs?: number
}

const SliderPhotos = ({ images, buttons = true, bottomSlider = true, bottomButtons = true, maxThumbs = 4 }: IPropsSingleProductSlider) => {
    const [mainApi, setMainApi] = useState<CarouselApi>();
    const [modalApi, setModalApi] = useState<CarouselApi>();
    const [thumbsApi, setThumbsApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        if (!mainApi) return;
        if (isModalOpen && modalApi) {
            modalApi.scrollTo(current);
        }
        setCurrent(mainApi.selectedScrollSnap());

        const handleSelect = () => {
            setCurrent(mainApi.selectedScrollSnap())
            if (modalApi) {
                modalApi.scrollTo(mainApi.selectedScrollSnap())
            }
        };
        mainApi.on("select", handleSelect);

        return () => {
            mainApi.off("select", handleSelect);
        };
    }, [mainApi, modalApi]);
    useEffect(() => {
        if (!modalApi) return
        modalApi.on("select", () => {
            const selectedIndex = modalApi.selectedScrollSnap()

            // Синхронизируем основной слайдер с модальным
            if (mainApi) {
                mainApi.scrollTo(selectedIndex)
            }
        })
    }, [modalApi, mainApi])
    return (
        <div className="relative w-[560px] ">
            <SliderDialog
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                current={current}
                modalApi={modalApi}
                setModalApi={setModalApi}
                images={images} />
            {/* Основной слайдер */}
            <Carousel setApi={setMainApi} className="h-[560px]">
                <CarouselContent>
                    {images.map((image) => (
                        <CarouselItem onClick={() => setIsModalOpen(isModalOpen => !isModalOpen)} key={image.id}>
                            <Image
                                width={560}
                                height={560}
                                src={image.url}
                                alt={image.id + 'img'}
                                style={{ objectFit: 'contain', height: '560px' }}

                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {
                    buttons && (
                        <>
                            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 " />
                            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 " />
                        </>
                    )
                }
            </Carousel>

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
                            bottomButtons && maxThumbs <= images.length && (
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
