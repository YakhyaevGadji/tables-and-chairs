import React from "react";
import { ProductList } from "@/widgets/product-list";
import Container from "@/shared/ui/container";
import FiltersGroup from "@/widgets/filters-group/ui";
import { TypeProduct } from "@/app/types";

interface IPropsChairs {
    products: TypeProduct[]
}

export const Chairs = ({ products }: IPropsChairs) => {
    return (
        <Container className="grid grid-cols-[280px_1fr] p-0 gap-6">
            <FiltersGroup className="sticky p-3 top-4 self-start h-[400px]" />
            <ProductList data={products} />
        </Container>
    );
};