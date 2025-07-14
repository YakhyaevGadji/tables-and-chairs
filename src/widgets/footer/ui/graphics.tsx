import { cn } from '@/shared/lib/utils';
import React from 'react';


interface Props {
    className?: string;
}

export const Graphics: React.FC<Props> = ({ className }: Props) => {
    return (
        <div className={cn('', className)}>
            <h6 className='mb-3'>График работы</h6>
            <p>
                Ежедневно, с 10:00 до 18:00
            </p>
        </div>
    );
};