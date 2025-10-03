import React, { useState } from "react";
import { TypeChair } from "@/entities/product";
import { cn } from "@/shared/lib/utils";
import Link from "next/link";
import { PAGES, PATCH } from "@/shared/config/pages.config";
import { Heart, Shield, Truck } from "lucide-react";
import useFormatterPrice from "@/shared/hooks/use-formatter-price";
import { AddToFavoriteButton } from "@/features/add-to-favorite";
import { AddToCartButton } from "@/features/add-to-cart";
import { DiscountBadge } from "@/shared/ui/discount";
import { ProductInstock } from "./product-in-stock";
import { objSchema } from "../model/data-schema";
import { ProductInfo } from "./product-info";
import { ProductCarousel } from "./product-carousel";
import { useFormatterImgs } from "@/shared/hooks/use-formatter-imgs";

interface IPropsProduct {
    data: TypeChair;
    className?: string;
}

export const Product = ({ className, data }: IPropsProduct) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)


    const { formatPrice } = useFormatterPrice();
    const hasDiscount = data.oldPrice || 0 > 0;
    const discount = Math.round((data.oldPrice || 0 - data.price) / (data.oldPrice || 0) * 100);
    const price = formatPrice(data.price);
    const oldPrice = formatPrice(data.oldPrice || 0);
    
    // const images = useFormatterImgs(data.images, PATCH.IMAGE)

    return (
        <li className={cn('cursor-pointer', className)}>

            <div className=" relative rounded-md bg-white  transition-all hover:shadow-md hover:scale-101  duration-200 ease-in-out  cursor-pointer group  ">
                <Link href={PAGES.PRODUCT(data.slug)}>
                    {
                        hasDiscount && <DiscountBadge discount={discount} className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10" />
                    }
                    <AddToFavoriteButton idProduct={data.slug} type="ghost" className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors duration-300 z-10" >
                        <Heart width={24} height={24} className="w-5 h-5 text-gray-600 hover:text-red-500" />
                    </AddToFavoriteButton>

                    {/* Product Image */}
                    <ProductCarousel imgs={data.images} currentImageIndex={currentImageIndex} setCurrentImageIndex={setCurrentImageIndex} />

                    {/* Product Info - Base content */}
                    <div className="px-6 py-4">
                        <ProductInstock inStock={data.inStock} className="flex items-center gap-2 text-sm" />

                        <div className="mb-4">
                            <h3 className="text-lg font-semibold text-gray-900 mb-1">{data.title}</h3>
                            <p className="text-sm text-gray-500 mb-3">{objSchema[data.category.label]}</p>
                            <div className="flex items-center gap-2">
                                <div className="text-2xl font-bold text-gray-900">{price}</div>
                                {
                                    hasDiscount && <div className="text-lg text-gray-400 line-through">{oldPrice}</div>
                                }
                            </div>
                        </div>

                        <ProductInfo className="mb-4" material={data.attributes.material} width={data.attributes.width} totalHeight={data.attributes.totalHeight} />

                        <AddToCartButton className="w-full" idProduct={data.slug} quantity={1} />
                    </div>
                </Link>
            </div>


        </li >
    );
};