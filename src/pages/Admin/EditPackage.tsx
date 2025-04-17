import React, { useEffect, useState } from 'react';
import { getPackageById, updatePackage } from '../API/packageAPI';
import { useNavigate, useParams } from 'react-router-dom';

const EditPackage: React.FC = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    packageName: '',
    destinationCovered: '',
    totalPackagePrice: '',
    country: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;
      const res = await getPackageById(id);
      setFormData(res.data);
    };
    fetchData();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) return;
    try {
      await updatePackage(id, formData);
      navigate('/admin');
    } catch (err) {
      console.error('Error updating package:', err);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Edit Package</h2>
      <form onSubmit={handleSubmit} className="grid gap-4 max-w-md">
        <input name="packageName" value={formData.packageName} onChange={handleChange} placeholder="Package Name" className="p-2 border" />
        <input name="destinationCovered" value={formData.destinationCovered} onChange={handleChange} placeholder="Destination" className="p-2 border" />
        <input name="totalPackagePrice" value={formData.totalPackagePrice} onChange={handleChange} placeholder="Total Price" className="p-2 border" />
        <input name="country" value={formData.country} onChange={handleChange} placeholder="Country" className="p-2 border" />
        <button type="submit" className="bg-blue-600 text-white py-2 rounded">Update Package</button>
      </form>
    </div>
  );
};

export default EditPackage;
