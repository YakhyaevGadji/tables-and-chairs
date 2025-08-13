import React from 'react';
import { cn } from '@/shared/lib/utils';
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
}
    from "@/shared/ui/dialog"
import { Button } from '@/shared/ui/button';
import Image from 'next/image';
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/shared/ui/carousel';
import { X } from 'lucide-react';
import { typeImageCarousel } from './slider-photos';
interface Props {
    className?: string;
    isModalOpen: boolean;
    setIsModalOpen: (open: boolean) => void
    images: typeImageCarousel[]
    current: number
    modalApi: CarouselApi
    setModalApi: (api: CarouselApi) => void
}


export const SliderDialog: React.FC<Props> = ({ className, isModalOpen, setIsModalOpen, images, setModalApi, modalApi, current }: Props) => {

    return (
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <div className="hidden" >
                <DialogTitle  ></DialogTitle>
                <DialogHeader ></DialogHeader>
                <DialogFooter ></DialogFooter>
            </div>

            <DialogContent className="sm:max-w-[425px]">
                <div className="relative w-full h-full flex items-center justify-center">
                    <Carousel setApi={setModalApi} className="w-full h-full">
                        <CarouselContent className="h-full">
                            {images.map((item, index) => (
                                <CarouselItem key={index} className="h-full">
                                    <div className="relative w-full h-full flex items-center justify-center p-8">
                                        <Image
                                            src={item.url}
                                            alt={`Стул Элегант - изображение ${index + 1}`}
                                            width={800}
                                            height={800}
                                            className="max-w-full max-h-full object-contain"
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        <CarouselPrevious className="left-4 bg-white/10 border-white/20 text-white hover:bg-white/20" />
                        <CarouselNext className="right-4 bg-white/10 border-white/20 text-white hover:bg-white/20" />
                    </Carousel>


                    {/* Thumbnails */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
                        {images.map((item, index) => (
                            <Button
                                key={index}
                                onClick={() => modalApi?.scrollTo(index)}
                                variant="outline"
                                className={`p-0 w-16 h-16 overflow-hidden border-2 ${index === current ? "border-emerald-400" : "border-white/30"
                                    }`}

                            >
                                <Image
                                    src={item.url}
                                    alt={`Миниатюра ${index + 1}`}
                                    width={64}
                                    height={64}
                                    className="w-full h-full object-cover"
                                />
                            </Button>
                        ))}
                    </div>

                    {/* Close button */}
                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute top-4 right-4 bg-white/10 border-white/20 text-white hover:bg-white/20"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <X className="w-4 h-4" />
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};