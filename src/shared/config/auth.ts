import NextAuth, { AuthOptions } from "next-auth"

import GoogleProvider from "next-auth/providers/google"
import YandexProvider from "next-auth/providers/yandex"
import CredentialsProvider from "next-auth/providers/credentials"
import { instance } from "../lib/axios-instance"
import { API_ROUTES } from "../api/endpoints"
export const authConfig: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
            profile(profile) {
                return {
                    id: profile.id,
                    name: profile.name || profile.login,
                    email: profile.email,
                    role: "USER"
                }
            }
        }),
        YandexProvider({
            clientId: process.env.YANDEX_CLIENT_ID as string,
            clientSecret: process.env.YANDEX_SECRET as string
        }),
        CredentialsProvider(
            {
                name: "Credentials",
                credentials: {
                    password: { label: "password", type: "password" },
                    email: { label: "email", type: "email" }
                },
                async authorize(credentials) {
                    if (!credentials) return null
                    try {
                        const res = await instance.post(API_ROUTES.AUTH.LOGIN, {
                            email: credentials.email,
                            password: credentials.password,
                        });

                        const user = res.data.user;

                        if (user) {
                            return {
                                id: user.id || "",
                                email: user.email,
                                name: user.name,
                                role: user.role || "USER"
                            };
                        }

                        return null;
                    } catch (error) {
                        return null;
                    }

                }
            }
        ),

    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt"
    },
    callbacks: {
        async signIn({ user, account }) {
            try {

                //проверяем если пользователь аутентифицируется через ввод логина и пароля
                if (account?.provider === "credentials") {
                    return true
                }
                //проверяем если пользователь аутентифицируется через социальные сети и у него нет email возвращаем false
                if (!user.email) {
                    return false
                }

                //тут нужна своя логика уже 
                return false
            } catch (error) {
                return false
            }
        },
        async jwt({ token, user }) {
            if (user) {
                token.email = user.email;
                token.name = user.name;
                token.role = user.role
            }
            return token
        },
        session({ session, token }) {
            if (session.user) {
                session.user.email = token.email as string;
                session.user.name = token.name as string;
                session.user.role = token.role as string;
            }
            return session
        }
    }
}
