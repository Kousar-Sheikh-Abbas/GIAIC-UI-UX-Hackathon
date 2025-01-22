"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, ShoppingCart, Heart, User } from "lucide-react"; // Add Heart and User icons

export default function Header() {
  const [cart, setCart] = useState<any[]>([]); // Cart state
  const [wishlist, setWishlist] = useState<any[]>([]); // Wishlist state
  const [language, setLanguage] = useState("en"); // Language state

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    console.log('Cart:', savedCart);  // Check cart data
    console.log('Wishlist:', savedWishlist);  // Check wishlist data
    setCart(savedCart);
    setWishlist(savedWishlist);
  }, []); 

  useEffect(() => {
    // Update localStorage whenever cart or wishlist changes
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    if (wishlist.length > 0) {
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
  }, [cart, wishlist]); // Runs whenever cart or wishlist changes

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
    // Logic to change language can be added here, such as updating content
  };

  return (
    <>
      {/* Language Dropdown Above the Logo */}
      <div className="bg-black text-white p-2 text-center">
        <select 
          value={language} 
          onChange={handleLanguageChange} 
          className="bg-black flex ml-[1250px] text-white border-none"
        >
          <option value="en">English</option>
          <option value="ur">Urdu</option>
        </select>
      </div>

      {/* Header Section */}
      <header className="relative text-white bg-black">
        <div className="container mx-auto py-4 flex justify-center">
          <h1 className="text-3xl mt-10 font-bold tracking-wide">
            Food<span className="text-orange-500">truck</span>
          </h1>
        </div>

        <nav className="text-white">
          <div className="container mx-auto flex items-center justify-between py-3 px-6">
            {/* Hamburger Icon */}
            <div className="block md:hidden">
              <Menu className="w-8 h-8 cursor-pointer" />
            </div>

            {/* Navbar Links */}
            <ul className="hidden md:flex space-x-8 text-lg">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/menu">Menu</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/faq">FAQ</Link></li> {/* FAQ Link */}
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>

            {/* Cart, Wishlist, and Login Buttons */}
            <div className="container flex items-center justify-between py-3 px-6">
              <div className=" items-center space-x-4 ml-auto"> {/* ml-auto pushes it to the right */}
                {/* Cart Icon */}
                <Link href="/cart">
                  <Button variant="default" className=" items-center space-x-2 hover:text-orange-500">
                    <ShoppingCart />
                    <span>{cart.length}</span>
                  </Button>
                </Link>

                {/* Wishlist Icon */}
                <Link href="/wishlist">
                  <Button variant="default" className=" items-center space-x-2 hover:text-orange-500">
                    <Heart />
                    <span>{wishlist.length}</span>
                  </Button>
                </Link>

                {/* Login Icon */}
                <Link href="/login">
                  <Button variant="default" className="items-center space-x-2 hover:text-orange-500">
                    <User />
                    <span></span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
