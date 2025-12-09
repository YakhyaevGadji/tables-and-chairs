'use client';

import React from 'react';
import { cn } from '@/shared/lib/utils';
import { StatsBlock } from '@/entities/stats-blok';
import { DollarSign, Package, ShoppingCart, Star, TrendingUp, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/shared/ui/chart';
import { Bar, BarChart, CartesianGrid, Line, LineChart, XAxis } from 'recharts';
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/shared/ui/table';
import { title } from 'process';

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

export const description = "An interactive line chart"

const chartData = [
    { date: "2024-04-01", desktop: 34, mobile: 150 },
    { date: "2024-04-02", desktop: 23, mobile: 180 },
    { date: "2024-04-03", desktop: 27, mobile: 120 },
    { date: "2024-04-04", desktop: 32, mobile: 260 },
    { date: "2024-04-05", desktop: 13, mobile: 290 },
    { date: "2024-04-06", desktop: 301, mobile: 340 },
    { date: "2024-04-07", desktop: 15, mobile: 180 },
    { date: "2024-04-08", desktop: 29, mobile: 320 },
    { date: "2024-04-09", desktop: 59, mobile: 110 },
    { date: "2024-04-10", desktop: 261, mobile: 190 },
    { date: "2024-04-11", desktop: 17, mobile: 350 },
    { date: "2024-04-12", desktop: 12, mobile: 210 },
    { date: "2024-04-13", desktop: 22, mobile: 380 },
    { date: "2024-04-14", desktop: 137, mobile: 220 },
    { date: "2024-04-15", desktop: 120, mobile: 170 },
    { date: "2024-04-16", desktop: 138, mobile: 190 },
    { date: "2024-04-17", desktop: 16, mobile: 360 },
    { date: "2024-04-18", desktop: 14, mobile: 410 },
    { date: "2024-04-19", desktop: 243, mobile: 180 },
    { date: "2024-04-20", desktop: 89, mobile: 150 },
    { date: "2024-04-21", desktop: 137, mobile: 200 },
    { date: "2024-04-22", desktop: 14, mobile: 170 },
    { date: "2024-04-23", desktop: 138, mobile: 230 },
    { date: "2024-04-24", desktop: 17, mobile: 290 },
    { date: "2024-04-25", desktop: 215, mobile: 250 },
    { date: "2024-04-26", desktop: 75, mobile: 130 },
    { date: "2024-04-27", desktop: 383, mobile: 420 },
    { date: "2024-04-28", desktop: 122, mobile: 180 },
    { date: "2024-04-29", desktop: 315, mobile: 240 },
    { date: "2024-04-30", desktop: 454, mobile: 380 },
    { date: "2024-05-01", desktop: 165, mobile: 220 },
    { date: "2024-05-02", desktop: 13, mobile: 310 },
    { date: "2024-05-03", desktop: 247, mobile: 190 },
    { date: "2024-05-04", desktop: 25, mobile: 420 },
    { date: "2024-05-05", desktop: 11, mobile: 390 },
    { date: "2024-05-06", desktop: 18, mobile: 520 },
    { date: "2024-05-07", desktop: 28, mobile: 300 },
    { date: "2024-05-08", desktop: 149, mobile: 210 },
    { date: "2024-05-09", desktop: 227, mobile: 180 },
    { date: "2024-05-10", desktop: 13, mobile: 330 },
    { date: "2024-05-11", desktop: 335, mobile: 270 },
    { date: "2024-05-12", desktop: 197, mobile: 240 },
    { date: "2024-05-13", desktop: 197, mobile: 160 },
    { date: "2024-05-14", desktop: 18, mobile: 490 },
    { date: "2024-05-15", desktop: 13, mobile: 380 },
    { date: "2024-05-16", desktop: 18, mobile: 400 },
    { date: "2024-05-17", desktop: 19, mobile: 420 },
    { date: "2024-05-18", desktop: 315, mobile: 350 },
    { date: "2024-05-19", desktop: 235, mobile: 180 },
    { date: "2024-05-20", desktop: 177, mobile: 230 },
    { date: "2024-05-21", desktop: 82, mobile: 140 },
    { date: "2024-05-22", desktop: 81, mobile: 120 },
    { date: "2024-05-23", desktop: 252, mobile: 290 },
    { date: "2024-05-24", desktop: 294, mobile: 220 },
    { date: "2024-05-25", desktop: 201, mobile: 250 },
    { date: "2024-05-26", desktop: 213, mobile: 170 },
    { date: "2024-05-27", desktop: 10, mobile: 460 },
    { date: "2024-05-28", desktop: 233, mobile: 190 },
    { date: "2024-05-29", desktop: 78, mobile: 130 },
    { date: "2024-05-30", desktop: 340, mobile: 280 },
    { date: "2024-05-31", desktop: 178, mobile: 230 },
    { date: "2024-06-01", desktop: 178, mobile: 200 },
    { date: "2024-06-02", desktop: 10, mobile: 410 },
    { date: "2024-06-03", desktop: 103, mobile: 160 },
    { date: "2024-06-04", desktop: 439, mobile: 380 },
    { date: "2024-06-05", desktop: 88, mobile: 140 },
    { date: "2024-06-06", desktop: 294, mobile: 250 },
    { date: "2024-06-07", desktop: 323, mobile: 370 },
    { date: "2024-06-08", desktop: 15, mobile: 320 },
    { date: "2024-06-09", desktop: 18, mobile: 480 },
    { date: "2024-06-10", desktop: 155, mobile: 200 },
    { date: "2024-06-11", desktop: 92, mobile: 150 },
    { date: "2024-06-12", desktop: 52, mobile: 420 },
    { date: "2024-06-13", desktop: 81, mobile: 130 },
    { date: "2024-06-14", desktop: 6, mobile: 380 },
    { date: "2024-06-15", desktop: 17, mobile: 350 },
    { date: "2024-06-16", desktop: 11, mobile: 310 },
    { date: "2024-06-17", desktop: 15, mobile: 520 },
    { date: "2024-06-18", desktop: 107, mobile: 170 },
    { date: "2024-06-19", desktop: 341, mobile: 290 },
    { date: "2024-06-20", desktop: 18, mobile: 450 },
    { date: "2024-06-21", desktop: 169, mobile: 210 },
    { date: "2024-06-22", desktop: 317, mobile: 270 },
    { date: "2024-06-23", desktop: 10, mobile: 530 },
    { date: "2024-06-24", desktop: 132, mobile: 180 },
    { date: "2024-06-25", desktop: 141, mobile: 190 },
    { date: "2024-06-26", desktop: 14, mobile: 380 },
    { date: "2024-06-27", desktop: 18, mobile: 490 },
    { date: "2024-06-28", desktop: 149, mobile: 200 },
    { date: "2024-06-29", desktop: 103, mobile: 160 },
    { date: "2024-06-30", desktop: 446, mobile: 400 },
]

const chartConfig = {
    views: {
        label: "Page Views",
    },
    desktop: {
        label: "Продажи",
        color: "var(--chart-1)",
    },
    mobile: {
        label: "Доход",
        color: "var(--chart-2)",
    },
}

const invoices = [
    {
        img: "",
        title: "Кухонный стол",
        sales: 23,
        income: 14000,
        increase: 50,
        status: 'Hit',
    },
    {
        img: "",
        title: "Кухонный стол",
        sales: 66,
        income: 10000,
        increase: 48,
        status: "Hit",
    },
    {
        img: "",
        title: "Кухонный стол",
        sales: 11,
        income: 6000,
        increase: 32,
        status: "",
    },
    {
        img: "",
        title: "Кухонный стол",
        sales: 42,
        income: 5500,
        increase: 31,
        status: "",
    },
    {
        img: "",
        title: "Кухонный стол",
        sales: 12,
        income: 4000,
        increase: 20,
        status: "",
    },
    {
        img: "",
        title: "Кухонный стол",
        sales: 44,
        income: 10000,
        increase: 18,
        status: "",
    },
    {
        img: "",
        title: "Кухонный стол",
        sales: 32,
        income: 1000,
        increase: 15,
        status: "",
    },
]

export const AdminDashboard: React.FC<Props> = ({ className }: Props) => {

    const [activeChart, setActiveChart] =
        React.useState<keyof typeof chartConfig>("desktop")

    const total = React.useMemo(
        () => ({
            desktop: chartData.reduce((acc, curr) => acc + curr.desktop, 0),
            mobile: chartData.reduce((acc, curr) => acc + curr.mobile, 0),
        }),
        []
    )
    return (
        <div className={cn('', className)}>
            <h1 className='font-bold text-3xl mb-3'>Аналитика</h1>
            <p className='mb-10'>Полный обзор производительности магазина и статистика товаров</p>
            <ul className='flex justify-between gap-5 mb-5'>
                {
                    data.map((item, index) => (
                        <StatsBlock className='w-full' key={index} color={item.color} icon={item.icon} title={item.title} value={item.value} change={item.change} />
                    ))
                }
            </ul>

            <div className='mb-5'>
                <Card className="py-0">
                    <CardHeader className="flex flex-col items-stretch border-b !p-0 sm:flex-row">
                        <div className="flex flex-1 flex-col justify-center gap-1 px-6 pt-4 pb-3 sm:!py-0">
                            <CardTitle>Продажи и доход</CardTitle>
                            <CardDescription>
                                Показывает продажи и доход за последние 3 месяца
                            </CardDescription>
                        </div>
                        <div className="flex">
                            {["desktop", "mobile"].map((key) => {
                                const chart = key as keyof typeof chartConfig
                                return (
                                    <button
                                        key={chart}
                                        data-active={activeChart === chart}
                                        className="data-[active=true]:bg-muted/50 relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l sm:border-t-0 sm:border-l sm:px-8 sm:py-6"
                                        onClick={() => setActiveChart(chart)}
                                    >
                                        <span className="text-muted-foreground text-xs">
                                            {chartConfig[chart].label}
                                        </span>
                                        <span className="text-lg leading-none font-bold sm:text-3xl">
                                            {total[key as keyof typeof total].toLocaleString()}
                                        </span>
                                    </button>
                                )
                            })}
                        </div>
                    </CardHeader>
                    <CardContent className="px-2 sm:p-6">
                        <ChartContainer
                            config={chartConfig}
                            className="aspect-auto h-[250px] w-full"
                        >
                            <BarChart
                                accessibilityLayer
                                data={chartData}
                                margin={{
                                    left: 12,
                                    right: 12,
                                }}
                            >
                                <CartesianGrid vertical={false} />
                                <XAxis
                                    dataKey="date"
                                    tickLine={false}
                                    axisLine={false}
                                    tickMargin={8}
                                    minTickGap={32}
                                    tickFormatter={(value) => {
                                        const date = new Date(value)
                                        return date.toLocaleDateString("en-US", {
                                            month: "short",
                                            day: "numeric",
                                        })
                                    }}
                                />
                                <ChartTooltip
                                    content={
                                        <ChartTooltipContent
                                            className="w-[150px]"
                                            nameKey="views"
                                            labelFormatter={(value) => {
                                                return new Date(value).toLocaleDateString("en-US", {
                                                    month: "short",
                                                    day: "numeric",
                                                    year: "numeric",
                                                })
                                            }}
                                        />
                                    }
                                />
                                <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
            </div>

            <div className='w-full'>
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-border">
                            <th className="text-center py-3 px-4 font-semibold text-muted-foreground text-sm">Название</th>
                            <th className="text-center py-3 px-4 font-semibold text-muted-foreground text-sm">Продажи</th>
                            <th className="text-center py-3 px-4 font-semibold text-muted-foreground text-sm">Доход</th>
                            <th className="text-center py-3 px-4 font-semibold text-muted-foreground text-sm">Рост</th>
                            <th className="text-center py-3 px-4 font-semibold text-muted-foreground text-sm">Статус</th>
                        </tr>
                    </thead>
                    <tbody>
                        {invoices.map((product, index) => (
                            <tr key={index} className="border-b border-border hover:bg-secondary/50 transition-colors">
                                <td className="py-4 px-4 text-center">
                                    <p className="font-medium text-foreground">{product.title}</p>
                                </td>
                                <td className="py-4 px-4 text-center">
                                    <p className="text-foreground font-semibold">{product.sales} шт.</p>
                                </td>
                                <td className="py-4 px-4 text-center">
                                    <p className="text-foreground font-semibold">{(product.income / 1000).toFixed(1)}k ₽</p>
                                </td>
                                <td className="py-4 px-4 text-center">
                                    <span className="text-green-600 font-semibold">+{product.increase}%</span>
                                </td>
                                <td className="py-4 px-4 text-center">
                                    {product.status === "Hit" ? (
                                        <span className="inline-flex items-center gap-1 bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-600 px-3 py-1 rounded-lg text-xs font-semibold">
                                            <Zap size={14} />
                                            ХИТ
                                        </span>
                                    ) : (
                                        <span className="text-muted-foreground text-xs">—</span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};










