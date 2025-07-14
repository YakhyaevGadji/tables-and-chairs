import React from 'react';
import { cn } from '@/shared/lib/utils';
import Image from "next/image"

interface Props {
    className?: string;
}

export const Socials: React.FC<Props> = ({ className }: Props) => {
    return (
        <div className={cn('', className)}>
            <h6>Контакы</h6>
            <ul>
                <li>
                    <Image src="/inst.svg" width={15} height={15} alt='icon' />
                </li>
                <li>
                    <Image src="/whats.svg" width={15} height={15} alt='icon' />
                </li>
            </ul>
        </div>
    );
};