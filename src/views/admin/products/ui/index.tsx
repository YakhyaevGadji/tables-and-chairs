"use client"
import React from "react";
import { Button } from "@/shared/ui/button";
import { Plus } from "lucide-react";
import Image from 'next/image'

export const ProductsPageAdmin = () => {
    return (
        <div>
            <div className="flex mb-7 items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold mb-2">Управление товарами</h2>
                    <p>Всего товаров: 3</p>
                </div>
                <Button className="py-7 w-[203px]">
                    <Plus />
                    Добавить товар
                </Button>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
                <li className="hover:shadow border-1 transition rounded-md overflow-hidden max-w-[330px]">
                    <Image
                        src="https://placehold.co/330x190"
                        width={330}
                        height={190}
                        alt="iamge"
                    />
                    <div className="p-4">
                        <h3 className="font-semibold mb-2 text-[18px]">Кухонный стул Лондон</h3>
                        <ul className="space-y-1">
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">Цена:</p>
                                <p className="text-[16px] font-semibold">4 500 ₽</p>
                            </li>
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">На складе:</p>
                                <p className="text-[16px] font-semibold">25 шт.</p>
                            </li>
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">Продано:</p>
                                <p className="text-[16px] font-semibold">156 шт.</p>
                            </li>
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">Категория:</p>
                                <p className="text-[16px] font-semibold">Стулья</p>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="hover:shadow border-1 transition rounded-md overflow-hidden max-w-[330px]">
                    <Image
                        src="https://placehold.co/330x190"
                        width={330}
                        height={190}
                        alt="iamge"
                    />
                    <div className="p-4">
                        <h3 className="font-semibold mb-2 text-[18px]">Кухонный стул Лондон</h3>
                        <ul className="space-y-1">
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">Цена:</p>
                                <p className="text-[16px] font-semibold">4 500 ₽</p>
                            </li>
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">На складе:</p>
                                <p className="text-[16px] font-semibold">25 шт.</p>
                            </li>
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">Продано:</p>
                                <p className="text-[16px] font-semibold">156 шт.</p>
                            </li>
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">Категория:</p>
                                <p className="text-[16px] font-semibold">Стулья</p>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="hover:shadow border-1 transition rounded-md overflow-hidden max-w-[330px]">
                    <Image
                        src="https://placehold.co/330x190"
                        width={330}
                        height={190}
                        alt="iamge"
                    />
                    <div className="p-4">
                        <h3 className="font-semibold mb-2 text-[18px]">Кухонный стул Лондон</h3>
                        <ul className="space-y-1">
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">Цена:</p>
                                <p className="text-[16px] font-semibold">4 500 ₽</p>
                            </li>
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">На складе:</p>
                                <p className="text-[16px] font-semibold">25 шт.</p>
                            </li>
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">Продано:</p>
                                <p className="text-[16px] font-semibold">156 шт.</p>
                            </li>
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">Категория:</p>
                                <p className="text-[16px] font-semibold">Стулья</p>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="hover:shadow border-1 transition rounded-md overflow-hidden max-w-[330px]">
                    <Image
                        src="https://placehold.co/330x190"
                        width={330}
                        height={190}
                        alt="iamge"
                    />
                    <div className="p-4">
                        <h3 className="font-semibold mb-2 text-[18px]">Кухонный стул Лондон</h3>
                        <ul className="space-y-1">
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">Цена:</p>
                                <p className="text-[16px] font-semibold">4 500 ₽</p>
                            </li>
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">На складе:</p>
                                <p className="text-[16px] font-semibold">25 шт.</p>
                            </li>
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">Продано:</p>
                                <p className="text-[16px] font-semibold">156 шт.</p>
                            </li>
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">Категория:</p>
                                <p className="text-[16px] font-semibold">Стулья</p>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="hover:shadow border-1 transition rounded-md overflow-hidden max-w-[330px]">
                    <Image
                        src="https://placehold.co/330x190"
                        width={330}
                        height={190}
                        alt="iamge"
                    />
                    <div className="p-4">
                        <h3 className="font-semibold mb-2 text-[18px]">Кухонный стул Лондон</h3>
                        <ul className="space-y-1">
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">Цена:</p>
                                <p className="text-[16px] font-semibold">4 500 ₽</p>
                            </li>
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">На складе:</p>
                                <p className="text-[16px] font-semibold">25 шт.</p>
                            </li>
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">Продано:</p>
                                <p className="text-[16px] font-semibold">156 шт.</p>
                            </li>
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">Категория:</p>
                                <p className="text-[16px] font-semibold">Стулья</p>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="hover:shadow border-1 transition rounded-md overflow-hidden max-w-[330px]">
                    <Image
                        src="https://placehold.co/330x190"
                        width={330}
                        height={190}
                        alt="iamge"
                    />
                    <div className="p-4">
                        <h3 className="font-semibold mb-2 text-[18px]">Кухонный стул Лондон</h3>
                        <ul className="space-y-1">
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">Цена:</p>
                                <p className="text-[16px] font-semibold">4 500 ₽</p>
                            </li>
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">На складе:</p>
                                <p className="text-[16px] font-semibold">25 шт.</p>
                            </li>
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">Продано:</p>
                                <p className="text-[16px] font-semibold">156 шт.</p>
                            </li>
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">Категория:</p>
                                <p className="text-[16px] font-semibold">Стулья</p>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="hover:shadow border-1 transition rounded-md overflow-hidden max-w-[330px]">
                    <Image
                        src="https://placehold.co/330x190"
                        width={330}
                        height={190}
                        alt="iamge"
                    />
                    <div className="p-4">
                        <h3 className="font-semibold mb-2 text-[18px]">Кухонный стул Лондон</h3>
                        <ul className="space-y-1">
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">Цена:</p>
                                <p className="text-[16px] font-semibold">4 500 ₽</p>
                            </li>
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">На складе:</p>
                                <p className="text-[16px] font-semibold">25 шт.</p>
                            </li>
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">Продано:</p>
                                <p className="text-[16px] font-semibold">156 шт.</p>
                            </li>
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">Категория:</p>
                                <p className="text-[16px] font-semibold">Стулья</p>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="hover:shadow border-1 transition rounded-md overflow-hidden max-w-[330px]">
                    <Image
                        src="https://placehold.co/330x190"
                        width={330}
                        height={190}
                        alt="iamge"
                    />
                    <div className="p-4">
                        <h3 className="font-semibold mb-2 text-[18px]">Кухонный стул Лондон</h3>
                        <ul className="space-y-1">
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">Цена:</p>
                                <p className="text-[16px] font-semibold">4 500 ₽</p>
                            </li>
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">На складе:</p>
                                <p className="text-[16px] font-semibold">25 шт.</p>
                            </li>
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">Продано:</p>
                                <p className="text-[16px] font-semibold">156 шт.</p>
                            </li>
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">Категория:</p>
                                <p className="text-[16px] font-semibold">Стулья</p>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="hover:shadow border-1 transition rounded-md overflow-hidden max-w-[330px]">
                    <Image
                        src="https://placehold.co/330x190"
                        width={330}
                        height={190}
                        alt="iamge"
                    />
                    <div className="p-4">
                        <h3 className="font-semibold mb-2 text-[18px]">Кухонный стул Лондон</h3>
                        <ul className="space-y-1">
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">Цена:</p>
                                <p className="text-[16px] font-semibold">4 500 ₽</p>
                            </li>
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">На складе:</p>
                                <p className="text-[16px] font-semibold">25 шт.</p>
                            </li>
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">Продано:</p>
                                <p className="text-[16px] font-semibold">156 шт.</p>
                            </li>
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">Категория:</p>
                                <p className="text-[16px] font-semibold">Стулья</p>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="hover:shadow border-1 transition rounded-md overflow-hidden max-w-[330px]">
                    <Image
                        src="https://placehold.co/330x190"
                        width={330}
                        height={190}
                        alt="iamge"
                    />
                    <div className="p-4">
                        <h3 className="font-semibold mb-2 text-[18px]">Кухонный стул Лондон</h3>
                        <ul className="space-y-1">
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">Цена:</p>
                                <p className="text-[16px] font-semibold">4 500 ₽</p>
                            </li>
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">На складе:</p>
                                <p className="text-[16px] font-semibold">25 шт.</p>
                            </li>
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">Продано:</p>
                                <p className="text-[16px] font-semibold">156 шт.</p>
                            </li>
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">Категория:</p>
                                <p className="text-[16px] font-semibold">Стулья</p>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="hover:shadow border-1 transition rounded-md overflow-hidden max-w-[330px]">
                    <Image
                        src="https://placehold.co/330x190"
                        width={330}
                        height={190}
                        alt="iamge"
                    />
                    <div className="p-4">
                        <h3 className="font-semibold mb-2 text-[18px]">Кухонный стул Лондон</h3>
                        <ul className="space-y-1">
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">Цена:</p>
                                <p className="text-[16px] font-semibold">4 500 ₽</p>
                            </li>
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">На складе:</p>
                                <p className="text-[16px] font-semibold">25 шт.</p>
                            </li>
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">Продано:</p>
                                <p className="text-[16px] font-semibold">156 шт.</p>
                            </li>
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">Категория:</p>
                                <p className="text-[16px] font-semibold">Стулья</p>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="hover:shadow border-1 transition rounded-md overflow-hidden max-w-[330px]">
                    <Image
                        src="https://placehold.co/330x190"
                        width={330}
                        height={190}
                        alt="iamge"
                    />
                    <div className="p-4">
                        <h3 className="font-semibold mb-2 text-[18px]">Кухонный стул Лондон</h3>
                        <ul className="space-y-1">
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">Цена:</p>
                                <p className="text-[16px] font-semibold">4 500 ₽</p>
                            </li>
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">На складе:</p>
                                <p className="text-[16px] font-semibold">25 шт.</p>
                            </li>
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">Продано:</p>
                                <p className="text-[16px] font-semibold">156 шт.</p>
                            </li>
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">Категория:</p>
                                <p className="text-[16px] font-semibold">Стулья</p>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="hover:shadow border-1 transition rounded-md overflow-hidden max-w-[330px]">
                    <Image
                        src="https://placehold.co/330x190"
                        width={330}
                        height={190}
                        alt="iamge"
                    />
                    <div className="p-4">
                        <h3 className="font-semibold mb-2 text-[18px]">Кухонный стул Лондон</h3>
                        <ul className="space-y-1">
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">Цена:</p>
                                <p className="text-[16px] font-semibold">4 500 ₽</p>
                            </li>
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">На складе:</p>
                                <p className="text-[16px] font-semibold">25 шт.</p>
                            </li>
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">Продано:</p>
                                <p className="text-[16px] font-semibold">156 шт.</p>
                            </li>
                            <li className="flex justify-between">
                                <p className="text-[16px] text-gray-500">Категория:</p>
                                <p className="text-[16px] font-semibold">Стулья</p>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    );
};

