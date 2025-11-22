"use client"

import * as React from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/shared/ui/dialog"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/shared/ui/input-otp"
import { auth } from "@/shared/lib/firebase"
import { RecaptchaVerifier, signInWithPhoneNumber, type ConfirmationResult } from "firebase/auth"
import { toast } from "sonner"
import { Label } from "@/shared/ui/label"
import { Button } from "@/shared/ui/button"
import { PhoneInput } from "@/shared/ui/phone-input"


interface AuthModalProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

type Step = "phone" | "code"

export function AuthModal({ open, onOpenChange }: AuthModalProps) {
    const [step, setStep] = React.useState<Step>("phone")
    const [phone, setPhone] = React.useState("")
    const [code, setCode] = React.useState("")
    const [isLoading, setIsLoading] = React.useState(false)
    const [confirmationResult, setConfirmationResult] = React.useState<ConfirmationResult | null>(null)
    const recaptchaInitialized = React.useRef(false)

    React.useEffect(() => {
        if (open && !recaptchaInitialized.current) {
            try {
                // Clear any existing verifier
                if (window.recaptchaVerifier) {
                    window.recaptchaVerifier.clear()
                }

                window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
                    size: "invisible",
                    callback: () => {
                        console.log("[v0] reCAPTCHA solved")
                    },
                    "expired-callback": () => {
                        console.log("[v0] reCAPTCHA expired")
                    },
                })

                recaptchaInitialized.current = true
                console.log("[v0] reCAPTCHA initialized")
            } catch (error) {
                console.error("[v0] Error initializing reCAPTCHA:", error)
            }
        }

        return () => {
            if (!open && window.recaptchaVerifier) {
                window.recaptchaVerifier.clear()
                recaptchaInitialized.current = false
            }
        }
    }, [open])

    const handleSendCode = async () => {
        if (phone.length < 18) return

        setIsLoading(true)
        try {
            const phoneNumber = phone.replace(/\D/g, "")
            console.log("[v0] Raw phone number:", phoneNumber)

            // Ensure it starts with 7 and has 11 digits
            if (!phoneNumber.startsWith("7") || phoneNumber.length !== 11) {
                throw new Error("Неверный формат номера телефона")
            }

            const e164Phone = `+${phoneNumber}`
            console.log("[v0] E.164 phone:", e164Phone)

            if (!window.recaptchaVerifier) {
                throw new Error("reCAPTCHA не инициализирована")
            }

            const appVerifier = window.recaptchaVerifier
            const confirmation = await signInWithPhoneNumber(auth, e164Phone, appVerifier)
            setConfirmationResult(confirmation)
            setStep("code")
           
        } catch (error: any) {
            console.error("[v0] Error sending code:", error)
           

            if (window.recaptchaVerifier) {
                window.recaptchaVerifier.clear()
                recaptchaInitialized.current = false
            }
        } finally {
            setIsLoading(false)
        }
    }

    const handleVerifyCode = async () => {
        if (code.length < 6 || !confirmationResult) return

        setIsLoading(true)
        try {
            const result = await confirmationResult.confirm(code)
            const user = result.user

          

            onOpenChange(false)
            setTimeout(() => {
                setStep("phone")
                setPhone("")
                setCode("")
                setConfirmationResult(null)
            }, 300)
        } catch (error: any) {
            console.error("[v0] Error verifying code:", error)
           
        } finally {
            setIsLoading(false)
        }
    }

    const handleBack = () => {
        setStep("phone")
        setCode("")
    }

    const isPhoneComplete = phone.length === 18
    const isCodeComplete = code.length === 6

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>{step === "phone" ? "Вход в аккаунт" : "Подтверждение"}</DialogTitle>
                    <DialogDescription>
                        {step === "phone"
                            ? "Введите номер телефона для входа"
                            : `Введите код из СМС, отправленный на номер ${phone}`}
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-4 py-4">
                    {step === "phone" ? (
                        <div className="space-y-2">
                            <Label htmlFor="phone">Номер телефона</Label>
                            <PhoneInput id="phone" value={phone} onValueChange={setPhone} />
                        </div>
                    ) : (
                        <div className="space-y-2">
                            <Label htmlFor="code">Код подтверждения</Label>
                            <div className="flex justify-center">
                                <InputOTP maxLength={6} value={code} onChange={setCode}>
                                    <InputOTPGroup>
                                        <InputOTPSlot index={0} />
                                        <InputOTPSlot index={1} />
                                        <InputOTPSlot index={2} />
                                        <InputOTPSlot index={3} />
                                        <InputOTPSlot index={4} />
                                        <InputOTPSlot index={5} />
                                    </InputOTPGroup>
                                </InputOTP>
                            </div>
                        </div>
                    )}
                </div>

              <div id="recaptcha-container" />

                <div className="flex flex-col gap-2">
                    {step === "phone" ? (
                        <Button onClick={handleSendCode} disabled={!isPhoneComplete || isLoading} className="w-full">
                            {isLoading ? "Отправка..." : "Получить код"}
                        </Button>
                    ) : (
                        <>
                            <Button onClick={handleVerifyCode} disabled={!isCodeComplete || isLoading} className="w-full">
                                {isLoading ? "Проверка..." : "Войти"}
                            </Button>
                            <Button variant="outline" onClick={handleBack} disabled={isLoading} className="w-full bg-transparent">
                                Назад
                            </Button>
                        </>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    )
}



declare global {
    interface Window {
        recaptchaVerifier: RecaptchaVerifier
    }
}
