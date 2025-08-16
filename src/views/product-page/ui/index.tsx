"use client";

import { TypeChair } from "@/entities/product";
import Container from "@/shared/ui/container";
import { useGetOneProductQuery } from "@/entities/product/api/thunks";
import { useState } from "react";
import useFormatterPrice from "@/shared/hooks/use-formatter-price";
import { PATCH } from "@/shared/config/pages.config";
import { useFormatterImgs } from "@/shared/hooks/use-formatter-imgs";
import SliderPhotos from "./slider-photos";
import { QuantitySelector } from "./quantity-selector";
import { ProductChars } from "./product-chars";
import { ProductInfo } from "./product-info";
import { AddToCartButton } from "@/features/add-to-cart";
import { ProductHeading } from "./product-heading";
import { AddToFavoriteButton } from "@/features/add-to-favorite";
import { Heart } from "lucide-react";

interface Props {
    product: TypeChair;
}

export const ProductPage = ({ product }: Props) => {
    const { data } = useGetOneProductQuery(product.slug, {
        skip: !product.slug,
    });
    const charQuantity = data?.category === "chair" ? 6 : 1
    const [selectedQuantity, setSelectedQuantity] = useState(charQuantity)


    const currentData = data ?? product;

    const { formatPrice } = useFormatterPrice();
    const images = useFormatterImgs(currentData.images, PATCH.IMAGE)
    const hasDiscount = currentData.oldPrice > 0;
    const discount = Math.round((currentData.oldPrice - currentData.price) / currentData.oldPrice * 100);
    const price = formatPrice(currentData.price);
    const oldPrice = formatPrice(currentData.oldPrice || 0);
    return (
        <Container className="my-5">
            <div>
                <div className="grid mb-4 lg:grid-cols-2 gap-8 lg:gap-12">
                    <SliderPhotos images={images} />

                    <div className="w-full flex flex-col">
                        <ProductHeading title={currentData.title} price={price} hasDiscount={hasDiscount} oldPrice={oldPrice} inStock={currentData.inStock} />
                        <ProductChars attributes={currentData.attributes} description={currentData.description} className="w-full mb-10 flex-1 min-h-[400px]" />

                        <div>
                            <div className="flex items-center gap-5 mb-3">
                                <QuantitySelector
                                    value={selectedQuantity}
                                    onChange={setSelectedQuantity}
                                />
                                <AddToCartButton className="py-6 flex-1/2 " idProduct={currentData.id} quantity={selectedQuantity} />
                            </div>
                            <AddToFavoriteButton idProduct={currentData.id} className="w-full mb-4 py-6" type="outline">
                                Добавить в избранное <Heart />
                            </AddToFavoriteButton>

                            <ProductInfo />
                        </div>
                    </div>
                </div>

            </div>
        </Container >
    );
};
