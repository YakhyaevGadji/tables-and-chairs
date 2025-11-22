import { useState } from "react";
import { TypeFilterPriceValue } from "@/features/filters";

export const useFilters = () => {
    const [valuePrice, setValuePrice] = useState<TypeFilterPriceValue>({
        priceFrom: 2400,
        priceTo: 8500
    });

    const handlePriceChange = (value: TypeFilterPriceValue) => {
        setValuePrice(value)
    }

    return {
        handlePriceChange,
        setValuePrice,
        valuePrice
    };
};


