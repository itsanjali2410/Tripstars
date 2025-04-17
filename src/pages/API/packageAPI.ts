import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/packages';
export const getAllPackages = async () => {
    const res = await fetch("http://localhost:5000/api/packages");
    return await res.json();
  };
  
export const getPackages = () => axios.get(BASE_URL);
export const getPackageById = (id: string) => axios.get(`${BASE_URL}/${id}`);
// src/API/packageAPI.ts
export const createPackage = async (packageData: any) => {
  try {
    const response = await axios.post('http://localhost:5000/api/packages', packageData);
    return response.data;
  } catch (error) {
    console.error('Error creating package:', error);
    throw error; // Rethrow the error to be handled in the component
  }
};
  
export const updatePackage = (id: string, data: any) => axios.put(`${BASE_URL}/${id}`, data);
export const deletePackage = (id: string) => axios.delete(`${BASE_URL}/${id}`);
