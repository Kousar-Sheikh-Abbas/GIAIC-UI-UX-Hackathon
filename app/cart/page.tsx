"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Initialize the Sanity client
const sanityClient = createClient({
  projectId: "z0kuquo4", // Use your project ID
  dataset: "production", // Replace with your dataset
  apiVersion: "2023-01-01", // Use the appropriate API version
  useCdn: true, // Enable CDN for faster response
});

// Configure the image URL builder
const builder = imageUrlBuilder(sanityClient);
const urlFor = (source: any) => builder.image(source).url();

interface CartItem {
  name: string;
  category: string;
  price: number;
  quantity: number;
  image: any;
}

const Cart = () => {
  const [cart, setCart] = useState<CartItem[]>([]); // Cart state
  const [totalPrice, setTotalPrice] = useState<number>(0); // Total price state

  useEffect(() => {
    // Load cart from localStorage when the page loads
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(savedCart);

    // Recalculate total price
    const total = savedCart.reduce(
      (acc: number, item: CartItem) => acc + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  }, []);

  // Add item to cart (or update quantity if item already exists)
  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      // Find if the item already exists in the cart
      const existingItemIndex = prevCart.findIndex((cartItem) => cartItem.name === item.name);

      let updatedCart;
      if (existingItemIndex >= 0) {
        // If the item exists, update the quantity
        updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += 1;
      } else {
        // If the item doesn't exist, add it to the cart
        updatedCart = [...prevCart, { ...item, quantity: 1 }];
      }

      // Save the updated cart to localStorage
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  // Remove item from the cart
  const removeItemFromCart = (itemToRemove: CartItem) => {
    const updatedCart = cart.filter((item) => item.name !== itemToRemove.name);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Recalculate total price
    const total = updatedCart.reduce(
      (acc: number, item: CartItem) => acc + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  };

  // Update the quantity of an item in the cart
  const updateQuantity = (item: CartItem, newQuantity: number) => {
    if (newQuantity <= 0) return; // Prevent negative or zero quantity
    const updatedCart = cart.map((cartItem) =>
      cartItem.name === item.name ? { ...cartItem, quantity: newQuantity } : cartItem
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Recalculate total price
    const total = updatedCart.reduce(
      (acc: number, item: CartItem) => acc + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  };

  return (
    <div className="p-6 bg-black text-orange-500">
      <h1 className="text-5xl font-bold text-center mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-white">Your cart is empty!</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} className="flex justify-between items-center border-b py-4">
              <img
                src={urlFor(item.image)} // Use imageUrlBuilder to get the image URL
                alt={item.name}
                className="w-20 h-20 object-cover rounded-md"
              />
              <div className="flex flex-col">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm">{item.category}</p>
                <p className="text-lg font-bold">${item.price}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateQuantity(item, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                  className="bg-orange-500 text-black py-1 px-3 rounded-lg"
                >
                  -
                </button>
                <span className="text-lg">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item, item.quantity + 1)}
                  className="bg-orange-500 text-black py-1 px-3 rounded-lg"
                >
                  +
                </button>
                <button
                  onClick={() => removeItemFromCart(item)}
                  className="bg-red-500 text-white py-1 px-3 rounded-lg"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="mt-6 flex justify-between items-center">
            <h2 className="text-2xl font-bold">Total: ${totalPrice.toFixed(2)}</h2>
            {/* Use Link component to navigate to checkout */}
            <Link href="/checkout">
              <button className="bg-orange-500 text-black py-2 px-4 rounded-lg hover:bg-gray-300">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
