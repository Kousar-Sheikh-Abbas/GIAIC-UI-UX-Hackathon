"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation"; // For redirecting after signout

export default function Login() {
  const [cart, setCart] = useState<any[]>([]);
  const [wishlist, setWishlist] = useState<any[]>([]);
  const [orders, setOrders] = useState<any[]>([]);
  const [user, setUser] = useState<{ name: string; email: string; phone: string } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Load user data, cart, wishlist, and orders from localStorage
    const savedUser = localStorage.getItem("user");
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    const savedOrders = JSON.parse(localStorage.getItem("orders") || "[]");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setCart(savedCart);
    setWishlist(savedWishlist);
    setOrders(savedOrders);
  }, []);

  const handleSignOut = () => {
    // Clear user data from localStorage and reset user state
    localStorage.removeItem("user");
    localStorage.removeItem("cart");
    localStorage.removeItem("wishlist");
    localStorage.removeItem("orders");
    setUser(null); // Reset the user state
    setCart([]);
    setWishlist([]);
    setOrders([]);

    // Redirect to login page
    router.push("/login");
  };

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl text-center font-semibold mb-6">Login</h1>

      {error && (
        <div className="bg-red-500 text-white p-3 mb-4 rounded-md text-center">
          {error}
        </div>
      )}

      {/* User Details and Sign Out */}
      {user ? (
        <div className="max-w-lg mx-auto bg-white p-6 rounded-md shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Welcome, {user.name}!</h2>

          <p className="mb-2"><strong>Email:</strong> {user.email}</p>
          <p className="mb-4"><strong>Phone:</strong> {user.phone}</p>

          {/* Display Cart */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Cart ({cart.length} items)</h3>
            {cart.length > 0 ? (
              <ul>
                {cart.map((item, index) => (
                  <li key={index} className="mb-2">
                    {item.name} - ${item.price}
                  </li>
                ))}
              </ul>
            ) : (
              <p>Your cart is empty.</p>
            )}
          </div>

          {/* Display Wishlist */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Wishlist ({wishlist.length} items)</h3>
            {wishlist.length > 0 ? (
              <ul>
                {wishlist.map((item, index) => (
                  <li key={index} className="mb-2">
                    {item.name} - ${item.price}
                  </li>
                ))}
              </ul>
            ) : (
              <p>Your wishlist is empty.</p>
            )}
          </div>

          {/* Display Orders */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Order History ({orders.length} orders)</h3>
            {orders.length > 0 ? (
              <ul>
                {orders.map((order, index) => (
                  <li key={index} className="mb-2">
                    Order #{order.id} - {order.status}
                  </li>
                ))}
              </ul>
            ) : (
              <p>You have no orders yet.</p>
            )}
          </div>

          {/* Sign Out Button */}
          <Button variant="default" onClick={handleSignOut} className="w-full p-3 mt-4 bg-red-500 text-white rounded-md hover:bg-red-600">
            Sign Out
          </Button>
        </div>
      ) : (
        // Login form goes here if the user is not logged in
        <div className="max-w-lg mx-auto bg-white p-6 rounded-md shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Please Log In</h2>

          <form>
            {/* Email and Password Fields */}
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 mb-4 border border-gray-300 rounded-md"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-4 border border-gray-300 rounded-md"
            />
            <Button variant="default" type="submit" className="w-full p-3 bg-black text-white rounded-md hover:bg-orange-500">
              Login
            </Button>
          </form>
        </div>
      )}

      {/* Link to Signup page */}
      {!user && (
        <p className="mt-6 text-center">
          Don't have an account?{" "}
          <a href="/signup" className="text-orange-500 hover:underline">
            Sign up here
          </a>
        </p>
      )}
    </div>
  );
}
