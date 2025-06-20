'use client';
import Footer from '@/components/Footer';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function CartPage() {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartProducts(storedCart);
  }, []);

  const clearCart = () => {
    localStorage.removeItem('cart');
    setCartProducts([]);
  };

  // Function to remove a specific product from the cart
  const removeProduct = (id) => {
    const updatedCart = cartProducts.filter(product => product.id !== id);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartProducts(updatedCart);
  };

  if (cartProducts.length === 0) {
    return (
      <div>
      <div className="p-8 text-center min-h-[70vh] flex justify-center items-center   text-xl text-gray-700  ">
        🛒 Your cart is empty.
       
      </div>
  </div>
     
       
    );
  }

  return (
    <div className="p-8 ">
      <h1 className="text-3xl font-bold mb-6">🛒 Your Cart</h1>

      <button
        onClick={clearCart}
        className="mb-6 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
      >
        Clear Cart 🗑️
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cartProducts.map((product) => (
          <div
            key={product.id}
            className="border rounded-xl p-4 shadow hover:shadow-lg transition relative"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={200}
              className="w-full h-[200px] object-cover rounded"
            />
            <h2 className="mt-4 text-xl font-semibold">
              {product.name} <span className="text-sm text-gray-500">x{product.quantity}</span>
            </h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-green-600 font-bold mt-2">
              ${product.price} × {product.quantity} = ${product.price * product.quantity}
            </p>

            <button
              onClick={() => removeProduct(product.id)}
              className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition"
            >
              Remove
            </button>
             
          </div>
        ))}
      </div>
    </div>
  );
}
