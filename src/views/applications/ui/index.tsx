'use client';
import React from 'react';

import { ApplicationsTable } from '@/widgets/admin/applications/ui/applications-table';
import { useApplications } from '@/features/applicationsOrder';

import { statusConfig } from '@/entities/applications/config';
import { StatsBlock } from '@/entities/stats-blok';


// type Status = keyof typeof statusConfig

export const AdminApplications: React.FC = () => {
    const { orders, onChangeStatus, onDeleteOrder, shippingCost, taxPrecent, objSchema, statusConfigValues } = useApplications();

    const ordersType = statusConfigValues.map((item, index) => {


        return (
            < StatsBlock className='w-full'
                key={index}
                color={item.color}
                Icon={item.icon}
                title={item.label}
                value={objSchema[Object.keys(statusConfig)[index] as keyof typeof objSchema].toString()}
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