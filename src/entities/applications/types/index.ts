export interface OrderItem {
    id: string
    name: string
    quantity: number
    price: number
}

export interface Order {
    id: string
    customerName: string
    email: string
    phone: string
    address: string
    city: string
    postalCode: string
    items: OrderItem[]
    status: "pending" | "processing" | "shipped" | "delivered" | "cancelled"
    totalPrice: number
    shippingCost: number
    tax: number
    createdAt: string
    estimatedDelivery: string
    trackingNumber: string
    isNew: boolean
}
