import React from 'react';
import { cn } from '@/shared/lib/utils';
import { ProductInstock } from '@/entities/product';

interface Props {
    className?: string;
    inStock: boolean;
    title: string;
    price: string | number
    hasDiscount?: boolean
    oldPrice?: string
}

export const ProductHeading: React.FC<Props> = ({ className, inStock, price, title, hasDiscount, oldPrice }: Props) => {
    return (
        <div className={cn('mb-10', className)}>
            <ProductInstock inStock={inStock} className="mb-4 flex items-center gap-2" />
            <h2 className="text-4xl font-bold mb-4">{title}</h2>
            <div className="flex items-center gap-2">
                <span className="block mb-4 text-4xl font-medium">{price}</span>
                {hasDiscount && <span className="block mb-4 text-2xl text-gray-500 line-through font-normal">{oldPrice}</span>}
            </div>
        </div>
    );
};