import React from 'react';
import { cn } from '@/shared/lib/utils';
import {
    Dialog,
    DialogContent,
    DialogDescription,
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
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen} >
            <div className="hidden" >
                <DialogTitle  ></DialogTitle>
                <DialogHeader ></DialogHeader>
                <DialogFooter ></DialogFooter>
                <DialogDescription>
                    Здесь вы можете просмотреть фотографии товара в увеличенном виде.
                </DialogDescription>
            </div>

         <DialogContent
  className={cn(
    "w-full max-w-[90%] sm:max-w-[80%] lg:max-w-[70%]",
    "max-h-[90vh] p-4 sm:p-6", // отступы зависят от экрана
    "flex flex-col items-center justify-center"
  )}
>
  <div className="relative w-full h-full flex flex-col items-center">
    <Carousel setApi={setModalApi} className="w-full flex-1">
      <CarouselContent className="h-full">
        {images.map((item, index) => (
          <CarouselItem key={index} className="h-full flex items-center justify-center">
            <div className="relative w-full h-[60vh] sm:h-[70vh]">
              <Image
                src={item.url}
                alt={`Стул Элегант - изображение ${index + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="left-2 sm:left-4 bg-white/10 border-white/20 text-white hover:bg-white/20" />
      <CarouselNext className="right-2 sm:right-4 bg-white/10 border-white/20 text-white hover:bg-white/20" />
    </Carousel>

    {/* Thumbnails */}
    <div className="mt-4 flex gap-2 overflow-x-auto px-2">
      {images.map((item, index) => (
        <Button
          key={index}
          onClick={() => modalApi?.scrollTo(index)}
          variant="outline"
          className={cn(
            "p-0 w-16 h-16 flex-shrink-0 overflow-hidden border-2",
            index === current ? "border-emerald-400" : "border-white/30"
          )}
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
      className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/10 border-white/20 text-white hover:bg-white/20"
      onClick={() => setIsModalOpen(false)}
    >
      <X className="w-4 h-4" />
    </Button>
  </div>
</DialogContent>
        </Dialog>
    );
};