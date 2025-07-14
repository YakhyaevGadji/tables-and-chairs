export const EnumStatus = {
    SUCCESS: "SUCCESS"
} as const

export type EnumStatus = (typeof EnumStatus)[keyof typeof EnumStatus]

export const PAGES = {
    PROFILE: (username: string) => `/u/${username}`
}