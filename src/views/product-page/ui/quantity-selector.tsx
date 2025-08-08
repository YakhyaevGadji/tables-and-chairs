
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { Minus, Plus } from 'lucide-react'

interface QuantitySelectorProps {
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
  className?: string
}

export function QuantitySelector({
  value,
  onChange,
  min = 1,
  max = 99,
}: QuantitySelectorProps) {
  const handleDecrease = () => {
    if (value > min) {
      onChange(value - 1)
    }
  }

  const handleIncrease = () => {
    if (value < max) {
      onChange(value + 1)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value) || min
    if (newValue >= min && newValue <= max) {
      onChange(newValue)
    }
  }

  return (
    <div className="flex items-center justify-between border border-furniture-gray/30 rounded-lg">
      <Button
        variant="ghost"
        size="sm"
        onClick={handleDecrease}
        disabled={value <= min}
        className="h-12 w-12 p-0 hover:bg-furniture-gray/10 disabled:opacity-50"
      >
        <Minus className="w-4 h-4" />
      </Button>
      <Input
        type="number"
        value={value}
        onChange={handleInputChange}
        className="w-16 h-12 text-center border-0 focus-visible:ring-0 font-medium"
        min={min}
        max={max}
      />
      <Button
        variant="ghost"
        size="sm"
        onClick={handleIncrease}
        disabled={value >= max}
        className="h-12 w-12 p-0 hover:bg-furniture-gray/10 disabled:opacity-50"
      >
        <Plus className="w-4 h-4" />
      </Button>
    </div>
  )
}
