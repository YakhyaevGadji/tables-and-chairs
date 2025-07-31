"use client";

import { useGetOneProductQuery } from "@/entities/product/api/thunks";
import { TypeChair } from "@/entities/product";
import Container from "@/shared/ui/container";
import useFormatterPrice from "@/shared/hooks/use-formatter-price";
import { Button } from "@/shared/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";
import Image from "next/image";
import { Badge } from "@/shared/ui/badge";
import { CircleAlert, Minus, Plus, Shield, Truck } from "lucide-react";
import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/shared/ui/alert";
import { API_GLOBAL } from "@/shared/lib/axios-instance";

interface Props {
    product: TypeChair;
}

export const ProductPage = ({ product }: Props) => {
    const [count, setCount] = useState(6);
    const { formatPrice } = useFormatterPrice();
    const { data } = useGetOneProductQuery(product.slug, {
        skip: !product.slug,
    });

    const currentData = data ?? product;

    const handlerClickCount = (type: string) => {
        if(type === 'plus') {
            setCount(count + 1);
        }else if(type === 'minus') {
            setCount((count) => count > 1 ? count - 1 : 1);
        }
    }

    return (
        <Container className="my-5">
            <div className="grid mb-4 lg:grid-cols-2 gap-8 lg:gap-12">
                <Image width={560} height={560} src={`${API_GLOBAL}${currentData.images[0].url}`} alt={currentData.title}/>
                <div className="w-full flex flex-col justify-between">
                    <div>
                        {currentData.inStock ? (
                            <Badge variant="outline" className="mb-2 text-green border-green">
                                В наличии
                            </Badge>
                        ) : (
                            <Badge variant="destructive" className="mb-2 text-green border-green">
                                В наличии
                            </Badge>
                        )}
                        <h2 className="text-4xl font-bold mb-4">{currentData.title}</h2>
                        <div className="flex items-center gap-2">
                            <span className="block mb-4 text-4xl font-medium">{formatPrice(currentData.price)}</span>
                            <span className="block mb-4 text-2xl text-gray-500 line-through font-normal">{formatPrice(currentData.price)}</span>
                        </div>
                    </div>
                    {count !== 6 && (
                        <Alert className="text-yellow-600 border-yellow-600" variant="default">
                            <CircleAlert />
                            <AlertTitle>Скрои выполнения заказа</AlertTitle>
                            <AlertDescription>
                                Минимальный заказ стульев — от 6 штук. При изменении их количества срок ожидания составит 2 недели.
                            </AlertDescription>
                        </Alert>
                    )}
                    {!currentData.inStock && (
                        <Alert className="text-yellow-600 border-yellow-600" variant="default">
                            <CircleAlert />
                            <AlertTitle>Скрои выполнения заказа</AlertTitle>
                            <AlertDescription>
                                Срок изготовления стола составляет примерно 2 недели.
                            </AlertDescription>
                        </Alert>
                    )}
                    <div>
                        <div className="flex w-[150px] mb-4 p-1 border-1 justify-between border-[#777] ">
                            <Minus
                                onClick={() => handlerClickCount('minus')}
                                className="text-[#777] cursor-pointer"
                            />
                            <input disabled={true} className="w-[60px]" value={count} type="number" />
                            <Plus
                                onClick={() => handlerClickCount('plus')}
                                className="text-[#777] cursor-pointer"
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
            <Tabs defaultValue="description">
                <TabsList className="rounded-none">
                    <TabsTrigger className="rounded-none" value="description">Описание</TabsTrigger>
                    <TabsTrigger className="rounded-none" value="characteristics">Характеристики</TabsTrigger>
                </TabsList>
                <TabsContent value="description">{currentData.description}</TabsContent>
                <TabsContent value="characteristics">
                    <div className="bg-white rounded-xl p-3">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                                <div className="flex justify-between py-2 border-b border-gray-100">
                                    <span className="text-gray-600">Материал каркаса:</span>
                                    <span className="font-medium">{currentData.attributes.material}</span>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-between py-2 border-b border-gray-100">
                                    <span className="text-gray-600">Высота:</span>
                                    <span className="font-medium">{currentData.attributes.totalHeight}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabsContent>
            </Tabs>
        </Container>
    );
};
