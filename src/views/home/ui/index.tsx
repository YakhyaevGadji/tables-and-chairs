'use client'

import React from "react";
import { Button } from "@/shared/ui/button";
import { instance } from "@/shared/lib/axios-instance";

const Home = () => {
    const test = async () => {
        const data = await instance.post('/products', {
            id: "chair-0015521",
            type: "product",
            category: "chair",
            title: "Стул 'Оскар'",
            slug: "chair-oskar-stull",
            description: "Удобный стул с мягкой обивкой в сером цвете Удобный стул с мягкой обивкой в сером цветеУдобный стул с мягкой обивкой в сером цвете Удобный стул с мягкой обивкой в сером цвете",
            price: 15000,
            inStock: true,
            images: [
                "https://mebeldagestana.ru/wp-content/uploads/2022/07/274688991_135028885680969_8093972797604350703_n.jpg"
            ],
            attributes: {
                color: "Серый",
                colorFrame: "черный",
                colorPillow: "синий",
                material: "Дуб",
                materialFrame: "",
                materialPillow: "Обычный",
                totalHeight: 84,
                width: 48
            },
            tags: ["новинка", "хит", "мягкий"],
            createdAt: "2025-07-15T10:00:00Z",
            updatedAt: "2025-07-15T10:00:00Z"
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