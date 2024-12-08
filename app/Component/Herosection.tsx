import Image from "next/image";
import hero from "../images/img2.png"; // Replace with your image path
import image from "../images/img6.png";
import leaf from "../images/img5.png";
import dish2 from "../images/img3.png";
import dish3 from "../images/img7.png";

export default function HeroSection() {
  return (
    <div>
    <section className="flex flex-col md:flex-row items-center justify-between bg-transparent text-white h-[600px] px-6 md:px-20 relative">
      {/* Left Side - Text Content */}
      <div className="flex-1 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-2xl font-mono text-orange-500">its quick and amusing!</h1>
        <h2 className="text-2xl md:text-3xl text-gray-300">Delicious meals made with love</h2>
        <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
          Discover an unforgettable dining experience with our exquisite menu crafted by top chefs.
        </p>
        <button className="bg-orange-500 text-black py-2 px-6 rounded-lg hover:bg-gray-300 transition">
          See Menu
        </button>
      </div>

      {/* Right Side - Image with Circular Transparent Border */}
      <div className="flex-1 flex justify-center items-center mt-8 md:mt-0 relative">
        <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full border-[1px] border-white border-opacity-50 flex items-center justify-center overflow-hidden">
          <Image
            src={image}
            alt="Delicious Food"
            className="w-[400px] h-[400px] flex absolute right-[10px] bottom-4"
          />
          <Image
            src={dish3}
            alt="Delicious Food"
            className="w-[100px] h-[100px] flex absolute left-[30px] top-[350px] "
          />
            <Image
            src={hero}
            alt="Delicious Food"
            className="w-full h-[900px] flex  absolute bottom-[0.6]"
          />
          <Image
            src={leaf}
            alt="Delicious Food"
            className="w-[100px] h-[100px] flex absolute left-[10px]"
          />
           <Image
            src={dish1}
            alt="Delicious Food"
            className="w-[100px] h-[200px] flex absolute left-[10px] top-[50px]"
          />
           
        </div>
        </div>
    </section>
    </div>
  );
}
