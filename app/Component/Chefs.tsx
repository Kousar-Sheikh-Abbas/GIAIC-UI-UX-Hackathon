import Image from "next/image";
import chefImage from "../images/img24.jpg"; // Replace with your chef image path
import profilePic from "../images/img23.jpg"; // Replace with your testimonial image path

export default function MeetChefsTestimonials() {
  return (
    <section className="pt-20 bg-black text-white">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-2 text-orange-500">Meet Our Chefs</h2>
        <p className="text-lg">Discover the masters behind our kitchen</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        {["Chef John", "Chef Emily", "Chef Mark", "Chef Sarah"].map((chef, index) => (
          <div
            key={index}
            className="relative bg-gray-900 text-white rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src={chefImage}
              alt={chef}
              className="w-full h-64 object-cover brightness-50"
            />
      
            <div className="absolute bottom-4 left-4">
              <h3 className="text-xl font-semibold">{chef}</h3>
              <p className="text-sm">Professional Chef</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button className="px-6 py-2 bg-orange-500 text-black rounded-lg hover:bg-gray-800 transition">
          See More
        </button>
      </div>
      <div className="text-center mt-16 mb-10">
        <h2 className="text-4xl font-bold mb-2 text-orange-500">Testimonials</h2>
        <p className="text-lg ">What Our Clients Say</p>
      </div>
      <div className="flex justify-center pb-10">
        <div className="relative bg-white p-6 rounded-lg shadow-2xl border border-gray-200 hover:shadow-glow transition">
          {/* Profile Picture */}
          <div className="w-20 h-20 mx-auto mb-4">
            <Image
              src={profilePic}
              alt="Client Profile"
              className="rounded-full object-cover"
            />
          </div>
          <p className="text-gray-700 text-center italic mb-4">
            "The food here is absolutely amazing! The service was excellent and the ambiance made our evening special. Highly recommend!"
          </p>

          {/* Rating */}
          <div className="flex justify-center space-x-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={`w-5 h-5 ${i < 4 ? "text-yellow-500" : "text-gray-300"}`}
              >
                ★
              </span>
            ))}
          </div>
          <p className="text-center text-lg font-semibold text-gray-800">John Doe</p>
        </div>
      </div>
      
    </section>
  );
}
