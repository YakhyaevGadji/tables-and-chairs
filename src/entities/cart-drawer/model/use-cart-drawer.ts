
import { useGetCartQuery, useUpdateCartItemMutation } from '..';
import { TypeCartItem } from '@/app/types';
import React, { useEffect, useState } from 'react';

export const useCartDrawer = () => {
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


    const UpdateCart = (currentItems = cartItems) => {
        if (currentItems) {
            updateCartItem({ id: data!.id, items: currentItems });
        }
    }
    const removeCartItem = (productId: number) => {
        setCartItems((cartItems) => {
            const updatedItems = cartItems!.filter((item) => item.productId !== productId);
            UpdateCart(updatedItems);
            return updatedItems
        })

    }

    useEffect(() => {
        if (data?.items) {
            setCartItems(data.items);
            setTotalAmount(data.items.reduce((acc, item) => acc + item.price * item.quantity, 0));
            setLengthProducts(data.items.reduce((acc, item) => acc + item.quantity, 0));
            setDiscountSum(data.items.reduce((acc, item) => item.discount && item.oldPrice ? acc + (item.oldPrice - item.price) * item.quantity : 0, 0))

        }
    }, [data]);



    return { data, error, isLoading, totalAmount, cartItems, discountSum, lengthProducts, handleChangeQuantity, removeCartItem, UpdateCart };
}