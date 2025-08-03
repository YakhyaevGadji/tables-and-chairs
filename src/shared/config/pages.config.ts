import { API_GLOBAL } from "@/shared/lib/axios-instance";

export const EnumStatus = {
    SUCCESS: "SUCCESS"
} as const

export type EnumStatus = (typeof EnumStatus)[keyof typeof EnumStatus]

export const PAGES = {
    PROFILE: (username: string) => `/u/${username}`,
    HOME: '/',
    CHAIRS: '/chairs',
    PRODUCT: (type: string) => `/chairs/${type}`,
    ABOUT: '/about'
}

export const PATCH = {
    CHAIRS: '/products?category=chair',
    CHAIR: (type: string) => `/products/${type}`,
    IMAGE: (type: string) => `${API_GLOBAL}${type}`
}