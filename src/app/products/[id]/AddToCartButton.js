'use client';

import { useEffect, useState } from 'react';

export default function AddToCartButton({ product }) {
  const [addedQty, setAddedQty] = useState(0);

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const existing = cart.find(item => item.id === product.id);

    if (existing) {
      existing.quantity += 1;
      setAddedQty(existing.quantity);
    } else {
      cart.push({ ...product, quantity: 1 });
      setAddedQty(1);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
  };

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setAddedQty(existing.quantity);
    }
  }, [product.id]);

  return (
    <button
      onClick={handleAddToCart}
      className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
    >
      {addedQty > 0 ? `🛒 In Cart (${addedQty})` : '🛒 Add to cart'}
    </button>
  );
}
