import React from 'react';
import { cn } from '@/shared/lib/utils';
import { SheetHeader, SheetTitle } from '@/shared/ui/sheet';

interface Props {
    className?: string;
    lengthProducts: number
}

export const CartDrawerHeader: React.FC<Props> = ({ className, lengthProducts }: Props) => {
    return (
            <SheetHeader>
                <SheetTitle>
                    В корзине <span className="font-bold">{lengthProducts} товара</span>
                </SheetTitle>
            </SheetHeader>
    );
};