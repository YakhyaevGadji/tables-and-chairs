import React from "react";
import Container from "@/shared/ui/container";

export const SubHeader = () => {
    return (
        <div className="bg-[#101010] text-white">
            <Container className="flex items-center justify-between">
                <p className="py-2">Бесплатная доставка по Махачкале от 999₽</p>

                <div className="flex gap-4 items-center">
                    <p>
                        <span className="text-[#808080]">График работы: </span>
                        ежедневно, с 10:00 до 18:00
                    </p>
                    <p className="pl-4 border-l border-[#808080]">
                        г. Махачкала, проспект Амет-Хана Султана, 112
                    </p>
                </div>
            </Container>
        </div>
    );
};