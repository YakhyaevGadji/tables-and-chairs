import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/shared/ui/sheet';

interface Props {
    className?: string;
    children: React.ReactNode
}

export const CartDrawer: React.FC<Props> = ({ className, children }: Props) => {
    return (
        <Sheet>
            <SheetTrigger>{children}</SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Are you absolutely sure?</SheetTitle>
                    <SheetDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </SheetDescription>
                    
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
};