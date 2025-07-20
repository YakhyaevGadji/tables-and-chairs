'use client'

import React from "react";
import { Product, ProductSkeleton } from "@/entities/product";
import { useGetProductsQuery } from "@/entities/product/api/thunks";

export const ProductList = () => {
    const { data, isLoading } = useGetProductsQuery();

    if(isLoading) return <ProductSkeleton count={5}/>
    if(!data) return null

    return (
        <ul className="grid grid-cols-3 grid-rows-6 gap-4">
            {data?.map((product) => (
                <Product
                    key={product.id}
                    data={product}
                />
            ))}
        </ul>
    );
};