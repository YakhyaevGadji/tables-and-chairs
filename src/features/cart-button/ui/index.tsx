import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/ui/button';
import { ShoppingCart } from 'lucide-react';

interface Props {
    className?: string;
}

export const CartButton: React.FC<Props> = ({ className }: Props) => {
    return (
        <Button className={cn('bg-green relative', className)}>

            <ShoppingCart />
        </Button>
    );
};