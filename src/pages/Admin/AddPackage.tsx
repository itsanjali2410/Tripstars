import React, { useState } from 'react';
import { createPackage } from '../API/packageAPI';
import { useNavigate } from 'react-router-dom';

const AddPackage: React.FC = () => {
  const [formData, setFormData] = useState({
    packageName: '',
    destinationCovered: '',
    totalPackagePrice: '',
    country: ''
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.packageName || !formData.destinationCovered || !formData.totalPackagePrice || !formData.country) {
      alert('Please fill all the fields.');
      return;
    }
  
    try {
      await createPackage(formData);
      navigate('/admin');
    } catch (err) {
      console.error('Error adding package:', err);
    }
  };
  

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Add New Package</h2>
      <form onSubmit={handleSubmit} className="grid gap-4 max-w-md">
        <input name="packageName" value={formData.packageName} onChange={handleChange} placeholder="Package Name" className="p-2 border" />
        <input name="destinationCovered" value={formData.destinationCovered} onChange={handleChange} placeholder="Destination" className="p-2 border" />
        <input name="totalPackagePrice" value={formData.totalPackagePrice} onChange={handleChange} placeholder="Total Price" className="p-2 border" />
        <input name="country" value={formData.country} onChange={handleChange} placeholder="Country" className="p-2 border" />
        <button type="submit" className="bg-green-600 py-2 rounded">Add Package</button>
      </form>
    </div>
  );
};

export default AddPackage;
