import React from "react";
import Container from "@/shared/ui/container";
import Logo from "@/shared/ui/logo";
import NavList from "@/widgets/header/ui/nav-list";
import { Button } from "@/shared/ui/button";
import { LogIn } from "lucide-react";
import { PAGES } from "@/shared/config/pages.config";
import { CartButton } from "@/entities/cart-button";
import { CartDrawer } from "@/entities/cart-drawer";

export type TypeNavs = {
    value: string;
    href: string;
}

const navs = [
    { value: 'Главная', href: PAGES.HOME },
    { value: 'Стулья', href: PAGES.CHAIRS },
    { value: 'О нас', href: PAGES.ABOUT }
];

export const Header = () => {
    return (
        <header className="py-5 bg-[#F7F8F9]">
            <Container className="flex items-center justify-between">
                <Logo priority={true} />
                <NavList navs={navs} />
                <Button className="bg-green">
                    Войти
                    <LogIn />

                </Button>
                <CartDrawer><CartButton count={3} /></CartDrawer>
            </Container>
        </header>
    );
};