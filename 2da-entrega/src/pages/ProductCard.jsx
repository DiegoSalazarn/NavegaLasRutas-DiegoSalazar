import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>Precio: ${product.price}</p>
    </div>
  );
}

export default ProductCard;