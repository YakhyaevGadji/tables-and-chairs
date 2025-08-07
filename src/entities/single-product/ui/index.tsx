import { Shield, Truck } from "lucide-react";
import { Button } from "@/shared/ui/button";
import { useState } from "react";
import useFormatterPrice from "@/shared/hooks/use-formatter-price";
import { TypeChair } from "@/entities/product";
import Badges from "@/entities/single-product/ui/badges";
import SingleProductTabs from "@/entities/single-product/ui/single-product-tabs";
import { PATCH } from "@/shared/config/pages.config";
import { useFormatterImgs } from "@/shared/hooks/use-formatter-imgs";
import SliderPhotos from "./slider-photos";
import { QuantitySelector } from "./quantity-selector";

interface IPropsSingleProduct {
    data: TypeChair;
}

export const SingleProduct = ({ data }: IPropsSingleProduct) => {
    const [count, setCount] = useState(6);
    const { formatPrice } = useFormatterPrice();
    const images = useFormatterImgs(data.images, PATCH.IMAGE)
    const [selectedQuantity, setSelectedQuantity] = useState(1)
    return (
        <div>
            <div className="grid mb-4 lg:grid-cols-2 gap-8 lg:gap-12">
                <SliderPhotos images={images} />

                <div className="w-full flex flex-col justify-between">
                    <div>
                        <Badges isStock={data.inStock} />
                        <h2 className="text-4xl font-bold mb-4">{data.title}</h2>
                        <div className="flex items-center gap-2">
                            <span className="block mb-4 text-4xl font-medium">{formatPrice(data.price)}</span>
                            <span className="block mb-4 text-2xl text-gray-500 line-through font-normal">{formatPrice(data.price)}</span>
                        </div>
                    </div>

                    <div>
                        <div className="max-w-[200px]">
                            <QuantitySelector
                                value={selectedQuantity}
                                onChange={setSelectedQuantity}
                            />
                        </div>

                        <Button className="mb-4 w-full font-normal bg-green select-none">Добавить в корзину</Button>
                        <div className="grid grid-cols-2 gap-4 p-4 bg-green-50">
                            <div className="flex items-center gap-2">
                                <Truck className="w-5 h-5 text-green-600" />
                                <span className="text-sm text-gray-700">Бесплатная доставка по Махачкале</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Shield className="w-5 h-5 text-green-600" />
                                <span className="text-sm text-gray-700">Гарантия 1 год</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SingleProductTabs
                attributes={data.attributes}
                description={data.description}
            />
        </div>
    );
};

