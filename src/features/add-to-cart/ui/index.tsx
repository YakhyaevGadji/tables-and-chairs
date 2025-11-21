import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/ui/button';

interface Props {
    className?: string;
    idProduct: string;
    quantity: number
}

export const AddToCartButton: React.FC<Props> = ({ className, idProduct, quantity = 1 }: Props) => {
    return (
        <Button className={cn('font-normal bg-green select-none', className)}>
            Добавить в корзину
        </Button>
    );
};