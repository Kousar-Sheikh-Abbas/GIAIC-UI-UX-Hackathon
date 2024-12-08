import Image from "next/image";
import { Utensils, Pizza, Drumstick } from "lucide-react";

// Import your images here
import img1 from "../images/img11.jpg";
import img2 from "../images/img12.jpg";
import img3 from "../images/img13.jpg";
import img4 from "../images/img14.jpg";
import img5 from "../images/img15.jpg";
import img6 from "../images/img16.jpg";
import img7 from "../images/img17.jpg";
import img8 from "../images/img18.jpg";
import img9 from "../images/img19.jpg";
import img10 from "../images/img20.jpg";

export default function FoodCategory() {
  return (
    <section className="bg-black py-12 text-white-800">
      {/* Food Category Section */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-orange-500">Food Category</h2>
          <p className="text-lg text-white mt-2">Choose your favorite items</p>
        </div>

        {/* Four Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="relative w-full h-64 rounded-lg overflow-hidden">
            <Image src={img1} alt="Food Item 1" className="object-cover" layout="fill" />
          </div>
          <div className="relative w-full h-64 rounded-lg overflow-hidden">
            <Image src={img2} alt="Food Item 2" className="object-cover" layout="fill" />
          </div>
          <div className="relative w-full h-64 rounded-lg overflow-hidden">
            <Image src={img3} alt="Food Item 3" className="object-cover" layout="fill" />
          </div>
          <div className="relative w-full h-64 rounded-lg overflow-hidden">
            <Image src={img4} alt="Food Item 4" className="object-cover" layout="fill" />
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="container mx-auto px-4 mt-16 flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left Section - 6 Images Grid */}
        <div className="flex-1 grid grid-cols-3 gap-4">
          <div className="relative col-span-2 h-40">
            <Image src={img5} alt="Image 1" className="object-cover rounded-lg" layout="fill" />
          </div>
          <div className="relative h-40">
            <Image src={img6} alt="Image 2" className="object-cover rounded-lg" layout="fill" />
          </div>
          <div className="relative h-32">
            <Image src={img7} alt="Image 3" className="object-cover rounded-lg" layout="fill" />
          </div>
          <div className="relative h-48 col-span-2">
            <Image src={img8} alt="Image 4" className="object-cover rounded-lg" layout="fill" />
          </div>
          <div className="relative h-36">
            <Image src={img9} alt="Image 5" className="object-cover rounded-lg" layout="fill" />
          </div>
          <div className="relative h-40 col-span-3">
            <Image src={img10} alt="Image 6" className="object-cover rounded-lg" layout="fill" />
          </div>
        </div>

        {/* Right Section - Why Choose Us */}
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl font-bold text-orange-500">Why Choose Us?</h2>
          <p className="text-white leading-relaxed">
            We provide the best dining experience with freshly made dishes, outstanding service, and a cozy ambiance.
          </p>
          <div className="space-y-4 text-white">
            <div className="flex items-center gap-4 ">
              <Utensils size={32} className="text-green-500" />
              <span className="text-lg font-semibold">Lunch Specials</span>
            </div>
            <div className="flex items-center gap-4">
              <Pizza size={32} className="text-yellow-500" />
              <span className="text-lg font-semibold">Fast Food Favorites</span>
            </div>
            <div className="flex items-center gap-4">
              <Drumstick size={32} className="text-red-500" />
              <span className="text-lg font-semibold">Dinner Delights</span>
            </div>
          </div>

          {/* Experience Tag */}
          <div className="inline-block bg-green-600 text-white py-2 px-4 rounded-lg mt-4">
            <span className="text-xl font-bold">30+ Years Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
}
