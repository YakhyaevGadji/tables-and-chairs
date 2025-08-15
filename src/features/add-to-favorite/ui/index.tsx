import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/ui/button';
import { Heart } from 'lucide-react';

interface Props {
    className?: string;
    idProduct: string;
    children?: React.ReactNode
    type?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined

}
// w-full py-[22px] mb-8
export const AddToFavoriteButton: React.FC<Props> = ({ className, idProduct, children, type }: Props) => {
    return (
        <Button variant={type} className={cn("", className)}>
            {children}
        </Button>
    );
};