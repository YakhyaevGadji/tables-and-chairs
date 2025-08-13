'use client'

import React from "react";
import { FilterPrice } from "@/features/filters";
import { cn } from "@/shared/lib/utils";
import { useFilters } from "@/features/filters/model/use-filters";

interface IPropsFiltersGroup {
    className?: string;
}

const FiltersGroup = ({className}: IPropsFiltersGroup) => {
    const { handlePriceChange } = useFilters();

    return (
        <div className={cn("", className)}>
            <FilterPrice onChange={(price) => handlePriceChange(price)}/>
        </div>
    );
};

export default FiltersGroup;
