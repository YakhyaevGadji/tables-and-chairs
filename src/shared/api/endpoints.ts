export const API_ROUTES = {
    HOME: "/",
    AUTH: {
        LOGIN: "/auth/login",
        REGISTER: "/auth/register",
        AUTH_ME: "/auth/me",
    },
    PRODUCTS: {
        ALL: "/products",
        BY_ID: (id: string) => `/products/${id}`,
    },
} as const;

export const API_REQUEST = {
    ADMIN: {
        ADMIN: '/admin',
        AUTH: '/admin/auth',
        PRODUCTS: '/admin/products',
        APPLICATIONS: '/admin/applications',
        ANALYTICS: '/admin/analytics',
    },
} as const;

export type API_ROUTES = (typeof API_ROUTES)[keyof typeof API_ROUTES]