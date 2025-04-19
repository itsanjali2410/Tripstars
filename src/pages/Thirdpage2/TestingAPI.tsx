import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import InclusionsExclusions from "./sections/InclusionsExclusions";
import PriceCard from "./sections/PriceCard";
import PackageOverview from "./sections/PackageOverview";
import Itinerary from "./sections/Itinerary";
import HelpCard from "../ThirdPage/sections/HelpCard";
import FloatingContactButton from "../Home/sections/Floating";
import TermsAndConditions from "./sections/TermsAndConditions";
import TabbedTable from "./sections/TabbedTable";
import Cta from "./sections/cta";
import Popup from "../../components/common/Popup";

interface PackageData {
    packageId: string;
    packageName: string;
    totalGuests: number;
    nights: number;
    days: number;
    theme: string;
    destinationCovered: string;
    highlights: string[];
    includes: { name: string; icon: string }[];
    totalPackagePrice: string;
    packageImage: string;
    itinerary: Record<string, string[]>[];
    inclusions: string[];
    exclusions: string[];
    overviewData: { title: string; content: string };
    country: string;
    tableData?: {
        tab1: {
            star4: string;
            star5: string;
        }[];
    };
    pricePerAdult?: string;
}

const Container = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftSection = styled.div`
  flex: 2;
`;

const RightSection = styled.div`
  flex: 1;
`;

const Packages = () => {
    const [packages, setPackages] = useState<PackageData[]>([]);
    const [isPopupVisible, setPopupVisible] = useState(false);

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/packages")
            .then((res) => setPackages(res.data))
            .catch((err) => console.error("Error fetching packages:", err));

        const timer = setTimeout(() => {
            setPopupVisible(true);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const togglePopup = () => {
        setPopupVisible(prev => !prev);
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-center mt-6 mb-4">Available Packages</h1>
            {packages.map((pkg) => {
                const transformedItinerary = pkg.itinerary.map((dayObj) => {
                    const day = Object.keys(dayObj)[0];
                    return { day, activities: dayObj[day] };
                });

                const totalPrice = parseFloat(pkg.totalPackagePrice.replace(/[^0-9.]/g, "") || "0");

                return (
                    <Container key={pkg.packageId}>
                        <LeftSection>
                            <img
                                
                                alt={pkg.packageName}
                                src={pkg.packageImage}
                                className="w-full h-64 object-cover rounded-lg mb-4"
                            />
                            <h2 className="text-2xl font-semibold">{pkg.packageName}</h2>
                            <p><strong>Country:</strong> {pkg.country}</p>
                            <p><strong>Duration:</strong> {pkg.nights} Nights / {pkg.days} Days</p>
                            <p><strong>Destinations Covered:</strong> {pkg.destinationCovered}</p>

                            <PackageOverview title="Overview" content={pkg.overviewData.content} />

                            <h3 className="text-xl font-bold mt-4 mb-2">Highlights</h3>
                            <ul className="list-disc ml-6">
                                {pkg.highlights.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>

                            <h3 className="text-xl font-bold mt-4 mb-2">Includes</h3>
                            <div className="flex flex-wrap gap-3">
                                {pkg.includes.map((inc, idx) => (
                                    <span
                                        key={idx}
                                        className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                                    >
                                        {inc.icon} {inc.name}
                                    </span>
                                ))}
                            </div>

                            <Itinerary itinerary={transformedItinerary} />

                            {pkg.tableData && pkg.tableData.tab1.length > 0 && (
                                <TabbedTable tableData={pkg.tableData} />
                            )}

                            <InclusionsExclusions
                                inclusions={pkg.inclusions}
                                exclusions={pkg.exclusions}
                            />

                            <Cta />
                            <TermsAndConditions />
                        </LeftSection>

                        <RightSection>
                            <PriceCard
                                totalPackagePrice={totalPrice}
                                nights={pkg.nights}
                                emiPrice={5000}
                                emiLink="https://example.com/emi"
                                onSubmitQuery={togglePopup}
                                
                            />
                            <HelpCard />
                        </RightSection>

                        <FloatingContactButton />
                        {/* {isPopupVisible && <Popup onClose={togglePopup} />} */}
                    </Container>
                );
            })}
        </div>
    );
};

export default Packages;
