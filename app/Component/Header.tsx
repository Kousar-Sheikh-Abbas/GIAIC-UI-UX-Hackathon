"use client";

import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, ShoppingCart } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return(
    <>
      {/* Header Section */}
      <header
        className="relative  text-white" >
        {/* Top Header */}
        <div className="container mx-auto py-4 flex justify-center">
          <h1 className="text-3xl mt-10 font-bold tracking-wide">Food<span className="text-orange-500">truck</span></h1>
        </div>

        {/* Navigation Bar */}
        <nav className=" text-white">
          <div className="container mx-auto flex items-center justify-between py-3 px-6">
            {/* Hamburger Icon for Mobile */}
            <div className="block md:hidden">
              <Menu
                className="w-8 h-8 cursor-pointer"
                onClick={toggleSidebar}
              />
            </div>

            {/* Navbar Links - Hidden on Mobile */}
            <ul className="hidden md:flex space-x-8 text-lg">
              <li>
                <Link href="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-gray-300">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-gray-300">
                  Blog
                </Link>
              </li>
              <li className="group relative">
                <Link href="/about" className="hover:text-gray-300">
                  About
                </Link>
                {/* Submenu */}
                <ul className="absolute hidden group-hover:block bg-black bg-opacity-90 mt-2 space-y-4 p-4 rounded-lg">
                  <li>
                    <Link href="/about/faq" className="hover:text-gray-300">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/chefs" className="hover:text-gray-300">
                      Our Chefs
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/signup" className="hover:text-gray-300">
                      Sign Up
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/signin" className="hover:text-gray-300">
                      Sign In
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/shop" className="hover:text-gray-300">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-300">
                  Contact
                </Link>
              </li>
            </ul>

            {/* Search Bar and Add to Cart */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Search Bar */}
              <div className="relative">
                <Input
                  placeholder="Search..."
                  className=" border-solid border-2 border-orange-500 rounded-full  pl-10"
                />
                <Search
                  className="absolute left-3 top-2.5 text-gray-300"
                  size={18}
                />
              </div>

              {/* Add to Cart Button */}
              <Button
                variant="default"
                className=" bg-transparent hover:bg-gray-200"
              >
                <ShoppingCart className="mr-2" size={10} /> 
              </Button>
            </div>
          </div>
        </nav>

        {/* Sidebar Menu (Mobile) */}
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50">
            <div className="flex justify-end p-4">
              <X
                className="w-8 h-8 text-white cursor-pointer"
                onClick={toggleSidebar}
              />
            </div>
            <ul className="flex flex-col items-center space-y-6 text-xl mt-10">
              <li>
                <Link href="/" className="hover:text-gray-300" onClick={toggleSidebar}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-gray-300" onClick={toggleSidebar}>
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-gray-300" onClick={toggleSidebar}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-300" onClick={toggleSidebar}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-gray-300" onClick={toggleSidebar}>
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-300" onClick={toggleSidebar}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>
      </>
  );
}