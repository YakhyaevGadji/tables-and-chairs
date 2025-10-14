import React from 'react';
import { cn } from '@/shared/lib/utils';
import { TypeCartItem } from '@/app/types';
import { Heart, Trash2Icon } from 'lucide-react';
import { QuantityCounter } from './cart-quantity-counter';
import useFormatterPrice from '@/shared/hooks/use-formatter-price';
import { DiscountBadge } from '@/shared/ui/discount';

type Props = Pick<TypeCartItem, "attributes"> & {
    className?: string;
    id: number;
    imageUrl: string;
    title: string;
    price: number;
    quantity: number;
    inStock: boolean;
    description: string;
    oldPrice: number | null;
    onClickCountButton: (productId: number, quantity: number) => void;
    onClickRemove: (productId: number) => void;
};

export const CartDrawerItem: React.FC<Props> = ({ className, ...props }: Props) => {
    const { imageUrl, price, quantity, title, id, oldPrice, inStock, description, onClickCountButton, onClickRemove } = props;

    const { formatPrice } = useFormatterPrice();
    const handleChangeQuantity = (newQuantity: number) => {
        onClickCountButton(id, newQuantity);
    }
    const discount = oldPrice ? Math.round(((oldPrice - price) / oldPrice) * 100) : 0
    return (
        <div
            className={cn(
                'flex items-center justify-between bg-white gap-6',
                className,
            )}>


            <div>
                <div className='flex gap-3'>
                    <img className={cn('w-[80px] h-[80px]', className)} src={imageUrl} />
                    <h2 className="text-[16px] font-bold flex-1 leading-6">{title}</h2>
                </div>
                {/* {details && <p className="text-xs text-gray-400 w-[90%]">{details}</p>} */}
            </div>

            {/* кнопки */}
            <div className='flex flex-col items-center gap-1'>
                <QuantityCounter quantity={quantity} onQuantityChange={handleChangeQuantity} />
                <p className="text-[12px] text-muted-foreground">
                    {formatPrice(price)}/шт
                </p>
            </div>

            <div className='flex flex-col gap-3 items-end justify-between'>
                <h3 className="font-bold text-[17px]">{price * quantity} ₽</h3>
                {discount && oldPrice && (
                    <div className='flex gap-2 items-center'>
                        <span className="text-[11px] text-muted-foreground line-through">{oldPrice * quantity} ₽</span>
                        <DiscountBadge className="rounded bg-yellow-400 px-1 py-0.5 text-[12px] font-semibold text-yellow-900" discount={discount} />
                    </div>
                )
                }
            </div>
            <div className="flex flex-col gap-4">
                <Heart size={16} className="text-gray-400 cursor-pointer  hover:text-red-500" />
                <Trash2Icon
                    onClick={() => onClickRemove(id)}
                    className="text-gray-400 cursor-pointer hover:text-gray-600"
                    size={16}
                />
            </div>
        </div>
    );
};