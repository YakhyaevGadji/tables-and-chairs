"use client"

import { API_ROUTES } from "@/shared/api/endpoints"
import { getUserSession } from "@/shared/lib/get-user-session"
import { redirect } from "next/navigation"


export default async function ProfilePage() {
    const getUser = await getUserSession()

    if (!getUser) {
        return redirect(API_ROUTES.HOME)
    }
    return (
        <div>ProfilePage</div>
    )
}