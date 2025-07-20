export type TypeChair = {
    id: string;
    title: string;
    description: string;
    category: string;
    type: string;
    slug: string;
    price: number;
    oldPrice: number;
    inStock: boolean;
    unitCount: number;
    images: string[];
    tags: string[];
    createdAt: string;
    updatedAt: string;
    attributes: {
        color: string;
        colorFrame: string;
        colorPillow: string;
        material: string;
        materialFrame: string;
        materialPillow: string;
        totalHeight: number;
        width: number;
    };
};