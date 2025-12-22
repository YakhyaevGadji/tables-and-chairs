import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Trash2 } from 'lucide-react';

interface Props {
    className?: string;
    onClick?: () => void;
}

export const RemoveApplicationsButton: React.FC<Props> = ({ className, onClick }: Props) => {



    return (
        <button
            onClick={onClick}
            className={cn("p-2 cursor-pointer hover:bg-accent rounded-lg transition-colors text-muted-foreground hover:text-accent-foreground", className)}
            title="Удалить"
        >
            <Trash2 size={16} />
        </button>
    );
};