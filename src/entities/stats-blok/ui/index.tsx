import React from 'react';
import { cn } from '@/shared/lib/utils';

interface Props {
    className?: string;
    title: string;
    icon: React.ReactNode;
    color: string;
    value: string;
    change: string;
}

export const StatsBlock: React.FC<Props> = ({ className, title, icon, color, value, change }: Props) => {
    return (
        <div
            className={cn("bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors", className)}
        >
            <div className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center mb-4`}>
                {icon}
            </div>
            <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
            <div className="mt-2">
                <p className="text-2xl font-bold text-foreground">{value}</p>
                <p className="text-xs text-muted-foreground mt-1"><span className='text-[#00C951] font-medium '>{change}</span> от прошлого месяца</p>
            </div>
        </div >
    );
};