import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";
import { TypeAttributes } from '@/entities/product';
import { productCharacteristicsSchema } from '../lib/product-chars-schema';


interface Props {
    className?: string;
    attributes: TypeAttributes;
    description: string;
}
export const ProductChars: React.FC<Props> = ({ className, attributes, description }: Props) => {
    return (
        <div >
            <Tabs defaultValue="details" className={cn('', className)}>
                <TabsList className="grid w-full grid-cols-3 bg-gray-100 rounded-full p-1 ">
                    <TabsTrigger

                        value="details"
                        className="cursor-pointer  rounded-full data-[state=active]:bg-white data-[state=active]:text-furniture-green"
                    >
                        Описание
                    </TabsTrigger>
                    <TabsTrigger
                        value="packaging"
                        className="cursor-pointer rounded-full data-[state=active]:bg-white data-[state=active]:text-furniture-green"
                    >
                        Характеристики
                    </TabsTrigger>
                    <TabsTrigger
                        value="shipping"
                        className="cursor-pointer rounded-full data-[state=active]:bg-white data-[state=active]:text-furniture-green"
                    >
                        Детали
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="details" className="mt-4 space-y-3">
                    <div className="text-sm text-furniture-gray space-y-2">
                        <p>
                            {description}
                        </p>
                    </div>
                </TabsContent>

                <TabsContent value="packaging" className="mt-4 space-y-3">
                    <ul className="space-y-2 ">
                        {Object.entries(productCharacteristicsSchema).map(([key, label]) => {
                            const value = attributes[key as keyof typeof attributes];
                            if (!value) return null;

                            return (
                                <li key={key} className="flex justify-between text-sm">
                                    <span className="text-gray-500">{label}</span>
                                    <span className="font-medium">{value}</span>
                                </li>
                            );
                        })}

                    </ul>
                </TabsContent>

                <TabsContent value="shipping" className="mt-4 space-y-3">
                    <div className="text-sm text-furniture-gray space-y-2">
                        <p>• Бесплатная доставка от 10 000 ₽</p>
                        <p>• Доставка по Москве: 1-2 дня</p>
                        <p>• Доставка по России: 3-7 дней</p>
                        <p>• Подъем на этаж: 500 ₽/этаж</p>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
};