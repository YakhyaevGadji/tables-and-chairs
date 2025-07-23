import { cn } from "@/shared/lib/utils";
import { Input } from "@/shared/ui/input";

export const Field = ({
    label,
    name,
    type = "text",
    placeholder,
    register,
    error,
}: {
    label: string;
    name: string;
    type?: string;
    placeholder: string;
    register: any;
    error?: string;
}) => (
    <div className="w-full mb-4">
        <label className="block pb-2  font-[600]">{label}</label>
        <Input
            className={cn(
                "w-full rounded-[8px] py-5",
                error && "border border-red-500"
            )}
            type={type}
            placeholder={placeholder}
            {...register(name)}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
);