import { cn } from '@/shared/lib/utils';
import React from 'react';
import { FooterTitle } from './footerTtile';


interface Props {
    className?: string;
}

export const Graphics: React.FC<Props> = ({ className }: Props) => {
    return (
        <div className={cn('', className)}>
            <FooterTitle  >График работы</FooterTitle>
            <p className='font-bold text-[22px]'>
                Ежедневно, с 10:00 до 18:00
            </p>
        </div>
    );
};