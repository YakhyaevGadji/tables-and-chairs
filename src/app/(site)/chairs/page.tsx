import React from "react";
import { Chairs } from "@/views/catalogs/chairs";
import { instance } from "@/shared/lib/axios-instance";
import { PATCH } from "@/shared/config/pages.config";

async function getChairs() {
    try {

        const { data } = await instance.get(PATCH.CHAIRS);

        return data;
    } catch (error) {
        console.error("Ошибка при загрузке стульев:", error);
        return [];
    }
}

export default async function Page() {
    const chairs = await getChairs();
    console.log(chairs);

    if (!chairs) {
        return <p>Нет данных</p>;
    }

    return (
        <main>
            <Chairs products={chairs} />
        </main>
    );
}
