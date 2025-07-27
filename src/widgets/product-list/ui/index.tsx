'use client'

import React from "react";
import { Product, TypeChair } from "@/entities/product";

interface IPropsProductList {
    data: TypeChair[];
}

export const ProductList = ({data}: IPropsProductList) => {
    return (
        <ul className="grid grid-cols-3 grid-rows-6 gap-4">
            {data.map((product) => (
                <Product
                    key={product.id}
                    data={product}
                />
            ))}
        </ul>
    );
};