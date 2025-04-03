import { FaStar, FaGlobe, FaUserFriends, FaMoneyBillWave } from "react-icons/fa";

const WhyChooseTripStars = () => {
  const features = [
    {
      icon: <FaStar className="text-yellow-500 text-4xl" />, 
      title: "Top-Rated Experiences", 
      description: "Handpicked destinations with exceptional reviews and customer satisfaction."
    },
    {
      icon: <FaGlobe className="text-blue-500 text-4xl" />, 
      title: "Worldwide Coverage", 
      description: "Explore destinations across the globe with seamless travel planning."
    },
    {
      icon: <FaUserFriends className="text-green-500 text-4xl" />, 
      title: "Personalized Service", 
      description: "Dedicated support and customized itineraries for every traveler."
    },
    {
      icon: <FaMoneyBillWave className="text-green-600 text-4xl" />, 
      title: "Best Price Guarantee", 
      description: "Get the best deals on hotels, flights, and activities."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-gray-100 py-16 px-6 text-center">
      <h5 className="text-4xl font-bold text-gray-800 mb-10">Why Choose TripStars?</h5>
      <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto overflow-x-auto">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center border border-gray-200 w-72 min-w-[250px]"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-3">{feature.title}</h3>
            <p className="text-gray-600 text-lg">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseTripStars;
