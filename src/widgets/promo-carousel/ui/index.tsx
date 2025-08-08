'use client';

import { Carousel, CarouselContent, CarouselItem } from "@/shared/ui/carousel";
import { useEffect, useState } from "react";
import { clsx } from "clsx";
import Autoplay from "embla-carousel-autoplay";

export const PromoCarousel = () => {
    const [api, setApi] = useState<any>(null);
    const [count, setCount] = useState(0);
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!api) return;

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap());


        api.on('select', () => {
            setCurrent(api.selectedScrollSnap());
        })
    }, [api]);

    return (
        <div>
            <Carousel plugins={[
                Autoplay({
                    delay: 2000,
                }),
            ]} setApi={setApi}>
                <CarouselContent>
                    <CarouselItem>
                        <div className="border-2 w-full h-[300px]">

                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="border-2 w-full h-[300px]">

                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="border-2 w-full h-[300px]">

                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="border-2 w-full h-[300px]">

                        </div>
                    </CarouselItem>
                </CarouselContent>

                <ul className="flex justify-center">
                    {[...new Array(count)].map((_, i) => (
                        <li className={clsx("transition w-[20px] h-[20px] border-[1px] border-gray-600 rounded-full bg-transparent scale-50",
                            i === current && "bg-red-600 scale-75"
                        )} key={i}
                        >

                        </li>
                    ))}
                </ul>
            </Carousel>
        </div>
    );
};


