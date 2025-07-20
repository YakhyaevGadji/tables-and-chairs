"use client"

import { AuthPage } from "@/view/auth";
import { useParams } from "next/navigation";

export default function page() {
    const { auth } = useParams()

    if (auth !== "login" && auth !== "register") return null;
    return (
        <div>
            <AuthPage pathname={auth} />
        </div>
    );
}