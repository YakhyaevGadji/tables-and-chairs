"use client"
import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '@/shared/ui/sheet';

import { CartDrawerItem } from './cart-drawer-item';

import { useCartDrawer } from '../model/use-cart-drawer';
import { CartDrawerFooter } from './cart-drawer-footer';
import { CartDrawerHeader } from './cart-drawer-header';
import { CartDrawerWarning } from './cart-drawer-warning';
interface Props {
    children: React.ReactNode
}

export const CartDrawer: React.FC<Props> = ({ children }: Props) => {
    //добавить возможность добавлять карточку из корзины в избранное 
    //добавить возможность переходить на страницу карточке из корзины

    const { UpdateCart,
        totalAmount,
        cartItems,
        lengthProducts,
        handleChangeQuantity,
        removeCartItem,
        discountSum } = useCartDrawer();
    return (
        <Sheet onOpenChange={(isOpen) => {
            if (!isOpen) UpdateCart();
        }} >
            <SheetTrigger asChild>
                <div className='relative'>
                    {
                        lengthProducts > 0 && (
                            <span className='flex 
                            items-center
                             justify-center
                              h-5 w-5 absolute
                               top-1 right-1
                                translate-x-1/2
                                 -translate-y-1/2
                                  text-[10px]
                                   rounded-full
                                    p-1 bg-yellow
                                     text-white
                                      z-10'>
                                {lengthProducts}
                            </span>
                        )
                    }{children}
                </div>
            </SheetTrigger>
            <SheetContent style={{
                borderRadius: "12px 0 0 12px"
            }} className=' min-w-[600px] ' aria-describedby={undefined} >
                <div className={cn('flex flex-col h-full',
                    !totalAmount && 'justify-center')}>

                    {totalAmount > 0 && (
                        <CartDrawerHeader lengthProducts={lengthProducts} />
                    )}

                    {/* если нету  */}
                    {totalAmount === 0 && (
                        <CartDrawerWarning />
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
                                                onClickRemove={removeCartItem}
                                                inStock={false}
                                                description={item.description}
                                            />
                                        </div>
                                    )
                                })}
                            </div>

                            <CartDrawerFooter discountSum={discountSum} totalAmount={totalAmount} />
                        </>
                    )}

                </div>

            </SheetContent>
        </Sheet>
    );
};