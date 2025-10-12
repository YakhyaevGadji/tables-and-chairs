export type TypeImage = {
    id: string;
    productId: string;
    url: string;
    alt: string;

}

export type TypeAttributes = {
    color?: { value: string, label: string };
    colorFrame?: { value: string, label: string };
    colorPillow?: { value: string, label: string };
    material?: { value: string, label: string };
    materialFrame?: { value: string, label: string };
    materialPillow?: { value: string, label: string };
    totalHeight?: number;
    width?: number;
}
export type TypeTag = { value: string, label: string, type: string }
export type TypeProduct = {
    id: string;
    title: string;
    description: string;
    category: { value: string; label: string };
    type: string;
    slug: string;
    price: number;
    oldPrice: number | null;
    inStock: boolean;
    hit: boolean;
    discount: boolean;
    unitCount: number;
    images: TypeImage[];
    tags: TypeTag[];
    createdAt: string;
    updatedAt: string;
    attributes: TypeAttributes;
};


export type TypeCartItem = Pick<TypeProduct, "attributes" | "discount" | "hit" | "oldPrice"> & {
    productId: number,
    quantity: number,
    price: number,
    inStock: boolean,
    description: string,
    title: string
    imageUrl: string,
}
export type TypeCart = {
    id: number;
    userId: number;
    items: TypeCartItem[]
}