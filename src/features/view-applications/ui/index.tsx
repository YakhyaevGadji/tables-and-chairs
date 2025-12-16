import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/shared/ui/dialog';
import { Button } from '@/shared/ui/button';
import { statusConfig } from '@/views/applications';
import { LucideIcon, X } from 'lucide-react';
import { Order, OrderItem } from '@/entities/applications';

interface Props {
    className?: string;
    children: React.ReactNode;
    order: Order;
    setShowCustomerHistory: (value: boolean) => void;
    icon: LucideIcon;
    label?: string;
    color?: string;
}

export const ViewApplications: React.FC<Props> = ({ className, color, children, order, setShowCustomerHistory, icon: Icon, label }: Props) => {


    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">{children}</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px]">
                <DialogHeader>
                    <DialogTitle>История пользователя</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you&apos;re
                        done.
                    </DialogDescription>
                </DialogHeader>

                <div className="bg-card border border-border rounded-lg  overflow-y-auto p-6 space-y-6">

                    <div className="space-y-3">

                        <div
                            className="p-4 border border-border rounded-lg hover:bg-secondary/50 transition-colors"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <h4 className="font-semibold text-foreground">{order.id}</h4>
                                        <div className={`flex items-center gap-1 px-2 py-1 rounded ${color}`}>
                                            <Icon size={14} />
                                            <span className="text-xs font-medium">{label}</span>
                                        </div>
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-2">
                                        {order.items.length} товаров • {order.createdAt}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-2">
                                        {order.items.map((item) => (
                                            <span
                                                key={item.id}
                                                className="text-xs bg-secondary px-2 py-1 rounded text-muted-foreground"
                                            >
                                                {item.name} (×{item.quantity})
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-primary text-lg">
                                        {(order.totalPrice).toLocaleString("ru-RU")} ₽
                                    </p>
                                    <p className="text-xs text-muted-foreground mt-1">Доставка: {order.estimatedDelivery}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <p className="text-center text-muted-foreground py-8">Нет других заказов</p> */}
                </div>
            </DialogContent>
        </Dialog>
    );
};


