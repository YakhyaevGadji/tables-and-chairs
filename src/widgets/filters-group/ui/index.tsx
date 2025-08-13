import React from "react";
import { FilterPrice } from "@/features/filters";
import { cn } from "@/shared/lib/utils";

interface IPropsFiltersGroup {
    className?: string;
}

const FiltersGroup = ({className}: IPropsFiltersGroup) => {
    return (
        <div className={cn("bg-gray-50 px-3 shadow-sm rounded-xl border", className)}>
            <FilterPrice/>
        </div>
    );
};

export default FiltersGroup;
