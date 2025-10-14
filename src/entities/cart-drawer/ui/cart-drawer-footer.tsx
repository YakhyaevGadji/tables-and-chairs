import React from 'react';
import { cn } from '@/shared/lib/utils';
import { SheetClose, SheetFooter } from '@/shared/ui/sheet';

interface Props {
    className?: string;
    discountSum: number;
    totalAmount: number
}

export const CartDrawerFooter: React.FC<Props> = ({ className, discountSum, totalAmount }: Props) => {
    return (
        <SheetFooter className="mx-6 bg-white ">

            {
                discountSum > 0 && (
                    <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Скидка</span>
                        <span className="font-medium text-green-600">−{discountSum} ₽</span>
                    </div>
                )
            }

            <div className="border-t pt-4">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold">Итого</span>
                    <span className="text-2xl font-bold">{totalAmount} ₽</span>
                </div>
                <SheetClose asChild>
                    <button
                        onClick={() => {
                            // здесь можно добавить переход на страницу оформления
                            console.log("Переход к оформлению");
                        }}
                        className="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90 active:bg-primary/80"
                    >
                        Перейти к оформлению
                    </button>
                </SheetClose>
            </div>
        </SheetFooter>
    );
};