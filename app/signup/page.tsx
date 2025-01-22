"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<any | null>(null); // To check if the user is already logged in
  const router = useRouter();

  // Check if user is logged in (via localStorage) on page load
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user") || "null");
    if (savedUser) {
      setUser(savedUser); // If user exists, show their info
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic form validation
    if (!name || !email || !phone || !password) {
      setError("All fields are required!");
      return;
    }

    // Save user data in localStorage (simulating user registration)
    const newUser = { name, email, phone };
    localStorage.setItem("user", JSON.stringify(newUser));

    // Redirect to login page after successful registration
    router.push("/login");
  };

  const handleSignOut = () => {
    // Remove user from localStorage and redirect to login page
    localStorage.removeItem("user");
    setUser(null);
    router.push("/login");
  };

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl text-center font-semibold mb-6">Create an Account</h1>

      {error && (
        <div className="bg-red-500 text-white p-3 mb-4 rounded-md text-center">
          {error}
        </div>
      )}

      {user ? (
        // If the user is already logged in, show their details and the sign-out button
        <div className="max-w-lg mx-auto bg-white p-6 rounded-md shadow-lg">
          <h2 className="text-xl font-semibold">Welcome back, {user.name}!</h2>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>

          <div className="mt-4">
            <Button
              variant="default"
              onClick={handleSignOut}
              className="w-full p-3 mt-4 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Sign Out
            </Button>
          </div>
        </div>
      ) : (
        // If not logged in, show the registration form
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-md shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold">Full Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-3 mt-1 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 mt-1 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-semibold">Phone Number</label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full p-3 mt-1 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-semibold">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 mt-1 border border-gray-300 rounded-md"
            />
          </div>

          <div className="text-center">
            <Button variant="default" type="submit" className="w-full p-3 mt-4 bg-black text-white rounded-md hover:bg-orange-500">
              Sign Up
            </Button>
          </div>
        </form>
      )}

      <p className="mt-6 text-center">
        Already have an account?{" "}
        <a href="/login" className="text-orange-500 hover:underline">
          Login here
        </a>
      </p>
    </div>
  );
}
