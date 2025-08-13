import React from "react";
import { cn } from "@/shared/lib/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/shared/ui/accordion";

interface IPropsFilterPrice {
    className?: string;
}

export const FilterPrice = ({ className }: IPropsFilterPrice) => {
    return (
        <Accordion className={cn("", className)} type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger className="text-[17px] items-center pb-1">Цена</AccordionTrigger>
                <AccordionContent>
                    <label>
                        <input type="checkbox" name="category" value="chairs" />
                        Стулья
                    </label>
                    <label>
                        <input type="checkbox" name="category" value="tables" />
                        Столы
                    </label>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};


