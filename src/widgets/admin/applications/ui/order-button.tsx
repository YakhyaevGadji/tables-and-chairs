import React from 'react';
import { cn } from '@/shared/lib/utils';

interface Props {
    className?: string;
    children: React.ReactNode;
    onClick?: () => void;
    title: string;
}

export const OrderButton: React.FC<Props> = ({ className, children,
    onClick, title
}: Props) => {
    return (
        <button
            className={cn("p-2 cursor-pointer hover:bg-accent rounded-lg transition-colors text-muted-foreground hover:text-accent-foreground", className)}
            title={title}
            onClick={onClick}
        >
            {children}
        </button>
    );
};