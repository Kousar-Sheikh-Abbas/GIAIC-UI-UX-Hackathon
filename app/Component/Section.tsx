
import bgImage from "../images/img25.jpg"; // Replace with your image path
import { PlayCircle } from "lucide-react";

export default function ActiveProcess() {
  return (
    <section  className="relative h-[300px] flex items-center justify-center text-white"
    style={{
      backgroundImage: `url(${bgImage.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
      <div className=" w-full md:w-1/2 relative">
        <div className="h-[350px] md:h-[450px] w-full overflow-hidden">
        </div>
      </div>
      <div className="w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
        <h2 className="text-4xl font-bold mb-4 text-orange-500">
          Our Restaurants Active Process
        </h2>
        <p className=" mb-6">
          Discover how we prepare delicious meals with passion and dedication,
          using fresh ingredients and world-class culinary techniques.
        </p>

        {/* Buttons */}
        <div className="flex justify-center md:justify-start space-x-4">
          {/* Read More Button */}
          <button className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-gray-800 transition">
            Read More
          </button>

          {/* Play Video Button */}
          <button className="flex items-center px-4 py-2 bg-transparent  text-orange-500 rounded-lg hover:border-gray-700 hover:text-black transition">
            <PlayCircle className="w-6 h-6 mr-2" />
            Play Video
          </button>
        </div>
      </div>
    </section>
  );
}
