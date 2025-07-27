'use client'

import React from "react";
import { Button } from "@/shared/ui/button";
import { instance } from "@/shared/lib/axios-instance";

const Home = () => {
    const test = async () => {
        const data = await instance.put('/products', {
            images: [
                "https://www.vistamebel.ru/article/stul-denver.jpg"
            ],
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