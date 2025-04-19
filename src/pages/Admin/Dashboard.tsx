import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface Package {
  _id: string;
  packageName: string;
  destinationCovered: string;
  totalPackagePrice: string;
  country: string;
}

const Dashboard: React.FC = () => {
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPackages = async () => {
      setLoading(true);
      setError(null);  // Reset error on each new fetch
      try {
        const res = await axios.get("http://localhost:5000/api/packages");
        setPackages(res.data);
      } catch (err: any) {
        setError("Error fetching packages. Please try again later.");
        console.error("Error fetching packages:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <button
        onClick={() => navigate("/admin/add")}
        className="mb-4 bg-green-500 px-4 py-2 rounded"
      >
        Add New Package
      </button>

      {loading ? (
        <p>Loading...</p> // Show loading message
      ) : error ? (
        <p className="text-red-500">{error}</p> // Show error message
      ) : packages.length === 0 ? (
        <p>No packages found.</p> // Show message when no packages are available
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Package Name</th>
              <th className="border p-2">Destination</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Country</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {packages.map((pkg) => (
              <tr key={pkg._id}>
                <td className="border p-2">{pkg.packageName}</td>
                <td className="border p-2">{pkg.destinationCovered}</td>
                <td className="border p-2">₹{pkg.totalPackagePrice}</td>
                <td className="border p-2">{pkg.country}</td>
                <td className="border p-2">
                  <button
                    onClick={() => navigate(`/admin/edit/${pkg._id}`)}
                    className="bg-blue-500 px-3 py-1 rounded"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Dashboard;
