import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";
import { TypeAttributes } from "@/entities/product/model/types";

interface ISingleProductTabs {
    attributes: TypeAttributes;
    description: string;
}

const SingleProductTabs = ({ attributes, description }: ISingleProductTabs) => {
    return (
        <Tabs defaultValue="description">
            <TabsList className="rounded-none">
                <TabsTrigger className="rounded-none" value="description">Описание</TabsTrigger>
                <TabsTrigger className="rounded-none" value="characteristics">Характеристики</TabsTrigger>
            </TabsList>
            <TabsContent value="description">{description}</TabsContent>
            <TabsContent value="characteristics">
                <div className="bg-white rounded-xl p-3">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                            <div className="flex justify-between py-2 border-b border-gray-100">
                                <span className="text-gray-600">Материал каркаса:</span>
                                <span className="font-medium">{attributes.material}</span>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="flex justify-between py-2 border-b border-gray-100">
                                <span className="text-gray-600">Высота:</span>
                                <span className="font-medium">{attributes.totalHeight}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </TabsContent>
        </Tabs>
    );
};

export default SingleProductTabs;