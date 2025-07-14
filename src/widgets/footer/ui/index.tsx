


import { cn } from '@/shared/lib/utils';
import React from 'react';

import Container from '@/shared/ui/container';
import { Socials } from './socials';
import { Logo } from './logo';
import { Graphics } from './graphics';
import { Address } from './address';

interface Props {
    className?: string;
}

export const Footer: React.FC<Props> = ({ className }: Props) => {
    return (
        <footer className={cn('bg-background-grey py-9 pb-7', className)}>
            <Container>
                <div className='grid grid-cols-2 gap-y-9'>
                    <Logo />
                    <Socials />
                    <Graphics />
                    <Address />
                </div>
                <div className='pt-9 text-grey'>Политика конфиденциальности</div>
            </Container>
        </footer>
    );
};