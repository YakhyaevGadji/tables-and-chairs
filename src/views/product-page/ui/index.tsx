"use client";

import { TypeChair } from "@/entities/product";
import Container from "@/shared/ui/container";
import { SingleProduct } from "@/entities/single-product";

interface Props {
    product: TypeChair;
}

export const ProductPage = ({ product }: Props) => {
    return (
        <Container className="my-5">
            <SingleProduct productData={product}/>
        </Container>
    );
};
