import React from 'react';
import bali from "../../../assets/PopularDestination/Bali.webp";
import dubai from "../../../assets/PopularDestination/Dubai.webp";
import singapore from "../../../assets/PopularDestination/Singapore.webp"
import thailand from "../../../assets/PopularDestination/Thailand.webp"
interface Destination {
  name: string;
  image: string;
}

const destinations: Destination[] = [
  { name: 'BALI', image: bali },
  { name: 'DUBAI', image: dubai },
  { name: 'SINGAPORE', image: singapore },
  { name: 'THAILAND', image: thailand },
  { name: 'ANDAMAN', image: '/images/andaman.jpg' },
  { name: 'INDIA', image: '/images/india.jpg' },
  { name: 'LADAKH', image: '/images/ladakh.jpg' },
  { name: 'HONGKONG', image: '/images/hongkong.jpg' },
  { name: 'SRILANKA', image: '/images/srilanka.jpg' }
];

const TravelDestinations: React.FC = () => {
  return (
    <div className="px-4 py-10 text-center">
      <h2 className="text-2xl font-bold mb-8">TRAVEL DESTINATIONS</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {destinations.map((dest) => (
          <div
            key={dest.name}
            className="relative overflow-hidden rounded-lg shadow-md h-40 group"
          >
            <img
              src={dest.image}
              alt={dest.name}
              className="object-cover w-full h-full transform group-hover:scale-105 transition duration-300 ease-in-out"
            />
            <span className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-sm font-bold py-2">
              {dest.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelDestinations;