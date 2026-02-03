import { ProductPage } from "@/views/product-page";
import { instance } from "@/shared/lib/axios-instance";
import { PATCH } from "@/shared/config/pages.config";
import { Metadata } from "next";
import { cache } from "react";
import { TypeProduct } from "@/app/types";

interface IPropsProductPageRoute {
    params: Promise<{ slug: string }>;
}

const getProductCached = cache(async (slug: string) => {
    try {
        const products = await instance.get<TypeProduct | null>(PATCH.CHAIR(slug));

        return products.data;
    } catch (error) {
        console.error("Ошибка при загрузке продукта:", error);
        return null;
    }
});

export async function generateMetadata({ params }: IPropsProductPageRoute): Promise<Metadata> {
    const { slug } = await params;
    const product = await getProductCached(slug);

    if (!product) {
        return {
            title: "Товар не найден",
            description: "Указанный товар отсутствует в каталоге.",
        };
    }

    return {
        title: product.title,
        description: product.description,
    };
}

export default async function ProductPageRoute({ params }: IPropsProductPageRoute) {
    const { slug } = await params;
    const product = await getProductCached(slug);
  
    if (!product) {
        throw new Error("Товар не найден")
    }

    return (
        <main>
            <ProductPage product={product} />
        </main>
    );
}