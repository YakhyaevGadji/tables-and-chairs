import { TypeImage } from "@/app/types";

export const useFormatterImgs = (imgs: TypeImage[], fn = (arg: string) => (`${arg}`)) => {
    return imgs.map(({ url, id }) => ({ url: fn(url), id }))
}