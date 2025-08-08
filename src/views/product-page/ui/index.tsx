"use client";

import { TypeChair } from "@/entities/product";
import Container from "@/shared/ui/container";
import { useGetOneProductQuery } from "@/entities/product/api/thunks";
import { useState } from "react";
import useFormatterPrice from "@/shared/hooks/use-formatter-price";
import Badges from "@/views/product-page/ui/badges";
import { PATCH } from "@/shared/config/pages.config";
import { useFormatterImgs } from "@/shared/hooks/use-formatter-imgs";
import SliderPhotos from "./slider-photos";
import { QuantitySelector } from "./quantity-selector";
import { ProductChars } from "./product-chars";
import { ProductInfo } from "./product-info";
import { AddToCartButton } from "@/features/add-to-cart";
import { AddToFavorite } from "@/features/add-to-favorite";
import { ProductHeading } from "./product-heading";

interface Props {
    product: TypeChair;
}

export const ProductPage = ({ product }: Props) => {
    const { data } = useGetOneProductQuery(product.slug, {
        skip: !product.slug,
    });
    const [selectedQuantity, setSelectedQuantity] = useState(1)

    if (!data) return null

    const currentData = data ?? product;

    const { formatPrice } = useFormatterPrice();
    const images = useFormatterImgs(currentData.images, PATCH.IMAGE)

    return (
        <Container className="my-5">
            <div>
                <div className="grid mb-4 lg:grid-cols-2 gap-8 lg:gap-12">
                    <SliderPhotos images={images} />

                    <div className="w-full flex flex-col">
                        <ProductHeading title={currentData.title} price={formatPrice(currentData.price)} inStock={currentData.inStock} />
                        <ProductChars attributes={currentData.attributes} description={currentData.description} className="w-full mb-10 flex-1 min-h-[400px]" />

                        <div>
                            <div className="flex items-center gap-5 mb-3">
                                <QuantitySelector
                                    value={selectedQuantity}
                                    onChange={setSelectedQuantity}
                                />
                                <AddToCartButton idProduct={currentData.id} quantity={selectedQuantity} />
                            </div>
                            <AddToFavorite idProduct={currentData.id} />

                            <ProductInfo />
                        </div>
                    </div>
                </div>

            </div>
        </Container>
    );
};
