import React from 'react';
import { cn } from '@/shared/lib/utils';

interface Props {
    className?: string;
    inStock: boolean
}

export const ProductInstock: React.FC<Props> = ({ className, inStock }: Props) => {
    return (
        <div className={cn('', className)}>
            {
                inStock ? (
                    <>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-green-600 font-medium">В наличии</span></>
                ) : (
                    <>
                        <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                        <span className="text-amber-600 font-medium">На заказ</span>
                    </>
                )
            }
        </div>
    );
};