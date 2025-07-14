import { cn } from '@/shared/lib/utils';
import React from 'react';

interface Props {
    className?: string;
}

export const Address: React.FC<Props> = ({ className }: Props) => {
    return (
        <div className={cn('', className)}>
            <h6>Адрес магазина</h6>
            <address>
                Махачкала, проспект Амет-Хана Султана, 112
            </address>

        </div>
    );
};