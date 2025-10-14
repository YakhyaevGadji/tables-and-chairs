import type React from "react"
import { Minus, Plus } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/shared/ui/button"

interface QuantityCounterProps {
    quantity: number
    onQuantityChange: (newQuantity: number) => void
    min?: number
    max?: number
}

export function QuantityCounter({
    quantity,
    onQuantityChange,
    min = 1,
    max = 99,
}: QuantityCounterProps) {
    const [inputValue, setInputValue] = useState(quantity.toString())

    useEffect(() => {
        if (document.activeElement?.tagName !== "INPUT") {
            setInputValue(quantity.toString())
        }
    }, [quantity])

    const handleDecrease = () => {
        if (quantity > min) {
            onQuantityChange(quantity - 1)
        }
    }

    const handleIncrease = () => {
        if (quantity < max) {
            onQuantityChange(quantity + 1)
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value

        // не даем вводить ничего кроме чисел
        if (!/^\d*$/.test(value)) return

        setInputValue(value)

        const numValue = Number(value)

        // если пустая строка — не вызывать onQuantityChange пока не введут число
        if (value === "") return

        // ограничиваем диапазон
        if (numValue < min) {
            onQuantityChange(min)
        } else if (numValue > max) {
            onQuantityChange(max)
        } else {
            onQuantityChange(numValue)
        }
    }

    return (
        <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-3 rounded-full overflow-hidden bg-gray-100 border border-gray-200">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleDecrease}
                    disabled={quantity <= min}
                    className="h-8 w-8 rounded-none hover:bg-gray-200 disabled:opacity-30"
                >
                    <Minus className="h-4 w-4 text-gray-700" />
                </Button>

                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    className="min-w-[2ch] max-w-[3ch] text-center text-lg font-medium text-gray-900 bg-transparent border-none outline-none focus:ring-0"
                />

                <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleIncrease}
                    disabled={quantity >= max}
                    className="h-8 w-8 rounded-none hover:bg-gray-200 disabled:opacity-30"
                >
                    <Plus className="h-4 w-4 text-gray-700" />
                </Button>
            </div>
        </div>
    )
}
