'use client';
import React from 'react';

import { ApplicationsTable } from '@/widgets/admin/applications/ui/applications-table';
import { useApplications } from '@/features/applicationsOrder';

import { statusConfig } from '@/entities/applications/config';
import { StatsBlock } from '@/entities/stats-blok';


// type Status = keyof typeof statusConfig

export const AdminApplications: React.FC = () => {
    const { orders, onChangeStatus, onDeleteOrder, shippingCost, taxPrecent } = useApplications();


    const allOrders = orders.length;
    const pendingOrders = orders.filter(order => order.status === 'pending').length;
    const processingOrders = orders.filter(order => order.status === 'processing').length;
    const shippedOrders = orders.filter(order => order.status === 'shipped').length;
    const deliveredOrders = orders.filter(order => order.status === 'delivered').length;
    const cancelledOrders = orders.filter(order => order.status === 'cancelled').length;
    const obj = {
        pending: pendingOrders,
        processing: processingOrders,
        shipped: shippedOrders,
        delivered: deliveredOrders,
        cancelled: cancelledOrders,
    }
    const statusConfigValues = Object.values(statusConfig)
    const ordersType = statusConfigValues.map((item, index) => {


        return (
            < StatsBlock className='w-full'
                key={index}
                color={item.color}
                Icon={item.icon}
                title={item.label}
                value={obj[Object.keys(statusConfig)[index] as keyof typeof obj].toString()}
                change={""}
            />
        )
    })

    return (
        <div >
            <h1 className='font-bold text-3xl mb-3'>Заявки и Заказы</h1>
            <p className='mb-10'>Управление заказами и отслеживание доставки</p>


            <div className="flex gap-4 mb-10 ">
                {ordersType}
            </div>
            <ApplicationsTable orders={orders} onChangeStatus={onChangeStatus} taxPrecent={taxPrecent} shippingCost={shippingCost} onDeleteOrder={onDeleteOrder} />
        </div>
    );
};