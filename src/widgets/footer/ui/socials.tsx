import React from 'react';
import { cn } from '@/shared/lib/utils';
import Image from "next/image"
import { FooterTitle } from './footerTtile';

interface Props {
    className?: string;
}

export const Socials: React.FC<Props> = ({ className }: Props) => {
    return (
        <div className={cn('', className)}>
            <FooterTitle >Контакы</FooterTitle>
            <ul className='flex gap-2'>
                <li className='border-grey p-3 cursor-pointer'>
                    <Image src="/inst.svg" width={18} height={18} alt='icon' />
                </li>
                <li className='border-grey p-3 cursor-pointer'>
                    <Image src="/whats.svg" width={18} height={18} alt='icon' />
                </li>
            </ul>
        </div>
    );
};