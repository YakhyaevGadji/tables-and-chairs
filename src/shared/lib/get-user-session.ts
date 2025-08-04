import { getServerSession } from "next-auth";
import { authConfig } from "@/shared/config/auth";

export const getUserSession = async () => {
    const session = await getServerSession(authConfig)
    return session?.user ?? null
}