'use client';

import { Minus, Plus } from "lucide-react";
import { useEffect, useState } from "react";

interface IPropsCount {
    onChange: (count: number) => void;
    value: number;
}

const Count = ({onChange, value}: IPropsCount) => {
    const [count, setCount] = useState(value);

    const handlerClickCount = (type: string) => {
        if(type === 'plus') {
            setCount(count + 1);
        }else if(type === 'minus') {
            setCount((count) => count > 1 ? count - 1 : 1);
        }
    }

    useEffect(() => {
        onChange(count);
    }, [count]);

    return (
        <div className="flex w-[150px] mb-4 p-1 border-1 justify-between border-[#777] ">
            <Minus
                onClick={() => handlerClickCount('minus')}
                className="text-[#777] cursor-pointer"
            />
            <input disabled={true} className="w-[60px]" value={count} type="number" />
            <Plus
                onClick={() => handlerClickCount('plus')}
                className="text-[#777] cursor-pointer"
            />
        </div>
    );
};

export default Count;