import { LucideIcon, Clock, AlertCircle, Truck, CheckCircle } from "lucide-react"
import { Order } from "../types"

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


export const sortOptions: { label: string; value: string }[] = [
    { label: 'Сначала новые', value: 'created_at_desc' },
    { label: 'Сначала старые', value: 'created_at_asc' },
    { label: 'Низкая к высокой', value: 'price_asc' },
    { label: 'Высокая к низкой', value: 'price_desc' },
    { label: 'По умолчанию', value: 'default' },
    { label: 'По id к убыванию', value: 'id_asc' },
    { label: 'По id к возрастанию', value: 'id_desc' },

];