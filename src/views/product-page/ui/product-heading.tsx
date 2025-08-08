import React from 'react';
import { cn } from '@/shared/lib/utils';
import Badges from './badges';

interface Props {
    className?: string;
    inStock: boolean;
    title: string;
    price: number
}

export const ProductHeading: React.FC<Props> = ({ className, inStock, price, title }: Props) => {
    return (
        <div className={cn('mb-10', className)}>
            <Badges isStock={inStock} />
            <h2 className="text-4xl font-bold mb-4">{title}</h2>
            <div className="flex items-center gap-2">
                <span className="block mb-4 text-4xl font-medium">{price}</span>
                <span className="block mb-4 text-2xl text-gray-500 line-through font-normal">{price}</span>
            </div>
        </div>
    );
};