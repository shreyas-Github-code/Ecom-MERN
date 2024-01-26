import React from 'react';
import { FaPlus } from 'react-icons/fa';

type ProductsProps = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  stock: number;
  handler: () => void;
};

const server = 'ssssssss';

const ProductCard: React.FC<ProductsProps> = ({ productId, photo, name, price, stock, handler }: ProductsProps) => {
  return (
    <div className="product-card">
      <img src={photo} alt={name} />
      <p>{name}</p>
      <span>{price}</span>
      <div>
        <button onClick={() => handler()} title={`Add ${name} to Cart`}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
