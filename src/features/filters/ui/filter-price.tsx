'use client'

import React from "react";
import { cn } from "@/shared/lib/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/shared/ui/accordion";
import { Slider } from "@/shared/ui/slider";
import { Input } from "@/shared/ui/input";
import useFormatterPrice from "@/shared/hooks/use-formatter-price";

interface IPropsFilterPrice {
    className?: string;
    onChange?: (value: number) => void;
}

export const FilterPrice = ({ className, onChange }: IPropsFilterPrice) => {
    const { formatPrice } = useFormatterPrice();

    return (
        <Accordion defaultValue="price" className={cn("", className)} type="single" collapsible>
            <AccordionItem  value="price">
                <AccordionTrigger className="hover:no-underline cursor-pointer text-[17px] pb-2 items-center">
                    Цена
                </AccordionTrigger>
                <AccordionContent>
                    <div className="flex mb-4 justify-between">
                        <Input onChange={() => onChange} className="w-[120px]" placeholder={formatPrice(13248)} type="number"/>
                        <Input className="w-[120px]" placeholder={formatPrice(201930)} type="number"/>
                    </div>
                    <Slider className="cursor-pointer m-2" defaultValue={[500, 900]} max={1000} step={100} />
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};


