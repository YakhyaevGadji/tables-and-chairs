"use client";

import { TypeChair } from "@/entities/product";
import Container from "@/shared/ui/container";
import { SingleProduct } from "@/entities/single-product";
import { useGetOneProductQuery } from "@/entities/product/api/thunks";

interface Props {
    product: TypeChair;
}

export const ProductPage = ({ product }: Props) => {
    const { data } = useGetOneProductQuery(product.slug, {
        skip: !product.slug,
    });

    const currentData = data ?? product;

    return (
        <Container className="my-5">
            <SingleProduct data={currentData}/>
        </Container>
    );
};
