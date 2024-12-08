import Image from "next/image";
import menuImage from "../images/img22.png"; // Replace with your image path

export default function OurMenu() {
  return (
    <section className= " bg-black text-white pt-10">
      {/* Heading and Subheading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-2 text-orange-500">Choose & Pick</h2>
        <p className="text-lg">Choose Your Favorite Menu</p>
      </div>

      {/* Menu Categories */}
      <div className="flex flex-wrap justify-center gap-6 mb-8">
        {[
          "Lunch",
          "Dinner",
          "Breakfast",
          "Dessert",
          "Drink",
          "Snack",
          "Soups",
        ].map((category) => (
          <button
            key={category}
            className="text-lg font-medium hover:text-black transition"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Section: Image */}
        <div className="relative">
          <Image
            src={menuImage}
            alt="Menu Image"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right Section: Menu Items */}
        <div className="space-y-8">
          {/* First Section: 4 Dishes */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-orange-500">Popular Dishes</h3>
            <ul className="space-y-4">
              <li className="flex justify-between border-b pb-2">
                <span className="text-lg font-medium">Grilled Chicken</span>
                <span className="text-lg font-semibold">$12.99</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <span className="text-lg font-medium">Beef Steak</span>
                <span className="text-lg font-semibold">$15.49</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <span className="text-lg font-medium">Seafood Pasta</span>
                <span className="text-lg font-semibold">$13.99</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <span className="text-lg font-medium">Caesar Salad</span>
                <span className="text-lg font-semibold">$10.99</span>
              </li>
            </ul>
          </div>

          {/* Second Section: 4 Dishes */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-orange-500">Chef Specials</h3>
            <ul className="space-y-4">
              <li className="flex justify-between border-b pb-2">
                <span className="text-lg font-medium">Lamb Chops</span>
                <span className="text-lg font-semibold">$18.99</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <span className="text-lg font-medium">Vegetable Curry</span>
                <span className="text-lg font-semibold">$11.49</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <span className="text-lg font-medium">BBQ Ribs</span>
                <span className="text-lg font-semibold">$17.99</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <span className="text-lg font-medium">Prawn Skewers</span>
                <span className="text-lg font-semibold">$14.99</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
