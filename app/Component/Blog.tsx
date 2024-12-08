import { Heart, MessageCircle, Share } from "lucide-react"; // For like, comment, and share icons
import bgImage1 from "../images/img26.jpg"; // Replace with your image paths
import bgImage2 from "../images/img27.jpg";
import bgImage3 from "../images/img28.jpg";

export default function BlogSection() {
  return (
    <section className="py-16 px-6 text-white  bg-black">
      {/* Blog Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-orange-500">Blog</h2>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-screen">
        {/* Card 1 */}
        <div className="bg-cover bg-center relative rounded-lg" style={{ backgroundImage: `url(${bgImage1.src})` }}>
          <div className="bg-black bg-opacity-60 p-10 text-white rounded-lg">
            <p className="text-sm mb-2">January 25, 2024</p>
            <p className="text-lg mb-4">Blog Title 1</p>
            <p className="text-base mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra, eros eu...</p>

            <div className="flex justify-between items-center">
              {/* Left: Learn More Button */}
              <button className="text-white border-0 bg-transparent hover:underline">Learn More</button>

              {/* Right: Icons */}
              <div className="flex space-x-4">
                <Heart className="w-5 h-5 text-white" />
                <MessageCircle className="w-5 h-5 text-white" />
                <Share className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-cover bg-center relative rounded-lg" style={{ backgroundImage: `url(${bgImage2.src})` }}>
          <div className="bg-black bg-opacity-60 p-10 text-white rounded-lg">
            <p className="text-sm mb-2">February 5, 2024</p>
            <p className="text-lg mb-4">Blog Title 2</p>
            <p className="text-base mb-4">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</p>
            <div className="flex justify-between items-center">
              {/* Left: Learn More Button */}
              <button className="text-white border-0 bg-transparent hover:underline">Learn More</button>

              {/* Right: Icons */}
              <div className="flex space-x-4">
                <Heart className="w-5 h-5 text-white" />
                <MessageCircle className="w-5 h-5 text-white" />
                <Share className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-cover bg-center relative rounded-lg" style={{ backgroundImage: `url(${bgImage3.src})` }}>
          <div className="bg-black bg-opacity-60 p-10 text-white rounded-lg">
            <p className="text-sm mb-2">March 10, 2024</p>
            <p className="text-lg mb-4">Blog Title 3</p>
            <p className="text-base mb-4">Ut labore et dolore magna aliqua. Enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>

            <div className="flex justify-between items-center">
              {/* Left: Learn More Button */}
              <button className="text-white border-0 bg-transparent hover:underline">Learn More</button>

              {/* Right: Icons */}
              <div className="flex space-x-4">
                <Heart className="w-5 h-5 text-white" />
                <MessageCircle className="w-5 h-5 text-white" />
                <Share className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Below Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 ml-10">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold mb-4 ">Start, you need our support?</h3>
          <p className="text-lg ">We are here to assist you in any way we can. Get in touch with us today.</p>
        </div>

        {/* Right Section: Email Input and Subscribe */}
        <div className="flex items-center justify-center md:justify-start space-x-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 w-60 border border-gray-300 rounded-lg  "
          />
          <button className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-gray-800">Subscribe Now</button>
        </div>
      </div>
    </section>
  );
}
