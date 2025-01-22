"use client";

import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const CheckoutForm = ({ cartItems }: { cartItems: any[] }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");

  // Calculate the total price, including a fixed delivery fee
  const calculateTotal = () => {
    const itemTotal = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    const deliveryFee = 50; // Fixed delivery fee
    return itemTotal + deliveryFee;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return; // Stripe.js has not yet loaded.
    }

    setIsProcessing(true);

    // Create a payment method using the card information
    const cardElement = elements.getElement(CardElement);

    if (cardElement) {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      });

      if (error) {
        setError(error.message || "Something went wrong.");
        setIsProcessing(false);
        return;
      }

      // Call your backend to create a checkout session
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cartItems,
          paymentMethodId: paymentMethod.id,
          name,
          email,
          address,
          city,
          zip,
        }),
      });

      const { clientSecret } = await response.json();

      // Confirm the payment with the client secret
      const { error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethod.id,
      });

      if (confirmError) {
        setError(confirmError.message || "Payment failed.");
      } else {
        // Redirect or show success page
        window.location.href = "/success";
      }
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 border border-gray-300 rounded-md shadow-md">
      <h2 className="font-bold text-2xl mb-4 text-center">Checkout</h2>

      {/* Customer Information */}
      <div className="mb-4">
        <label className="block text-sm font-semibold">Full Name</label>
        <input
          type="text"
          className="w-full text-black p-2 mt-1 border border-gray-300 rounded-md"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold">Email Address</label>
        <input
          type="email"
          className="w-full p-2 mt-1 text-black border border-gray-300 rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold">Shipping Address</label>
        <input
          type="text"
          className="w-full p-2 mt-1 text-black border border-gray-300 rounded-md"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>

      <div className="flex space-x-4 mb-4">
        <div className="w-1/2">
          <label className="block text-sm font-semibold">City</label>
          <input
            type="text"
            className="w-full p-2 mt-1 text-black border border-gray-300 rounded-md"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>

        <div className="w-1/2">
          <label className="block text-sm font-semibold">ZIP Code</label>
          <input
            type="text"
            className="w-full p-2 mt-1 text-black border border-gray-300 rounded-md"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            required
          />
        </div>
      </div>

      {/* Display Cart Items */}
      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-2">Your Items</h3>
        {cartItems.map((item, index) => (
          <div key={index} className="flex justify-between mb-2">
            <span>{item.name} (x{item.quantity})</span>
            <span>${item.price * item.quantity}
                <br />Delivery charges
            </span>
          </div>
        ))}
        {/* Display Total Price and Delivery Fee */}
        <div className="flex justify-between font-semibold">
          <span>Total:</span>
          <span>${calculateTotal()}</span>
        </div>
      </div>

      {/* Stripe Card Payment */}
      <div className="mb-6">
        <label className="block text-sm font-semibold">Payment Information</label>
        <CardElement className="border border-gray-300 p-2 rounded-md" />
      </div>

      {/* Error message */}
      {error && <p className="text-red-500">{error}</p>}

      <button
        type="submit"
        className="w-full py-3 bg-green-500 text-white rounded-md mt-4"
        disabled={isProcessing || !stripe}
      >
        {isProcessing ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
};

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    // Retrieve cart items from localStorage or global state
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(cart);
  }, []);

  return (
    <div className="p-6">
      <Elements stripe={stripePromise}>
        <CheckoutForm cartItems={cartItems} />
      </Elements>
    </div>
  );
};

export default CheckoutPage;
