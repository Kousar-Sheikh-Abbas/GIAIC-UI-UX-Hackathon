"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { Input } from "@/components/ui/input"; // If you have custom UI components
import Link from "next/link";

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

interface FoodItem {
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  tags: string[];
  image: any;
  description: string;
  available: boolean;
  quantity: number;
}

const Food = () => {
  const [foodItems, setFoodItems] = useState<FoodItem[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const [cart, setCart] = useState<FoodItem[]>([]); // Cart state
  const [wishlist, setWishlist] = useState<FoodItem[]>([]); // Wishlist state
  const [popupMessage, setPopupMessage] = useState<string | null>(null);

  useEffect(() => {
    // Fetch food items and categories from Sanity
    const fetchData = async () => {
      const foodQuery = `*[_type == "food"]{
        name,
        category,
        price,
        originalPrice,
        tags,
        image,
        description,
        available
      }`;
      const categoryQuery = `*[_type == "food"].category`;

      const [foodData, categoryData] = await Promise.all([
        sanityClient.fetch(foodQuery),
        sanityClient.fetch(categoryQuery),
      ]);

      setFoodItems(foodData);

      const uniqueCategories = Array.from(
        new Set(
          (categoryData as unknown[]).filter((item): item is string => typeof item === "string")
        )
      );
      setCategories(["All", ...uniqueCategories]);
    };

    fetchData();

    // Load cart and wishlist from localStorage on initial render
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setCart(savedCart);
    setWishlist(savedWishlist);
  }, []);

  useEffect(() => {
    // Save cart and wishlist to localStorage whenever they change
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [cart, wishlist]);

  const filteredFoodItems = foodItems.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;

    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const addToCart = (item: FoodItem) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex((cartItem) => cartItem.name === item.name);

      // If item already exists, update quantity
      if (existingItemIndex >= 0) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += 1;
        localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to localStorage
        return updatedCart;
      } else {
        // If item doesn't exist, add it to the cart
        const newItem = { ...item, quantity: 1 };
        const updatedCart = [...prevCart, newItem];
        localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to localStorage
        return updatedCart;
      }
    });
    setPopupMessage(`${item.name} has been added to your cart!`);
    setTimeout(() => setPopupMessage(null), 3000); // Hide popup after 3 seconds
  };

  const addToWishlist = (item: FoodItem) => {
    setWishlist((prevWishlist) => {
      const existingItemIndex = prevWishlist.findIndex((wishlistItem) => wishlistItem.name === item.name);

      // If item already exists, no need to add again
      if (existingItemIndex >= 0) return prevWishlist;

      const updatedWishlist = [...prevWishlist, item];
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist)); // Save to localStorage
      return updatedWishlist;
    });
    setPopupMessage(`${item.name} has been added to your wishlist!`);
    setTimeout(() => setPopupMessage(null), 240000); // Hide popup after 3 seconds
  };

  return (
    <div className="bg-black text-orange-500">
      <div className=" p-4">
        <h1 className="text-5xl text-center font-bold">Our Menu</h1>
      </div>

      {/* Search Bar */}
      <div className="text-center m-16">
        <div className="flex justify-center m-6">
          <Input
            placeholder="Search..."
            className="border-solid border-2 border-orange-500 rounded-full mx-40"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery(""); // Clear search when "View All" is clicked
            }}
            className={`px-4 py-2 rounded-lg font-semibold text-sm transition ${
              selectedCategory === "All"
                ? "bg-orange-500 text-white"
                : "bg-gray-800 text-gray-400 hover:bg-orange-600 hover:text-white"
            }`}
          >
            View All
          </button>
          {categories.map((category, index) =>
            category !== "All" ? (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-semibold text-sm flex items-center gap-2 transition ${
                  selectedCategory === category
                    ? "bg-orange-500 text-white"
                    : "bg-gray-800 text-gray-400 hover:bg-orange-600 hover:text-white"
                }`}
              >
                {category}
              </button>
            ) : null
          )}
        </div>
      </div>

      {/* Food Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFoodItems.map((food, index) => (
          <div key={index} className="bg-white mx-5 rounded-lg shadow-lg text-center">
            <img
              src={urlFor(food.image)}
              alt={food.name}
              className="w-full h-50 object-cover mb-4"
            />
            <h2 className="text-xl font-semibold">{food.name}</h2>
            <p className="text-sm text-black">{food.category}</p>
            <p className="mt-2">
              <span className="text-red-500 font-bold">${food.price}</span>
              {food.originalPrice && (
                <span className="line-through text-black ml-2">
                  ${food.originalPrice}
                </span>
              )}
            </p>
            <p className="mt-2 text-black">{food.description}</p>
            <button
              className="bg-orange-500 text-black py-2 px-4 rounded-lg hover:bg-gray-300 m-2"
              onClick={() => addToCart(food)}
            >
              Add to Cart
            </button>
            <button
              className="bg-blue-500 text-black py-2 px-4 rounded-lg hover:bg-gray-300 m-2"
              onClick={() => addToWishlist(food)}
            >
              Add to Wishlist
            </button>
          </div>
        ))}
      </div>

      {/* Popup Message */}
      {popupMessage && (
        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg z-50">
          {popupMessage}
        </div>
      )}
    </div>
  );
};

export default Food;
