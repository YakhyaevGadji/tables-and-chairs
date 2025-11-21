import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Shield, Truck } from 'lucide-react';

interface Props {
    className?: string;
    material: string;
    width: number;
    totalHeight: number
}

export const ProductInfo: React.FC<Props> = ({ className, material, width, totalHeight }: Props) => {
    return (
        <div className={cn('', className)}>
            <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-[12px] text-gray-600">
                    <Truck className="w-4 h-4" />
                    <span>Доставка 1-3 дня</span>

                </div>
                <div className="flex items-center gap-2 text-[12px] text-gray-600">
                    <Shield className="w-4 h-4" />
                    <span>Гарантия 1 года</span>
                </div>
            </div>

            <div className="mb-4 space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                    <span>Материал:</span>
                    <span className="font-medium">{material}</span>
                </div>
                <div className="flex justify-between">
                    <span>Размеры</span>
                    <span className="font-medium">{width} x {totalHeight}</span>
                </div>
            </div>
        </div>
    );
};