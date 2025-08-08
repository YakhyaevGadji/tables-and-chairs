export type TypeAttributes = {
    color?: string;
    colorFrame?: string;
    colorPillow?: string;
    material?: string;
    materialFrame?: string;
    materialPillow?: string;
    totalHeight?: string;
    width?: string;
};

export const productCharacteristicsSchema: Record<keyof TypeAttributes, string> = {
    color: "Цвет",
    colorFrame: "Цвет каркаса",
    colorPillow: "Цвет подушек",
    material: "Материал",
    materialFrame: "Материал каркаса",
    materialPillow: "Материал подушек",
    totalHeight: "Общая высота",
    width: "Ширина",
};
