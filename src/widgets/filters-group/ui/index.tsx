'use client'

import React from "react";
import { FilterPrice } from "@/features/filters";
import { cn } from "@/shared/lib/utils";
import { useFilters } from "@/features/filters/model/use-filters";

interface IPropsFiltersGroup {
    className?: string;
}

const FiltersGroup = ({className}: IPropsFiltersGroup) => {
    const {
        handlePriceChange,
        valuePrice
    } = useFilters();

    return (
        <div className={cn("shadow-lg border rounded-[8px]", className)}>
            <FilterPrice
                onChange={(price) => handlePriceChange(price)}
                valuePrice={valuePrice}
            />
        </div>
    );
};

export default FiltersGroup;
