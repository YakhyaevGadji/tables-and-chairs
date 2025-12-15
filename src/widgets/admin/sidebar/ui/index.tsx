import React from "react";
import { ActiveLink } from "@/shared/ui/active-link";
import { BarChart3, Grid3x3, LogOut, Package, ShoppingCart } from "lucide-react";
import { Button } from "@/shared/ui/button";
import { API_REQUEST } from "@/shared/api/endpoints";
//TODO refactor: распределить по компонентам этот компонент
export const SidebarNav = () => {
    return (
        <aside className="bg-gray-200 max-w-[250px] w-full rounded-tr-md rounded-br-md h-full flex flex-col justify-between">
            <div>
                <h1 className="text-2xl p-6 border-b-1 border-gray-700">T/C admin</h1>

                <nav className="p-4">
                    <ul className="flex-col space-y-2">
                        <li>
                            <ActiveLink
                                className="[&.active]:bg-gray-900 [&.active]:text-white hover:bg-gray-400 transition items-center rounded-md gap-2 px-4 py-3 flex"
                                href={API_REQUEST.ADMIN.ADMIN}>
                                <Grid3x3 />
                                Обзор
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink
                                className="[&.active]:bg-gray-900 [&.active]:text-white hover:bg-gray-400 transition items-center rounded-md gap-2 px-4 py-3 flex"
                                href={API_REQUEST.ADMIN.PRODUCTS}>
                                <Package />
                                Товары
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink
                                className="[&.active]:bg-gray-900 [&.active]:text-white hover:bg-gray-400 transition items-center rounded-md gap-2 px-4 py-3 flex"
                                href={API_REQUEST.ADMIN.APPLICATIONS}>
                                <ShoppingCart />
                                Заявки
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink
                                className="[&.active]:bg-gray-900 [&.active]:text-white hover:bg-gray-400 transition items-center rounded-md gap-2 px-4 py-3 flex"
                                href={API_REQUEST.ADMIN.ANALYTICS}>
                                <BarChart3 />
                                Аналитика
                            </ActiveLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <Button className="m-4  ">
                <LogOut size={20} />
                <span className="font-medium">Выход</span>
            </Button>
        </aside>
    );
};

