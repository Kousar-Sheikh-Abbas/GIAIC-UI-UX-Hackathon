import React, { useEffect, useState } from 'react';
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Initialize the Sanity client
const sanityClient = createClient({
  projectId: "z0kuquo4", // Use your project ID
  dataset: "production",     // Use your dataset name
  apiVersion: '2023-01-01',                            // Use the appropriate API version
  useCdn: true,                                        // Enable CDN for faster response
});

// Configure the image URL builder
const builder = imageUrlBuilder(sanityClient);
const urlFor = (source: any) => builder.image(source).url();

interface Chef {
  name: string;
  position: string;
  experience: number;
  specialty: string;
  image: any; // Updated to match Sanity image type
  description: string;
  available: boolean;
}

const Chef = () => {
  const [chefs, setChefs] = useState<Chef[]>([]);

  useEffect(() => {
    // Fetch data from Sanity
    const fetchData = async () => {
      const query = `*[_type == "chef"]{
        name,
        position,
        experience,
        specialty,
        image,
        description,
        available
      }`;
      const data = await sanityClient.fetch(query);
      setChefs(data);
    };

    fetchData();
  }, []);

  return (
    <div className="bg-black text-orange-500 py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-10">Meet Our Chefs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {chefs.slice(0, 6).map((chef, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
          >
            <img
              src={urlFor(chef.image)}
              alt={chef.name}
              className="w-full h-80 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold">{chef.name}</h2>
            <p className="text-sm text-gray-400">{chef.position}</p>
            <p className="mt-2">Experience: {chef.experience} years</p>
            <p>Specialty: {chef.specialty}</p>
            <p className="mt-2 text-gray-300">{chef.description}</p>
            <p className={`mt-4 ${chef.available ? 'text-green-500' : 'text-red-500'}`}>
              {chef.available ? 'Currently Active' : 'Not Active'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chef;
