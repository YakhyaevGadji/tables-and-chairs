import React from 'react';
import { cn } from '@/shared/lib/utils';
import {  Shield, Truck } from "lucide-react";

interface Props {
    className?: string;
}

export const ProductInfo: React.FC<Props> = ({ className }: Props) => {
    return (
        <div className={cn('grid grid-cols-2 gap-4 p-4 bg-green-50 ', className)}>
            <div className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-green-600" />
                <span className="text-sm text-gray-700">Бесплатная доставка по Махачкале</span>
            </div>
            <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="text-sm text-gray-700">Гарантия 1 год</span>
            </div>
        </div>
    );
};