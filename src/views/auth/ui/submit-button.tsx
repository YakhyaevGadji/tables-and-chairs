import React from 'react';
import { cn } from '@/shared/lib/utils';
import { useFormStatus } from 'react-dom';
import { Button } from '@/shared/ui/button';

interface Props {
    className?: string;
    children: string
}

export const SubmitButton: React.FC<Props> = ({ className, children }: Props) => {
    const { pending } = useFormStatus()
    return (
        <Button disabled={pending} type="submit"
            className={cn("max-w-[416px] w-full cursor-pointer hover:opacity-90 p-5 mt-5", className)}>
            {children}
        </Button>
    );
};