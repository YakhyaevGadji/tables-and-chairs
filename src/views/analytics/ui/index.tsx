import React from 'react';
import { cn } from '@/shared/lib/utils';
import { StatsBlock } from '@/entities/stats-blok';
import { DollarSign, Package, ShoppingCart, Star, TrendingUp } from 'lucide-react';

interface Props {
    className?: string;
}
const data = [
    {
        title: "Всего продаж",
        value: "15,234",
        change: "+12%",
        icon: <ShoppingCart />,
        trend: "up",
        color: "bg-blue-500/10 text-blue-500",
    },
    {
        title: "Доход",
        value: "$58,450",
        change: "+8%",
        icon: <DollarSign />,
        trend: "up",
        color: "bg-green-500/10 text-green-500",
    },
    {
        title: "Активных товаров",
        value: "48",
        change: "+2",
        icon: <Package />,
        trend: "up",
        color: "bg-purple-500/10 text-purple-500",
    },

    {
        title: "Хиты",
        value: "12",
        change: "+3",
        icon: <Star />,
        trend: "up",
        color: "bg-orange-500/10 text-orange-500",
    },
]
export const AdminDashboard: React.FC<Props> = ({ className }: Props) => {
    return (
        <div className={cn('', className)}>
            <ul className='flex justify-between gap-5'>
                {
                    data.map((item, index) => (
                        <StatsBlock className='w-full' key={index} color={item.color} icon={item.icon} title={item.title} value={item.value} change={item.change} />
                    ))
                }
            </ul>
        </div>
    );
};