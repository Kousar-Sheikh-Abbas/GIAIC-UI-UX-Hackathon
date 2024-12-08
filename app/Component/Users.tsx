
import { Users, UtensilsCrossed, Smile } from "lucide-react";
import bgImage from "../images/img21.jpg"; // Path to your background image

export default function FeaturesSection() {
  return (
    <section
      className="relative h-[300px] flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for dark effect */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content Container */}
      <div className="relative container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="p-8 rounded-lg bg-black bg-opacity-30 text-center shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Professional Chefs</h3>
          <div className="flex justify-center mb-4">
            <UtensilsCrossed size={48} className="text-orange-500" />
          </div>
          <p className="text-lg">420 Items of Food</p>
        </div>

        {/* Card 2 */}
        <div className="p-8 rounded-lg bg-black bg-opacity-30 text-center shadow-lg">
          <h3 className="text-2xl font-bold mb-4">30 Years of Experience</h3>
          <div className="flex justify-center mb-4">
            <Users size={48} className="text-orange-500" />
          </div>
          <p className="text-lg">30+ Happy Customers</p>
        </div>

        {/* Card 3 */}
        <div className="p-8 rounded-lg bg-black bg-opacity-30 text-center shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Quality Service</h3>
          <div className="flex justify-center mb-4">
            <Smile size={48} className="text-orange-500" />
          </div>
          <p className="text-lg">220+ Positive Reviews</p>
        </div>
      </div>
      
    </section>
  );
}
