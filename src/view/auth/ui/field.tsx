import clsx from "clsx";
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
        <label className="block pb-1 text-grey700 font-semibold">{label}</label>
        <Input
            className={clsx(
                "w-full rounded-[10px]",
                error && "border border-red-500"
            )}
            type={type}
            placeholder={placeholder}
            {...register(name)}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
);