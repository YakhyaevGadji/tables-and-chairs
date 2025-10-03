import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/ui/button';
import { ShoppingCart } from 'lucide-react';

interface Props {
    className?: string;
    count: number
}

export const CartButton: React.FC<Props> = ({ className, count }: Props) => {
    return (

        <Button className={cn('bg-green relative', className)}>
            {
                count > 0 && (
                    <span className='flex items-center justify-center h-5 w-5 absolute top-1 right-1 translate-x-1/2 -translate-y-1/2 text-[10px] rounded-full p-1 bg-yellow text-white'>
                        {count}
                    </span>
                )
            }
            <ShoppingCart />
        </Button>
    );
};