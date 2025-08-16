export type TypeImage = {
    id: string;
    product_id: string;
    url: string;
    filename: string;
    created_at: string;
}

export type TypeAttributes = {
    color: string;
    colorFrame: string;
    colorPillow: string;
    material: string;
    materialFrame: string;
    materialPillow: string;
    totalHeight: number;
    width: number;
}

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
    images: TypeImage[];
    tags: string[];
    createdAt: string;
    updatedAt: string;
    attributes: TypeAttributes;
};

export type typeImageCarousel = Pick<TypeImage, "id" | "url">;
