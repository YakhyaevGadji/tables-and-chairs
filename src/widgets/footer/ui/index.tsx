import { cn } from '@/shared/lib/utils';
import React from 'react';
import { Address, Graphics, Logo, Socials } from '..';

interface Props {
    className?: string;
}

export const Footer: React.FC<Props> = ({ className }: Props) => {
    return (
        <footer className={cn('', className)}>
            <div className='grid grid-cols-2 gap-y-9'>
                <Logo />
                <Socials />
                <Graphics />
                <Address />
            </div>
            <div className='pt-9 pb-5 text-grey'>Политика конфиденциальности</div>
        </footer>
    );
};