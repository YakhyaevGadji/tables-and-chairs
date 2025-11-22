"use client"

import type * as React from "react"
import { Input } from "@/shared/ui/input"
import { cn } from "@/shared/lib/utils"

interface PhoneInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    value?: string
    onValueChange?: (value: string) => void
}

export function PhoneInput({ value, onValueChange, className, ...props }: PhoneInputProps) {
    const formatPhoneNumber = (input: string) => {
        // Remove all non-digits
        const digits = input.replace(/\D/g, "")

        // Limit to 11 digits (Russian format)
        const limited = digits.slice(0, 11)

        // Format as +7 (XXX) XXX-XX-XX
        if (limited.length === 0) return ""
        if (limited.length <= 1) return `+7`
        if (limited.length <= 4) return `+7 (${limited.slice(1)}`
        if (limited.length <= 7) return `+7 (${limited.slice(1, 4)}) ${limited.slice(4)}`
        if (limited.length <= 9) return `+7 (${limited.slice(1, 4)}) ${limited.slice(4, 7)}-${limited.slice(7)}`
        return `+7 (${limited.slice(1, 4)}) ${limited.slice(4, 7)}-${limited.slice(7, 9)}-${limited.slice(9, 11)}`
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formatted = formatPhoneNumber(e.target.value)
        onValueChange?.(formatted)
    }

    return (
        <Input
            type="tel"
            value={value}
            onChange={handleChange}
            placeholder="+7 (___) ___-__-__"
            className={cn("text-base", className)}
            {...props}
        />
    )
}
