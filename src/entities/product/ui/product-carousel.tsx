import React from 'react';
import { cn } from '@/shared/lib/utils';
import { PATCH } from "@/shared/config/pages.config";
import Image from "next/image";
import { TypeImage } from '../model/types';
interface Props {
    className?: string;
    imgs: TypeImage[];
}

export const ProductCarousel: React.FC<Props> = ({ className, imgs }: Props) => {
    return (
        <div className={cn("relative w-full h-[200px]", className)}>
            <Image
                src={PATCH.IMAGE(imgs[0].url)}
                alt="chair"
                fill
                priority
                style={{ objectFit: 'cover' }}
            />
        </div>
    );
};