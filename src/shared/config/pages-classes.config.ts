export const EnumStatus = {
    SUCCESS: "SUCCESS"
}

export type EnumStatus = (typeof EnumStatus)[keyof typeof EnumStatus]

export const PAGES = {
    PROFILE: (username: string) => `/u/${username}`
}