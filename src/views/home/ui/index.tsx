'use client'

import React from "react";
import { PromoCarousel } from "@/widgets/promo-carousel";
import Container from "@/shared/ui/container";

export const HomePage = () => {
    return (
        <main>
            <Container>
                <PromoCarousel/>
            </Container>
        </main>
    );
};