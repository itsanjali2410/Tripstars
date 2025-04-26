
interface PackageCardProps {
  title: string;
  duration: string;
  price: string;
  image: string;
  highlights: string[];
}

const PackageCard = ({ title, duration, price, image, highlights }: PackageCardProps) => (
  <div className="bg-white rounded-2xl shadow-md overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-gray-500">{duration} • {price}</p>
      <ul className="text-sm text-gray-600 list-disc list-inside mt-2">
        {highlights.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
      <button className="mt-4 bg-blue-600 text-white w-full py-2 rounded-lg hover:bg-blue-700 transition">
        View Details
      </button>
    </div>
  </div>
);

export default PackageCard;
