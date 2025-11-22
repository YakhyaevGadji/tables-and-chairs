'use client'

import React from "react";
import { cn } from "@/shared/lib/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/shared/ui/accordion";
import { Slider } from "@/shared/ui/slider";
import { Input } from "@/shared/ui/input";
import useFormatterPrice from "@/shared/hooks/use-formatter-price";
import { TypeFilterPriceValue } from "@/features/filters";

interface IPropsFilterPrice {
    className?: string;
    onChange: (value: TypeFilterPriceValue) => void;
    valuePrice: TypeFilterPriceValue;
}

export const FilterPrice = ({ className, onChange, valuePrice }: IPropsFilterPrice) => {
    const { formatPrice } = useFormatterPrice();

    //TODO Отрефактроить компонент
    const handleChangeInputPrice = (type: string, value: number) => {
        const updatedValuePrice = {...valuePrice, [type]: value};
        onChange(updatedValuePrice);
    }

    const handleChangeSliderPrice = (value: number[]) => {
        const updatedValuePrice = {priceFrom: value[0], priceTo: value[1]};
        onChange(updatedValuePrice)
    }

    return (
        <Accordion defaultValue="price" className={cn("", className)} type="single" collapsible>
            <AccordionItem value="price">
                <AccordionTrigger className="hover:no-underline cursor-pointer p-0 pb-2 text-[17px] items-center">
                    Цена
                </AccordionTrigger>
                <AccordionContent>
                    <div className="flex mt-1 mb-5 mx-1 justify-between">
                        <Input
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChangeInputPrice('priceFrom', Number(event.target.value))}
                            className="w-[120px]"
                            placeholder={formatPrice(13248)}
                            type="number"
                            value={valuePrice.priceFrom || ""}
                        />
                        <Input
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChangeInputPrice('priceTo', Number(event.target.value))}
                            className="w-[120px]"
                            placeholder={formatPrice(201930)}
                            type="number"
                            value={valuePrice.priceTo || ""}
                        />
                    </div>
                    <Slider
                        onValueChange={(value) => handleChangeSliderPrice(value)}
                        className="cursor-pointer max-w-[245px] mx-auto"
                        value={[valuePrice.priceFrom, valuePrice.priceTo]}
                        min={0}
                        max={10000}
                        step={100}
                    />
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};