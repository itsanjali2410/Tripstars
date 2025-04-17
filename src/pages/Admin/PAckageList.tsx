import { useEffect, useState } from "react";
import axios from "axios";

interface Package {
  _id: string;
  packageName: string;
  destinationCovered: string;
  totalPackagePrice: string;
}

export default function PackageList() {
  const [packages, setPackages] = useState<Package[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/packages")
      .then((res) => {
        console.log("Fetched packages:", res.data);
        setPackages(res.data);
      })
      
      .catch((err) => {
        console.error("Error fetching packages:", err);
      });
  }, []);
  
  return (
    <div>
      {packages.length === 0 ? (
        <p>No packages found or still loading...</p>
      ) : (
        packages.map((pkg) => (
          <div key={pkg._id}>
            <h2>{pkg.packageName}</h2>
            <p>{pkg.destinationCovered}</p>
          </div>
        ))
      )}
    </div>
  );
  
}
