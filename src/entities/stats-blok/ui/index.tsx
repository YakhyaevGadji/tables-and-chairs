import React from 'react';
import { cn } from '@/shared/lib/utils';
import { LucideIcon } from 'lucide-react';

interface Props {
    className?: string;
    title: string;
    Icon: LucideIcon
    color: string;
    value: string;
    change: string;
    status?: 'increase' | 'decrease';
}

export const StatsBlock: React.FC<Props> = ({ className, title, Icon, color, value, change, status }: Props) => {
    return (
        <div
            className={cn("bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors", className)}
        >
            <div className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center mb-4`}>
                <Icon />
            </div>
            <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
            <div className="mt-2">
                <p className="text-2xl font-bold text-foreground">{value}</p>
                {change && <p className="text-xs text-muted-foreground mt-1"><span className={`${status === 'increase' ? 'text-green-600' : 'text-red-600'} font-medium `}>{change}</span> от прошлого месяца</p>}
            </div>
        </div >
    );
};