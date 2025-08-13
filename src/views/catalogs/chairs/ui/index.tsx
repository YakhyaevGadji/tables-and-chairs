import React from "react";
import { ProductList } from "@/widgets/product-list";
import Container from "@/shared/ui/container";
import { TypeChair } from "@/entities/product";
import FiltersGroup from "@/widgets/filters-group/ui";

interface IPropsChairs {
    products: TypeChair[]
}

export const Chairs = ({products}: IPropsChairs) => {
    return (
        <Container className="grid grid-cols-[250px_1fr] gap-6">
            <FiltersGroup className="h-[400px]"/>
            <ProductList data={products}/>
        </Container>
    );
};