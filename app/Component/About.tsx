import Image from "next/image";
import img1 from "../images/img8.jpg";
import img2 from "../images/img9.jpg";
import img3 from "../images/img10.jpg";

export default function AboutUs() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 bg-black ">
      {/* Left Side - Text Content */}
      <div className="flex-1 space-y-6 md:pr-12">
        <h1 className="text-4xl font-bold text-orange-500">About Us</h1>
        <ul className="list-disc space-y-4 pl-5 text-lg text-white">
          <li>We offer the freshest ingredients and handcrafted meals.</li>
          <li>Our chefs are highly trained with years of experience.</li>
          <li>Customer satisfaction is our top priority.</li>
        </ul>
        <button className="bg-orange-500 text-black py-2 px-6 rounded-lg hover:bg-gray-300 transition">
         Read more
        </button>
      </div>

      {/* Right Side - Images */}
      <div className="flex-1 grid grid-cols-2 gap-4 mt-8 md:mt-0">
        <div className="relative w-full h-48">
          <Image
            src={img1}
            alt="Our team at work"
            className="object-cover rounded-lg"
            layout="fill"
          />
        </div>
        <div className="relative w-full h-48">
          <Image
            src={img2}
            alt="Delicious meal"
            className="object-cover rounded-lg"
            layout="fill"
          />
        </div>
        <div className="relative w-full h-48 col-span-2">
          <Image
            src={img3}
            alt="Happy customers"
            className="object-cover rounded-lg"
            layout="fill"
          />
        </div>
      </div>
    </section>
  );
}
