import React from "react";
import { Badge } from "@/shared/ui/badge";

interface IPropsBadges {
    isStock: boolean;
}

const Badges = ({isStock}: IPropsBadges) => {
    return (
        <div>
            {isStock ? (
                <Badge variant="outline" className="mb-2 text-green border-green">
                    В наличии
                </Badge>
            ) : (
                <Badge variant="destructive" className="mb-2">
                    Нет в наличии
                </Badge>
            )}
        </div>
    );
};

export default Badges;