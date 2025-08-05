import React from "react";
import { Chairs } from "@/views/catalogs/chairs";
import { instance } from "@/shared/lib/axios-instance";
import { PATCH } from "@/shared/config/pages.config";

const getChairs = async () => {
    try {
        const results = await instance.get(PATCH.CHAIRS);

        return results.data;
    }catch (error) {
        return null;
    }
}

const ChairsCatalog = async () => {
    const data = await getChairs();

    if(!data) {
        throw new Error("ошибка")
    }

    return (
        <main>
            <Chairs products={data}/>
        </main>
    );
};

export default ChairsCatalog;
