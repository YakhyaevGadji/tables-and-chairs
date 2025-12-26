import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Order } from '@/entities/applications';
import { statusConfig } from '@/views/applications';
import { Eye, Zap, History, Trash2 } from 'lucide-react';
import { DetailsApplications } from '@/features/details-applications';
import { ViewApplications } from '@/features/view-applications';
import { selectList, tableList } from '../config/table-list';
import { OrderButton } from './order-button';
import { TableItem } from './table-item';

interface Props {
    className?: string;
    orders: Order[];
    onChangeStatus: (currentId: number, currentStatus: Order['status'], data: Order) => void;
    taxPrecent: number;
    shippingCost: number;
    onDeleteOrder: (id: number) => void;
}

export const ApplicationsTable: React.FC<Props> = ({ className, orders, onChangeStatus, taxPrecent = 0.1, shippingCost, onDeleteOrder }: Props) => {


    const TableList = tableList.map((header) => (
        <th key={header} className="px-6 py-4 text-left text-sm font-semibold text-foreground">{header}</th>
    ));

    const SelectList = selectList.map((status) => (
        <option key={status.value} value={status.value}>{status.label}</option>
    ));

    return (
        <table className={cn("w-full", className)}>
            <thead>
                <tr className="border-b border-border bg-secondary">
                    {TableList}
                </tr>
            </thead>
            <tbody>
                {orders.map((order) => {
                    const config = statusConfig[order.status]
                    const StatusIcon = config.icon
                    const color = config.color
                    const totalPrice = order.totalPrice;
                    const tax = Math.round(totalPrice * taxPrecent);
                    const label = config.label;

                    return (
                        <TableItem
                            key={order.id}
                            id={order.id}
                            isNew={order.isNew}
                            customerName={order.customerName}
                            email={order.email}
                            orderLength={order.items.length}
                            status={order.status}
                            totalPrice={order.totalPrice}
                            tax={tax}
                            shippingCost={shippingCost}
                            order={order}
                            color={color}
                            label={label}
                            createdAt={order.createdAt}
                            SelectList={SelectList}
                            StatusIcon={StatusIcon}
                            onChangeStatus={onChangeStatus}
                            onDeleteOrder={onDeleteOrder} />
                    )
                })}
            </tbody>
        </table>
    );
};