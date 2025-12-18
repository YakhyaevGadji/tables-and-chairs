import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/shared/ui/dialog';
import { Button } from '@/shared/ui/button';
import { statusConfig } from '@/views/applications';
import { LucideIcon, Truck, X } from 'lucide-react';
import { Order, OrderItem } from '@/entities/applications';

interface Props {
    className?: string;
    children: React.ReactNode;
    customerName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    postalCode: string;
    trackingNumber: string;
    status: keyof typeof statusConfig;
    items: OrderItem[];
    totalPrice: number;
    estimatedDelivery: string;
    tax: number;
    shippingCost: number;
}

export const DetailsApplications: React.FC<Props> = ({ className, children, ...props }: Props) => {
    const {
        customerName,
        tax,
        shippingCost,
        email,
        phone,
        address,
        city,
        postalCode,
        trackingNumber,
        status,
        items,
        totalPrice,
        estimatedDelivery
    } = props;



    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px]">
                <DialogHeader>
                    <DialogTitle>Подробная информация</DialogTitle>
                    <DialogDescription>
                        Подробная информация о заказе клиента.
                    </DialogDescription>
                </DialogHeader>

                <div className='flex flex-col gap-4 overflow-auto max-h-[70vh] mt-4 '>

                    {/* Customer Info */}
                    <div className="space-y-3 pb-4 border-b border-border">
                        <h3 className="font-semibold text-foreground">Информация о клиенте</h3>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <p className="text-muted-foreground">Имя</p>
                                <p className="font-medium text-foreground">{customerName}</p>
                            </div>
                            <div>
                                <p className="text-muted-foreground">Email</p>
                                <p className="font-medium text-foreground">{email}</p>
                            </div>
                            <div>
                                <p className="text-muted-foreground">Телефон</p>
                                <p className="font-medium text-foreground">{phone}</p>
                            </div>
                        </div>
                    </div>

                    {/* Delivery Address */}
                    <div className="space-y-3 pb-4 border-b border-border">
                        <h3 className="font-semibold text-foreground">Адрес доставки</h3>
                        <div className="text-sm space-y-1">
                            <p className="text-foreground">{address}</p>
                            <p className="text-foreground">
                                {city} {postalCode}
                            </p>
                            <p className="text-muted-foreground">Трек: {trackingNumber}</p>
                        </div>
                    </div>

                    {/* Items */}
                    <div className="space-y-3 pb-4 border-b border-border">
                        <h3 className="font-semibold text-foreground">Товары в заказе</h3>
                        <div className="space-y-2">
                            {items.map((item) => (
                                <div key={item.id} className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                                    <div>
                                        <p className="font-medium text-foreground">{item.name}</p>
                                        <p className="text-sm text-muted-foreground">×{item.quantity}</p>
                                    </div>
                                    <p className="font-semibold text-foreground">
                                        {(item.price * item.quantity).toLocaleString("ru-RU")} ₽
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Cost Summary */}
                    <div className="space-y-2 p-4 bg-secondary rounded-lg">
                        <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Сумма товаров:</span>
                            <span className="font-medium text-foreground">
                                {totalPrice.toLocaleString("ru-RU")} ₽
                            </span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Доставка:</span>
                            <span className="font-medium text-foreground">
                                {shippingCost.toLocaleString("ru-RU")} ₽
                            </span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Налог:</span>
                            <span className="font-medium text-foreground">{tax.toLocaleString("ru-RU")} ₽</span>
                        </div>
                        <div className="border-t border-border pt-2 flex justify-between">
                            <span className="font-semibold text-foreground">Итого:</span>
                            <span className="font-bold text-primary text-lg">
                                {(totalPrice + shippingCost + tax).toLocaleString("ru-RU")}{" "}
                                ₽
                            </span>
                        </div>
                    </div>

                    {/* Delivery Info */}
                    <div className="space-y-3 p-4 bg-secondary rounded-lg">
                        <h3 className="font-semibold text-foreground flex items-center gap-2">
                            <Truck size={18} />
                            Информация о доставке
                        </h3>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <p className="text-muted-foreground">Ожидаемая доставка</p>
                                <p className="font-medium text-foreground">{estimatedDelivery}</p>
                            </div>
                            <div>
                                <p className="text-muted-foreground">Номер отслеживания</p>
                                <p className="font-medium text-foreground font-mono">{trackingNumber}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};


