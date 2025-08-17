import React from "react";
import { ProductList } from "@/widgets/product-list";
import { TypeChair } from "@/entities/product";
import FiltersGroup from "@/widgets/filters-group/ui";
import { FilterSearch } from "@/features/filters";

interface IPropsChairs {
    products: TypeChair[]
}

export const Chairs = ({products}: IPropsChairs) => {
    return (
        <div className="grid grid-cols-[280px_1fr] gap-6">
            <FiltersGroup className="sticky top-4 self-start h-[400px]"/>
            <div>
                <FilterSearch/>
                <ProductList data={products}/>
            </div>
        </div>
    );
};