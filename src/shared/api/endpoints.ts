export const API_ROUTES = {
    AUTH: {
        LOGIN: "/auth",
        REGISTER: "/register",
        AUTH_ME: "/auth_me",
    },
    PRODUCTS: {
        ALL: "/products",
        BY_ID: (id: string) => `/products/${id}`,
    },
} as const;

export type API_ROUTES = (typeof API_ROUTES)[keyof typeof API_ROUTES]