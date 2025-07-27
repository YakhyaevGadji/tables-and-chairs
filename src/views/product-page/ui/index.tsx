"use client";

import { useGetOneProductQuery } from "@/entities/product/api/thunks";
import { TypeChair } from "@/entities/product";
import Container from "@/shared/ui/container";
import useFormatterPrice from "@/shared/hooks/use-formatter-price";
import { Button } from "@/shared/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";

interface Props {
    product: TypeChair;
}

export const ProductPage = ({ product }: Props) => {
    const { formatPrice } = useFormatterPrice();
    const { data } = useGetOneProductQuery(product.slug, {
        skip: !product.slug,
    });

    const currentData = data ?? product;

    return (
        <Container className="my-5">
            <div className="mb-5 flex gap-5">
                <div className="w-[560px] h-[560px] bg-gray-400"></div>
                <div>
                    <h2 className="text-[24px] font-medium">{currentData.title}</h2>
                    <p className="text-[20px] font-medium">{formatPrice(currentData.price)}</p>
                    <p className="mb-4">{currentData.description}</p>
                    <div>
                        <Button className="font-normal bg-green">Добавить в корзину</Button>
                    </div>
                </div>
            </div>
            <Tabs defaultValue="characteristics">
                <TabsList>
                    <TabsTrigger value="characteristics">Характеристики</TabsTrigger>
                    <TabsTrigger value="description">Описание</TabsTrigger>
                </TabsList>
                <TabsContent value="characteristics">пупуп</TabsContent>
                <TabsContent value="description">Change your password here.</TabsContent>
            </Tabs>
        </Container>
    );
};
