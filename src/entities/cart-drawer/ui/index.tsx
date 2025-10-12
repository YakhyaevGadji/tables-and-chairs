"use client"
import React, { useEffect, useState } from 'react';
import { cn } from '@/shared/lib/utils';
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/shared/ui/sheet';
import Image from 'next/image';
import { Button } from '@/shared/ui/button';
import { ArrowLeft, ArrowRight, Link } from 'lucide-react';
import { CartDrawerItem } from './cart-drawer-item';
import { useGetCartQuery, useUpdateCartItemMutation } from '..';
import { TypeCartItem } from '@/app/types';
import { debounce, set } from "lodash"
interface Props {
    children: React.ReactNode
}

export const CartDrawer: React.FC<Props> = ({ children }: Props) => {
    //Добавить футер
    //добавить  возможность удалить карточку из корзины 
    //добавить возможность добавлять карточку из корзины в избранное 
    //добавить возможность переходить на страницу карточке из корзины

    const { data, error, isLoading } = useGetCartQuery(1)
    const [totalAmount, setTotalAmount] = useState(0);
    const [cartItems, setCartItems] = useState<TypeCartItem[]>();
    const [discountSum, setDiscountSum] = useState(0);
    const [updateCartItem] = useUpdateCartItemMutation();
    const [lengthProducts, setLengthProducts] = useState(0);
    const handleChangeQuantity = (itemId: number, newQuantity: number) => {
        if (!data) return;

        setCartItems((cartItems) => {
            const updatedItems = cartItems!.map((item) =>
                item.productId === itemId ? { ...item, quantity: newQuantity } : item
            );
            setTotalAmount(updatedItems.reduce((acc, item) => acc + item.price * item.quantity, 0))
            setLengthProducts(updatedItems.reduce((acc, item) => acc + item.quantity, 0))
            setDiscountSum(updatedItems.reduce((acc, item) => item.discount && item.oldPrice ? acc + (item.oldPrice - item.price) * item.quantity : 0, 0))
            return updatedItems;
        });

    };


    const UpdateCart = () => {
        if (cartItems) {
            console.log(cartItems);
            updateCartItem({ id: data!.id, items: cartItems });
        }
    }

    useEffect(() => {
        if (data?.items) {
            setCartItems(data.items);
            setTotalAmount(data.items.reduce((acc, item) => acc + item.price * item.quantity, 0));
            setLengthProducts(data.items.reduce((acc, item) => acc + item.quantity, 0));
            setDiscountSum(data.items.reduce((acc, item) => item.discount && item.oldPrice ? acc + (item.oldPrice - item.price) * item.quantity : 0, 0))

        }
    }, [data]);
    return (
        <Sheet onOpenChange={(isOpen) => {
            if (!isOpen) UpdateCart();
        }} >
            <SheetTrigger asChild>{children}</SheetTrigger>
            <SheetContent style={{
                borderRadius: "12px 0 0 12px"
            }} className=' min-w-[600px] ' aria-describedby={undefined} >
                <div className={cn('flex flex-col h-full',
                    !totalAmount && 'justify-center')}>

                    {/* если есть товары в корзинце  */}
                    {totalAmount > 0 && (
                        <SheetHeader>
                            <SheetTitle>
                                В корзине <span className="font-bold">{lengthProducts} товара</span>
                            </SheetTitle>
                        </SheetHeader>
                    )}

                    {/* если нету  */}
                    {totalAmount === 0 && (
                        <div className="flex flex-col items-center justify-center w-72 h-full mx-auto">
                            <Image src="/assets/empty-box.png" alt="Empty cart" width={120} height={120} />
                            <SheetTitle>Корзина пуста</SheetTitle>

                            <p className="text-center text-neutral-500 mb-5">
                                Добавьте хотя бы один товар, чтобы сделать заказ
                            </p>

                            <SheetClose asChild>
                                <Button className="w-56 h-12 text-base" size="lg">
                                    <ArrowLeft className="w-5 mr-2" />
                                    Вернуться назад
                                </Button>
                            </SheetClose>
                        </div>
                    )}


                    {/* если есть  */}
                    {/* сами карточки и снизу футер */}

                    {totalAmount > 0 && (
                        <>
                            <div className="mx-6 mt-5 overflow-auto flex-1">
                                {cartItems?.map((item) => {

                                    return (
                                        <div key={item.productId} className="mb-2">
                                            <CartDrawerItem
                                                id={item.productId}
                                                oldPrice={item.oldPrice}
                                                imageUrl={item.imageUrl}
                                                attributes={item.attributes}
                                                title={item.title}
                                                price={item.price}
                                                quantity={item.quantity}
                                                onClickCountButton={handleChangeQuantity}
                                                onClickRemove={() => { }}
                                                inStock={false}
                                                description={item.description}
                                            />
                                        </div>
                                    )
                                })}
                            </div>

                            <SheetFooter className="mx-6 bg-white ">

                                {
                                    discountSum > 0 && (
                                        <div className="flex justify-between text-sm">
                                            <span className="text-muted-foreground">Скидка</span>
                                            <span className="font-medium text-green-600">−{discountSum} ₽</span>
                                        </div>
                                    )
                                }

                                <div className="border-t pt-4">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-lg font-semibold">Итого</span>
                                        <span className="text-2xl font-bold">{totalAmount} ₽</span>
                                    </div>
                                    <SheetClose asChild>
                                        <button
                                            onClick={() => {
                                                // здесь можно добавить переход на страницу оформления
                                                console.log("Переход к оформлению");
                                            }}
                                            className="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90 active:bg-primary/80"
                                        >
                                            Перейти к оформлению
                                        </button>
                                    </SheetClose>
                                </div>
                            </SheetFooter>
                        </>
                    )}

                </div>

            </SheetContent>
        </Sheet>
    );
};