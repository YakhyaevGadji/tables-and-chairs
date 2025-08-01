import { ReactNode } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/shared/ui/alert";
import { CircleAlert } from "lucide-react";

interface IPropsMessage {
    isOpen: boolean;
    title: string;
    children?: ReactNode;
}

const Message = ({ isOpen, title, children }: IPropsMessage) => {
    return (
        <>
            {isOpen && (
                <Alert className="text-yellow-600 border-yellow-600" variant="default">
                    <CircleAlert />
                    <AlertTitle>{title}</AlertTitle>
                    <AlertDescription>
                        {children}
                    </AlertDescription>
                </Alert>
            )}
        </>
    );
};

export default Message;