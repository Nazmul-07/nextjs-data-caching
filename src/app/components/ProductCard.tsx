import React from "react";
import { productDataType } from "../type";

interface productProps {
    product: productDataType;
}

const ProductCard = ({product}: productProps) => {
  return (
    <div className="card bg-base-100 shadow-sm shadow-slate-600">
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>
          {product.description}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
