import { cn } from '@/shared/lib/utils';
import React from 'react';
import { FooterTitle } from './footerTtile';

interface Props {
    className?: string;
}

export const Address: React.FC<Props> = ({ className }: Props) => {
    return (
        <div className={cn('', className)}>
            <FooterTitle >Адрес магазина</FooterTitle>
            <address className='font-bold text-[22px] '>
                Махачкала, проспект Амет-Хана Султана, 112
            </address>

        </div>
    );
};