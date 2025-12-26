'use client';
import { AlertCircle, CheckCircle, Clock, Truck, LucideIcon, } from 'lucide-react';
import React, { useState } from 'react';
import { Order, useDeleteOrderMutation, useGetOrdersQuery, useUpdateOrderStatusMutation } from '@/entities/applications';

import { toast } from 'sonner';
import { ApplicationsTable } from '@/widgets/admin/applications/ui/applications-table';



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
    const [deleteOrder] = useDeleteOrderMutation();


    const onChangeStatus = (currentId: number, currentStatus: Order['status'], data: Order) => {
        const { status, ...newData } = data
        const currentData = {
            ...newData,
            status: currentStatus
        }
        updateOrderStatus(currentId, currentData)
    }
    const updateOrderStatus = async (id: number, data: Order) => {

        const config = statusConfig[data.status]
        try {
            await updateStatus({ id, data })
            toast.success("Статус заявки успешно обновлен", {
                description: `Статус заявки #${id} был изменен на "${config.label}".`,
            })
        } catch (error) {
            toast.error("Не удалось обновить статус заявки", {
                description: `Произошла ошибка при обновлении статуса заявки #${id}. Пожалуйста, попробуйте еще раз.`,
            })
            console.error("Failed to update order status:", error);
        }
    }


    const onDeleteOrder = async (id: number) => {
        try {
            await deleteOrder(id)
            toast.success("Заявка успешно удалена", {
                description: `Заявка #${id} была удалена из списка.`,
            })
        } catch (error) {
            toast.error("Не удалось удалить заявку", {
                description: `Произошла ошибка при удалении заявки #${id}. Пожалуйста, попробуйте еще раз.`,
            })
            console.error("Failed to delete order:", error);
        }
    }

    const shippingCost = 500; // Example fixed shipping cost
    const taxPrecent = 0.1; // Example tax percentage
    return (
        <div >
            <h1 className='font-bold text-3xl mb-3'>Заявки и Заказы</h1>
            <p className='mb-10'>Управление заказами и отслеживание доставки</p>
            <ApplicationsTable orders={orders} onChangeStatus={onChangeStatus} taxPrecent={taxPrecent} shippingCost={shippingCost} onDeleteOrder={onDeleteOrder} />
        </div>
    );
};