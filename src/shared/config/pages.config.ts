import { API_URL } from "@/shared/lib/axios-instance";

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
    //временно
    IMAGE: (type: string) => `http://212.193.48.233:8080${type}`
}