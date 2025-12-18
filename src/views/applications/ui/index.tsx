'use client';
import { AlertCircle, CheckCircle, Clock, Eye, Trash2, Truck, Zap, History, LucideIcon } from 'lucide-react';
import React, { useState } from 'react';
import { Order, useGetOrdersQuery, useUpdateOrderStatusMutation } from '@/entities/applications';
import { ViewApplications } from '@/features/view-applications';
import { DetailsApplications } from '@/features/details-applications';


export const statusConfig: Record<
    Order['status'],
    {
        label: string
        color: string
        icon: LucideIcon
    }
> = {
    pending: {
        label: 'Ожидание',
        color: 'bg-yellow-100 text-yellow-800',
        icon: Clock,
    },
    processing: {
        label: 'Обработка',
        color: 'bg-blue-100 text-blue-800',
        icon: AlertCircle,
    },
    shipped: {
        label: 'Отправлено',
        color: 'bg-purple-100 text-purple-800',
        icon: Truck,
    },
    delivered: {
        label: 'Доставлено',
        color: 'bg-green-100 text-green-800',
        icon: CheckCircle,
    },
    cancelled: {
        label: 'Отменено',
        color: 'bg-red-100 text-red-800',
        icon: AlertCircle,
    },
}
// type Status = keyof typeof statusConfig

export const AdminApplications: React.FC = () => {
    const { data: orders = [], isLoading } = useGetOrdersQuery()
    const [updateStatus, { isLoading: isUpdating }] =
        useUpdateOrderStatusMutation()



    const onChangeStatus = (currentId: number, currentStatus: Order['status'], data: Order) => {
        const { status, id, ...newData } = data
        const currentData = {
            ...newData,
            status: currentStatus
        }
        updateOrderStatus(currentId, currentData)
    }
    const updateOrderStatus = async (id: number, data: any) => {


        await updateStatus({ id, data })
    }
    return (
        <div >
            <h1 className='font-bold text-3xl mb-3'>Заявки и Заказы</h1>
            <p className='mb-10'>Управление заказами и отслеживание доставки</p>

            <table className="w-full">
                <thead>
                    <tr className="border-b border-border bg-secondary">
                        <th className="px-4 py-4 text-left text-sm font-semibold text-foreground"></th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">ID</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Клиент</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Контакт</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Товаров</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Статус</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Сумма</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Дата заявки</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Действия</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => {
                        const config = statusConfig[order.status]
                        const StatusIcon = config.icon
                        const color = config.color
                        const totalPrice = order.totalPrice;
                        const shippingCost = 500; // Example fixed shipping cost
                        const tax = Math.round(totalPrice * 0.1);
                        return (
                            <tr
                                key={order.id}
                                className={`border-b border-border transition-colors ${order.isNew ? "bg-accent/20 hover:bg-accent/30" : "hover:bg-secondary/50"
                                    }`}
                            >
                                <td className="px-4 py-4">
                                    {order.isNew && (
                                        <div className="flex items-center justify-center">
                                            <Zap size={18} className="text-accent animate-pulse" />
                                        </div>
                                    )}
                                </td>
                                <td className="px-6 py-4 text-sm font-mono text-foreground">#{order.id}</td>
                                <td className="px-6 py-4 text-sm text-foreground">{order.customerName}</td>
                                <td className="px-6 py-4 text-sm text-muted-foreground">{order.email}</td>
                                <td className="px-6 py-4 text-sm text-foreground font-medium">{order.items.length} товаров</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <StatusIcon className="w-3" />
                                        <select
                                            value={order.status}
                                            onChange={(e) => onChangeStatus(Number(order.id), e.target.value as Order["status"], order)}
                                            className={`text-xs font-medium px-3 py-1 rounded-full ${config.color} border-0 cursor-pointer`}
                                        >
                                            <option value="pending">Ожидание</option>
                                            <option value="processing">Обработка</option>
                                            <option value="shipped">Отправлено</option>
                                            <option value="delivered">Доставлено</option>
                                            <option value="cancelled">Отменено</option>
                                        </select>
                                    </div>
                                </td>
                                <td className="px-4 py-4 text-sm font-semibold text-primary ">   {(totalPrice + shippingCost + tax).toLocaleString("ru-RU")} ₽</td>
                                <td className="px-6 py-4 text-sm text-muted-foreground">{order.createdAt}</td>
                                <td className="px-6 py-4">
                                    <div className="flex gap-2">
                                        <DetailsApplications {...order} tax={tax} shippingCost={shippingCost}>
                                            <button
                                                className="p-2 cursor-pointer hover:bg-accent rounded-lg transition-colors text-muted-foreground hover:text-accent-foreground"
                                                title="Просмотр"
                                            >
                                                <Eye size={16} />
                                            </button>
                                        </DetailsApplications>

                                        <ViewApplications order={order} icon={StatusIcon} setShowCustomerHistory={() => { }} label={config.label} color={color}>
                                            <button
                                                className="p-2 cursor-pointer hover:bg-accent rounded-lg transition-colors text-muted-foreground hover:text-accent-foreground"
                                                title="Просмотр"
                                            >

                                                <History size={16} />

                                            </button>
                                        </ViewApplications>

                                        <button
                                            // onClick={() => deleteOrder(order.id)}
                                            className="p-2 hover:bg-destructive rounded-lg transition-colors text-muted-foreground hover:text-destructive-foreground"
                                            title="Удалить"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};