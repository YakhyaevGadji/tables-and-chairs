import React from "react";

const ProductPage = ({params}: any) => {
    return (
        <div>
            {params.slug}
        </div>
    );
};

export default ProductPage;
