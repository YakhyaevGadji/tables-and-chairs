import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Order, statusConfig } from '@/entities/applications';
import { Eye, Zap, History, Trash2 } from 'lucide-react';
import { DetailsApplications } from '@/features/details-applications';
import { ViewApplications } from '@/features/view-applications';
import { selectList, tableList } from '../config/table-list';
import { OrderButton } from './order-button';
import { TableItem } from './table-item';


import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/shared/ui/pagination";
interface Props {
    className?: string;
    orders: Order[];
    onChangeStatus: (currentId: number, currentStatus: Order['status'], data: Order) => void;
    taxPrecent: number;
    shippingCost: number;
    onDeleteOrder: (id: number) => void;
}

export const ApplicationsTable: React.FC<Props> = ({ className, orders, onChangeStatus, taxPrecent = 0.1, shippingCost, onDeleteOrder }: Props) => {
    const [value, setValue] = React.useState<string>('');
  
    const TableList = tableList.map((header) => (
        <th key={header} className="px-6 py-4 text-left text-sm font-semibold text-foreground">{header}</th>
    ));

    const SelectList = selectList.map((status) => (
        <option key={status.value} value={status.value}>{status.label}</option>
    ));

    const searchedOrders = orders.filter((order) =>
        order.customerName.toLowerCase().includes(value.toLowerCase()) ||
        order.email.toLowerCase().includes(value.toLowerCase())
    );

    const resultOrders = value ? searchedOrders : orders;

    return (
        <div>
            <div className='flex gap-4 mb-5'>
                <div className='flex flex-1/2 gap-2'>
                    <Input value={value} onChange={(e) => setValue(e.target.value)} placeholder='Search' />
                    <Button className='w-[15%]'>Поиск</Button>
                </div>
                <div>
                    {/* <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button className='w-[250px]' variant="outline">Сортировка: <span className='text-'>{sort.label}</span></Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56" align="start">

                            <DropdownMenuGroup>

                                {sortOptions.map((option) => (
                                    <DropdownMenuItem
                                        key={option.value}
                                        onClick={() => setSort(option)}
                                    >
                                        {option.label}
                                    </DropdownMenuItem>
                                ))}

                            </DropdownMenuGroup>

                        </DropdownMenuContent>
                    </DropdownMenu> */}
                </div>
            </div>
            <table className={cn("w-full", className)}>
                <thead>
                    <tr className="border-b border-border bg-secondary">
                        {TableList}
                    </tr>
                </thead>
                <tbody>
                    {value && resultOrders.length === 0 ? (
                        <tr>
                            <td colSpan={tableList.length} className="px-6 py-4 text-center text-sm text-foreground">No results found</td>
                        </tr>
                    ) : (

                        resultOrders.map((order) => {
                            const config = statusConfig[order.status]
                            const StatusIcon = config.icon
                            const color = config.color
                            const totalPrice = order.totalPrice;
                            const tax = Math.round(totalPrice * taxPrecent);
                            const label = config.label;

                            return (
                                <TableItem
                                    key={order.id}
                                    id={order.id}
                                    isNew={order.isNew}
                                    customerName={order.customerName}
                                    email={order.email}
                                    orderLength={order.items.length}
                                    status={order.status}
                                    totalPrice={order.totalPrice}
                                    tax={tax}
                                    shippingCost={shippingCost}
                                    order={order}
                                    color={color}
                                    label={label}
                                    createdAt={order.createdAt}
                                    SelectList={SelectList}
                                    StatusIcon={StatusIcon}
                                    onChangeStatus={onChangeStatus}
                                    onDeleteOrder={onDeleteOrder} />
                            )
                        })
                    )}
                </tbody>
            </table>


            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="#" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
};