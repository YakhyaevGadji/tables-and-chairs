import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Order } from '@/entities/applications';
import { Eye, LucideIcon, Trash2, Zap, History } from 'lucide-react';
import { DetailsApplications } from '@/features/details-applications';
import { OrderButton } from './order-button';
import { ViewApplications } from '@/features/view-applications';

interface Props {
    className?: string;
    id: string;
    isNew: boolean;
    customerName: string;
    email: string;
    orderLength: number;
    status: Order["status"];
    totalPrice: number;
    tax: number;
    shippingCost: number;
    order: Order;
    onChangeStatus: (currentId: number, currentStatus:Order['status'], data: Order) => void;
    onDeleteOrder: (id: number) => void;

    SelectList: React.ReactNode;
    StatusIcon: LucideIcon;
    createdAt: string;
    color: string;
    label: string;
}

export const TableItem: React.FC<Props> = ({ className, ...props }: Props) => {
    const { id, isNew, color, label, customerName, email, orderLength, status, totalPrice, tax, shippingCost, createdAt, order, onChangeStatus, onDeleteOrder, SelectList, StatusIcon } = props

    return (
        <tr
            key={id}
            className={`border-b border-border transition-colors ${isNew ? "bg-accent/20 hover:bg-accent/30" : "hover:bg-secondary/50"
                }`}
        >
            <td className="px-4 py-4">
                {isNew && (
                    <div className="flex items-center justify-center">
                        <Zap size={18} className="text-accent animate-pulse" />
                    </div>
                )}
            </td>
            <td className="px-6 py-4 text-sm font-mono text-foreground">#{id}</td>
            <td className="px-6 py-4 text-sm text-foreground">{customerName}</td>
            <td className="px-6 py-4 text-sm text-muted-foreground">{email}</td>
            <td className="px-6 py-4 text-sm text-foreground font-medium">{orderLength} товаров</td>
            <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                    <StatusIcon className="w-3" />
                    <select
                        value={status}
                        onChange={(e) => onChangeStatus(Number(id), e.target.value as Order["status"], order)}
                        className={`text-xs font-medium px-3 py-1 rounded-full ${color} border-0 cursor-pointer`}
                    >
                        {SelectList}
                    </select>
                </div>
            </td>
            <td className="px-4 py-4 text-sm font-semibold text-primary ">   {(totalPrice + shippingCost + tax).toLocaleString("ru-RU")} ₽</td>
            <td className="px-6 py-4 text-sm text-muted-foreground">{createdAt}</td>
            <td className="px-6 py-4">
                <div className="flex gap-2">
                    <DetailsApplications {...order} tax={tax} shippingCost={shippingCost}>
                        <OrderButton title="История пользователя" >
                            <Eye size={16} />
                        </OrderButton>
                    </DetailsApplications>

                    <ViewApplications order={order} icon={StatusIcon} setShowCustomerHistory={() => { }} label={label} color={color}>
                        <OrderButton title="История пользователя" >
                            <History size={16} />
                        </OrderButton>
                    </ViewApplications>

                    <OrderButton title="Удалить" onClick={() => onDeleteOrder(Number(id))}>
                        <Trash2 size={16} />
                    </OrderButton>

                </div>
            </td>
        </tr>
    );
};