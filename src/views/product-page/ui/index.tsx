"use client";

import { TypeChair } from "@/entities/product";
import Container from "@/shared/ui/container";
import { useGetOneProductQuery } from "@/entities/product/api/thunks";
import { Heart } from "lucide-react";
import { Button } from "@/shared/ui/button";
import { useState } from "react";
import useFormatterPrice from "@/shared/hooks/use-formatter-price";
import Badges from "@/views/product-page/ui/badges";
import { PATCH } from "@/shared/config/pages.config";
import { useFormatterImgs } from "@/shared/hooks/use-formatter-imgs";
import SliderPhotos from "./slider-photos";
import { QuantitySelector } from "./quantity-selector";
import { ProductChars } from "./product-chars";
import { ProductInfo } from "./product-info";

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
                        <div className="mb-10">
                            <Badges isStock={currentData.inStock} />
                            <h2 className="text-4xl font-bold mb-4">{currentData.title}</h2>
                            <div className="flex items-center gap-2">
                                <span className="block mb-4 text-4xl font-medium">{formatPrice(currentData.price)}</span>
                                <span className="block mb-4 text-2xl text-gray-500 line-through font-normal">{formatPrice(currentData.price)}</span>
                            </div>
                        </div>
                        <ProductChars attributes={currentData.attributes} description={currentData.description} className="w-full mb-10 flex-1 min-h-[400px]" />

                        <div>
                            <div className="flex items-center gap-5 mb-3">
                                <QuantitySelector
                                    value={selectedQuantity}
                                    onChange={setSelectedQuantity}
                                />
                                <Button className="py-6 flex-1/2 font-normal bg-green select-none">Добавить в корзину</Button>
                            </div>
                            <Button variant={"outline"} className="w-full py-[22px] mb-8">   Добавить в избранное <Heart /></Button>

                            <ProductInfo />
                        </div>
                    </div>
                </div>
                {/* <SingleProductTabs
                attributes={data.attributes}
                description={data.description}
            /> */}
            </div>
        </Container>
    );
};
