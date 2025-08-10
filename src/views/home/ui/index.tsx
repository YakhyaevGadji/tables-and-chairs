'use client'

import React from "react";
import { PromoCarousel } from "@/widgets/promo-carousel";
import Container from "@/shared/ui/container";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/shared/ui/carousel";
import { useGetProductsQuery } from "@/entities/product/api/thunks";
import { Product } from "@/entities/product";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";

export const HomePage = () => {
    const {data} = useGetProductsQuery();

    if(!data) return null;

    return (
        <Container>
            <section className="mb-6">
                <PromoCarousel/>
            </section>

            <section>
                <Carousel>
                    <h2 className="text-[36px] mb-6">Новинки</h2>
                    <CarouselContent>
                        {data.map((product) => (
                            <CarouselItem className="list-none md:basis-1/2 lg:basis-1/4" key={product.id}>
                                <Product data={product}/>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    {/* //TODO баг при клике на CarouselPrevious в состоянии disabled */}
                    <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
                    <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
                </Carousel>
            </section>

            <section>
                <Accordion type="single" collapsible>
                    <h2 className="mb-5 text-[36px] font-medium">Популярные вопросы</h2>
                    <AccordionItem className="p-4 w-full bg-gray-100" value="item-1">
                        <AccordionTrigger className="text-left text-[24px]">Какие гарантии на мебель 12 стульев</AccordionTrigger>
                        <AccordionContent className="animate-in fade-in-0 slide-in-from-bottom-2 duration-500 text-[16px]">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet cum, cumque dolore ducimus eaque earum eveniet facere facilis fugit illo in minima omnis quae quaerat quo, quos repellendus soluta!
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem className="p-4 bg-gray-100" value="item-2">
                        <AccordionTrigger className="w-full text-left text-[24px]">Сроки изготовления столов и стульев на заказ</AccordionTrigger>
                        <AccordionContent className="text-[16px]">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequatur dolorem, dolores eaque incidunt ipsa laboriosam minus nam necessitatibus neque non numquam odio, officiis optio saepe sapiente, temporibus veritatis voluptates?
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem className="p-4 bg-gray-100" value="item-3">
                        <AccordionTrigger className="w-full text-left text-[24px]">Доставка</AccordionTrigger>
                        <AccordionContent className="text-[16px]">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci autem dolorum excepturi explicabo fugiat incidunt inventore iste libero modi natus nostrum optio porro, quasi quisquam quod tempore tenetur voluptate!
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>
        </Container>
    );
};