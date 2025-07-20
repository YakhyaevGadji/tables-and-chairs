'use client'

import React from "react";
import { Button } from "@/shared/ui/button";
import { instance } from "@/shared/lib/axios-instance";
import { PATCH } from "@/shared/config/pages.config";

const Home = () => {
    const test = async () => {
        const data = await instance.post(PATCH.CHAIRS, {
            attributes: {
                color: "Серый",
                colorFrame: "Черный",
                colorPillow: "Темно-серый",
                material: "Велюр",
                materialFrame: "Металл",
                materialPillow: "Велюр",
                totalHeight: 90,
                width: 45
            },
            category: "chairs",
            createdAt: "2025-07-20T14:00:00Z",
            description: "Элегантный стул с обивкой из велюра и устойчивым металлическим каркасом. Идеально подходит для кухни или столовой.",
            id: "clw12345678",
            images: [
                "https://mebeldagestana.ru/wp-content/uploads/2022/07/223729043_181321234025734_4918709525323284191_n.jpg",
            ],
            inStock: true,
            oldPrice: 5499,
            price: 4499,
            slug: "stul-velyur-chernyy-karkas",
            tags: ["новинка", "велюр", "стул", "кухня"],
            title: "Стул велюровый на черном каркасе",
            type: "chair",
            unitCount: 1,
            updatedAt: "2025-07-20T14:00:00Z"
        });

        console.log(data);
    };

    return (
        <main>
            Home
            <Button onClick={() => test()}>Create</Button>
        </main>
    );
};

export default Home;