"use client"
import React, { useEffect, useState } from 'react';
import { cn } from '@/shared/lib/utils';
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/shared/ui/sheet';
import Image from 'next/image';
import { Button } from '@/shared/ui/button';
import { ArrowLeft } from 'lucide-react';
import { CartDrawerItem } from './cart-drawer-item';
import { useGetCartQuery, useUpdateCartItemMutation } from '..';
import { TypeCartItem } from '@/app/types';
import { debounce } from "lodash"
interface Props {
    children: React.ReactNode
}

export const CartDrawer: React.FC<Props> = ({ children }: Props) => {

    const { data, error, isLoading } = useGetCartQuery(1)
    const totalAmount = data?.items.reduce((acc, item) => acc + item.price, 0) || 0;
    const [cartItems, setCartItems] = useState<TypeCartItem[]>();
    const [updateCartItem] = useUpdateCartItemMutation();

    const handleChangeQuantity = (itemId: number, newQuantity: number) => {
        if (!data) return;

        setCartItems((cartItems) => {
            const updatedItems = cartItems!.map((item) =>
                item.productId === itemId ? { ...item, quantity: newQuantity } : item
            );


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
                                В корзине <span className="font-bold">{data!.items.length} товара</span>
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

                            {/* <SheetFooter className="-mx-6 bg-white p-8">
                                <div className="w-full">
                                    <div className="flex mb-4">
                                        <span className="flex flex-1 text-lg text-neutral-500">
                                            Итого
                                            <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
                                        </span>

                                        <span className="font-bold text-lg">{totalAmount} ₽</span>
                                    </div>

                                    <Link href="/checkout">
                                        <Button
                                            onClick={() => setRedirecting(true)}
                                            loading={redirecting}
                                            type="submit"
                                            className="w-full h-12 text-base">
                                            Оформить заказ
                                            <ArrowRight className="w-5 ml-2" />
                                        </Button>
                                    </Link>
                                </div>
                            </SheetFooter> */}
                        </>
                    )}

                </div>

            </SheetContent>
        </Sheet>
    );
};