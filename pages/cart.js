import { useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState([]);

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p className="mt-4 text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="mt-6">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between border-b py-4">
              <div>
                <h2 className="text-xl">{item.name}</h2>
                <p>${item.price}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="text-red-500">Remove</button>
            </div>
          ))}
          <div className="mt-6">
            <p className="text-xl font-bold">Total: ${cart.reduce((total, item) => total + item.price, 0)}</p>
            <button className="mt-4 bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
