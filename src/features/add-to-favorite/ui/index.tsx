import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/ui/button';
import { Heart } from 'lucide-react';

interface Props {
    className?: string;
    idProduct: string;
}

export const AddToFavorite: React.FC<Props> = ({ className, idProduct }: Props) => {
    return (
        <Button variant="outline" className={cn("w-full py-[22px] mb-8", className)}>
            Добавить в избранное <Heart />
        </Button>
    );
};