import { objSchema } from './../../../entities/product/model/data-schema';
import { Order, statusConfig, useDeleteOrderMutation, useGetOrdersQuery, useUpdateOrderStatusMutation } from '@/entities/applications';
import { sortOptions } from '@/entities/applications';
import { useState } from 'react';
import { toast } from 'sonner';


export const useApplications = () => {

    const { data: orders = [], isLoading } = useGetOrdersQuery()
    const [updateStatus, { isLoading: isUpdating }] =
        useUpdateOrderStatusMutation()
    const [deleteOrder] = useDeleteOrderMutation();
    const [sort, setSort] = useState(sortOptions[0]);

    const updateSort = (newSort: { label: string; value: string }) => {
        
        setSort(newSort);
        // Implement sorting logic here based on newSort.value
    }
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

    const pendingOrders = orders.filter(order => order.status === 'pending').length;
    const processingOrders = orders.filter(order => order.status === 'processing').length;
    const shippedOrders = orders.filter(order => order.status === 'shipped').length;
    const deliveredOrders = orders.filter(order => order.status === 'delivered').length;
    const cancelledOrders = orders.filter(order => order.status === 'cancelled').length;
    const objSchema = {
        pending: pendingOrders,
        processing: processingOrders,
        shipped: shippedOrders,
        delivered: deliveredOrders,
        cancelled: cancelledOrders,
    }
    const statusConfigValues = Object.values(statusConfig)

    return {
        orders,
        isLoading,
        isUpdating,
        onChangeStatus,
        onDeleteOrder,
        shippingCost,
        taxPrecent,
        statusConfigValues,
        objSchema
    }
}