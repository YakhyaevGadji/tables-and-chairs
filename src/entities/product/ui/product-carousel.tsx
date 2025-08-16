import React from 'react';
import { cn } from '@/shared/lib/utils';
import Image from "next/image";
import { typeImageCarousel } from '../model/types';
interface Props {
    className?: string;
    imgs: typeImageCarousel[];
    currentImageIndex: number;
    setCurrentImageIndex: (index: number) => void;
}

export const ProductCarousel: React.FC<Props> = ({ className, imgs, currentImageIndex, setCurrentImageIndex }: Props) => {

    return (
        <div className={cn("relative w-full ", className)}>

            <div className="relative bg-gray-25">
                <div className="flex justify-center items-center p-8 relative">
                    <Image
                        src={imgs[currentImageIndex].url}
                        alt="chair"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                    <img
                        src={imgs[currentImageIndex].url}
                        alt="Валенсия Beige барный стул"
                        className="w-32 h-48 object-contain transition-opacity duration-300"
                    />

                    <div className="absolute inset-0 flex">
                        {imgs.map((_, index) => (
                            <div key={index} className="flex-1 cursor-pointer" onMouseEnter={() => setCurrentImageIndex(index)} />
                        ))}
                    </div>
                </div>

                {
                    imgs.length > 1 && (<div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                        {imgs.map((_, index) => (
                            <div
                                key={index}
                                className={`w-2 h-2 rounded-full transition-all duration-200 ${currentImageIndex === index ? "bg-orange-500" : "bg-gray-300"
                                    }`}
                            />
                        ))}
                    </div>)
                }
            </div>

        </div>
    );
};