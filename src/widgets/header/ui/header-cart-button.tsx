import React from 'react';
import { Button } from '@/shared/ui/button';
import { ShoppingCart } from 'lucide-react';
import { CartDrawer } from '@/entities/cart-drawer';
import { cn } from '@/shared/lib/utils';

interface Props {
    className?: string;

}

export const CartButton: React.FC<Props> = ({ className }: Props) => {
    return (
        <CartDrawer>
            <Button className={cn('bg-green', className)}>
                <ShoppingCart />
            </Button>
        </CartDrawer>
    );
};