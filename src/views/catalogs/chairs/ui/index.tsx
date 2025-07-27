import React from "react";
import { ProductList } from "@/widgets/product-list";
import Container from "@/shared/ui/container";
import { TypeChair } from "@/entities/product";

interface IPropsChairs {
    products: TypeChair[]
}

export const Chairs = ({products}: IPropsChairs) => {
    return (
        <Container>
            <ProductList data={products}/>
        </Container>
    );
};