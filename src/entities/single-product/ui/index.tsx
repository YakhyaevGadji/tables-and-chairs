import Image from "next/image";
import { API_GLOBAL } from "@/shared/lib/axios-instance";
import { Shield, Truck } from "lucide-react";
import { Button } from "@/shared/ui/button";
import { useState } from "react";
import useFormatterPrice from "@/shared/hooks/use-formatter-price";
import { useGetOneProductQuery } from "@/entities/product/api/thunks";
import { TypeChair } from "@/entities/product";
import Badges from "@/entities/single-product/ui/badges";
import Count from "@/entities/single-product/ui/count";
import Message from "@/entities/single-product/ui/message";
import SingleProductTabs from "@/entities/single-product/ui/single-product-tabs";

interface IPropsSingleProduct {
    productData: TypeChair;
}

export const SingleProduct = ({productData}: IPropsSingleProduct) => {
    const [count, setCount] = useState(6);
    const { formatPrice } = useFormatterPrice();
    const { data } = useGetOneProductQuery(productData.slug, {
        skip: !productData.slug,
    });

    const currentData = data ?? productData;

    return (
        <div>
            <div className="grid mb-4 lg:grid-cols-2 gap-8 lg:gap-12">
                <Image width={560} height={560} src={`${API_GLOBAL}${currentData.images[0].url}`} alt={currentData.title}/>
                <div className="w-full flex flex-col justify-between">
                    <div>
                        <Badges isStock={currentData.inStock}/>
                        <h2 className="text-4xl font-bold mb-4">{currentData.title}</h2>
                        <div className="flex items-center gap-2">
                            <span className="block mb-4 text-4xl font-medium">{formatPrice(currentData.price)}</span>
                            <span className="block mb-4 text-2xl text-gray-500 line-through font-normal">{formatPrice(currentData.price)}</span>
                        </div>
                    </div>

                    <Message isOpen={count !== 6} title="Скрои выполнения заказа">
                        Минимальный заказ стульев — от 6 штук. При изменении их количества срок ожидания составит 2 недели.
                    </Message>

                    <div>
                        <Count onChange={(count) => setCount(count)} defaultValue={6}/>

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
                attributes={currentData.attributes}
                description={currentData.description}
            />
        </div>
    );
};

