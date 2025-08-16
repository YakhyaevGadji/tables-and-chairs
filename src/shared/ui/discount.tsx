import React from 'react';
import { cn } from '@/shared/lib/utils';

interface Props {
    className?: string;
    discount: number
}

export const DiscountBadge: React.FC<Props> = ({ className, discount }: Props) => {
    return (
        <div className={cn("", className)}>
            -{discount}%
        </div>
    );
};