export type TypeFromInputs = {
    email: string;
    password: string;
}

export type TypeChairType = 'chair' | 'table';

export type TypeChairOption = {
    value: string;
    label: string;
}

export interface TypeChairAttributes {
    color: TypeChairOption;
    material: TypeChairOption;
    width: number;
    height: number;
}

export type TypeChair = {
    id: number;
    title: string;
    description: string;
    hit: boolean;
    type: 'chair' | 'table';
    price: number;
    images: string[];
    tags: TypeChairOption[];
    attributes: TypeChairAttributes;
}