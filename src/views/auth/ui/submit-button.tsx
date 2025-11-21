import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/ui/button';

interface Props {
    className?: string;
    children: React.ReactNode
}

export const SubmitButton: React.FC<Props> = ({ className, children }: Props) => {
    return (
        <Button type="submit"
            className={cn(" w-full cursor-pointer hover:opacity-90 p-5 mt-5", className)}>
            {children}
        </Button>
    );
};