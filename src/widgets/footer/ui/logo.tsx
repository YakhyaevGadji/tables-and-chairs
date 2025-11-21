import { cn } from '@/shared/lib/utils';
import React from 'react';
import Image from "next/image"

interface Props {
    className?: string;
}

export const Logo: React.FC<Props> = ({ className }: Props) => {
    return (
        <div className={cn('', className)}>
            <Image src="/Logo.svg" width={225} height={60} alt={'logo'} />
        </div>
    );
};