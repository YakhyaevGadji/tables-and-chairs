import React from 'react';
import { cn } from '@/shared/lib/utils';
import { SheetClose, SheetTitle } from '@/shared/ui/sheet';
import Image from 'next/image';
import { Button } from '@/shared/ui/button';
import { ArrowLeft } from 'lucide-react';

interface Props {
    className?: string;
}

export const CartDrawerWarning: React.FC<Props> = ({ className}: Props) => {
    return (
        <div className="flex flex-col items-center justify-center w-72 h-full mx-auto">
            <Image src="/assets/empty-box.png" alt="Empty cart" width={120} height={120} />
            <SheetTitle>Корзина пуста</SheetTitle>

            <p className="text-center text-neutral-500 mb-5">
                Добавьте хотя бы один товар, чтобы сделать заказ
            </p>

            <SheetClose asChild>
                <Button className="w-56 h-12 text-base" size="lg">
                    <ArrowLeft className="w-5 mr-2" />
                    Вернуться назад
                </Button>
            </SheetClose>
        </div>
    );
};