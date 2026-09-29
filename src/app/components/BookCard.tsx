import React from "react";
import { productDataType } from "../type";
import Image from "next/image";

interface bookProps {
  book: productDataType;
}

const BookCard = ({ book }: bookProps) => {
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{book.name}</h2>
        <p>
          {book.description}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
