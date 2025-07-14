import React from "react";
import Container from "@/shared/ui/container";
import Logo from "@/shared/ui/logo";
import NavList from "@/widgets/header/ui/nav-list";
import { Button } from "@/shared/ui/button";
import { LogIn } from "lucide-react";

export type TypeNavs = {
    value: string;
    href: string;
}

const navs = [
    {value: 'Главная', href: '/'},
    {value: 'Каталог', href: '/catalog'},
    {value: 'О нас', href: '/about'}
];

export const Header = () => {
    return (
        <header className="py-5 bg-[#F7F8F9]">
            <Container className="flex items-center justify-between">
                <Logo/>
                <NavList navs={navs}/>
                <Button>
                    Войти
                    <LogIn />
                </Button>
            </Container>
        </header>
    );
};