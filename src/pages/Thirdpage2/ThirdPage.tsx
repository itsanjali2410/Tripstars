import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Finaldata from "./sections/finaldata2";
import PriceCard from "./sections/PriceCard";
import PackageCard from "./sections/PackageCard";
import HelpCard from "./sections/HelpCard";
import InclusionsExclusions from "./sections/InclusionsExclusions";
import TermsAndConditions from "./sections/TermsAndConditions";
import Itinerary from "./sections/Itinerary";
import TabbedTable from "./sections/TabbedTable";
import PackageOverview from "./sections/PackageOverview";
import Tourdetails from "./sections/Tourdetails";
import TravelInclude from "./sections/TravelInclude";
import FloatingContactButton from "../Home/sections/Floating";
import WhyTripstarsholidays from "./sections/WhyTripstarsholidays";
import { similar, similar2 } from "../../components/data";
import TourCard from "./sections/Tourdetails";
import Cta from "./sections/cta";
import Popup from "../../components/common/Popup"; // Import the Popup component
import TripInquiryForm from "../../components/common/Inquiry";
const Container = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftSection = styled.div`
  width: 70%;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const RightSection = styled.div`
  width: 30%;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
    position: static;
    height: auto;
  }
`;

const PackageName = styled.span`
  font-size: 19px;
  font-weight: 700;
  color: #333;
`;

const PackageImage = styled.img`
  width: 100%;
  border-radius: 10px;
  height: 400px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 250px;
  }

  @media (max-width: 480px) {
    height: 210px;
  }
`;
const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px; /* Ensures spacing from edges on small screens */
  overflow-y: auto; /* Allows scrolling if popup content overflows */
`;

const PopupContent = styled.div`
  background: #fff;
  border-radius: 12px;
  width: 100%;
  max-width: 500px;
  max-height: 90vh; /* Keeps it within screen height */
  overflow-y: auto; /* Makes form scrollable inside */
  position: relative;
  padding: 20px;
  box-sizing: border-box;
`;


const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 14px;
  font-size: 1.5rem;
  background: none;
  border: none;
  color: #000;
  z-index: 10001;
  cursor: pointer;
  padding: 0;
  line-height: 1;
`;

const normalizeString = (str: string): string =>
  str.toLowerCase().trim().replace(/\s+/g, "-");

export default function ThirdPage() {
  const params = useParams();
  const destination = params.destination;
  const packageName = params.packageName;

  if (!destination || !packageName) {
    return (
      <Container>
        <LeftSection>
          <h3>Invalid URL</h3>
          <p>Destination or package name is missing in the URL.</p>
        </LeftSection>
      </Container>
    );
  }

  if (!(destination in Finaldata)) {
    return (
      <Container>
        <LeftSection>
          <h1>Invalid Destination</h1>
          <p>The selected destination does not exist.</p>
        </LeftSection>
      </Container>
    );
  }

  const [isPopupVisible, setPopupVisible] = useState(false);

  // Show popup on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setPopupVisible(true);
    }, 10000); // 10000ms = 10 seconds

    return () => clearTimeout(timer); // Clean up on unmount
  }, []);

useEffect(() => {
  if (isPopupVisible) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [isPopupVisible]);

  // Toggle handler (if you still need to manually control popup later)
  const togglePopup = () => {
    setPopupVisible((prev) => !prev);
  };


  const destinationData = Finaldata[destination] || {};
  const normalizedPackageName = normalizeString(decodeURIComponent(packageName));

  const packageData = Object.values(destinationData).find(
    (pkg) => normalizeString(pkg.packageName) === normalizedPackageName
  );

  if (!packageData) {
    return (
      <Container>
        <LeftSection>
          <h1>Package Not Found</h1>
          <p>The requested package does not exist. Please check the URL.</p>
        </LeftSection>
      </Container>
    );
  }

  const totalPackagePrice = parseFloat(packageData?.totalPackagePrice?.replace(/[^0-9.]/g, "") || "0");

  return (
    <Container>
      <LeftSection>
        <h1>
          <PackageName>{packageData.packageName}</PackageName>
        </h1>
        <PackageImage src={packageData.packageImage} alt={packageData.packageName} />

        {/* Package Overview */}
        {packageData.overviewData && (
          <PackageOverview
            title={packageData.overviewData.title}
            content={packageData.overviewData.content}
          />
        )}

        {/* Tour Details */}
        {packageData && (
          <TourCard
            nights={packageData.nights}
            days={packageData.days}
            destinationCovered={packageData.destinationCovered}
            theme={""}
            totalPackagePrice={""} country={""} />
        )}

        {/* Tour Includes & Highlights */}
        {packageData.includes && packageData.highlights && (
          <TravelInclude
            includes={packageData.includes}
            highlights={Array.isArray(packageData.highlights) ? packageData.highlights : [packageData.highlights]}
          />
        )}

        {/* Price Per Adult */}
        {packageData.pricePerAdult && (
          <p><strong>Price Per Adult:</strong> {packageData.pricePerAdult}</p>
        )}

        {/* Itinerary Section */}
        {packageData.itinerary && (
          <>
            <Itinerary
              itinerary={packageData.itinerary.map((item) => {
                const dayKey = Object.keys(item)[0];
                return { day: dayKey, activities: item[dayKey] };
              })}
            />
            {/* Show inquiry form right after itinerary if visible */}
            
          </>
        )}


        {/* Tabbed Table Data */}
        {packageData.tableData && <TabbedTable tableData={packageData.tableData} />}

        <InclusionsExclusions
          inclusions={packageData.inclusions}
          exclusions={packageData.exclusions}
        />
        <Cta

        />
        <TermsAndConditions />
      </LeftSection>

      <RightSection>
        <PriceCard
          emiPrice={0}
          emiLink={""}
          onSubmitQuery={togglePopup} // Triggers the form in LeftSection
          totalPackagePrice={totalPackagePrice}
          nights={packageData.nights}
          {...(packageData.pricePerAdult && {
            pricePerAdult: parseFloat(packageData.pricePerAdult.replace(/[^0-9.]/g, "") || "0")
          })}
        />
        <HelpCard />
      </RightSection>


      {/* Floating Contact Button */}
      <FloatingContactButton />

      {/* Conditionally Render Popup */}
      {isPopupVisible && (
  <PopupOverlay>
    <PopupContent>
      <CloseButton onClick={togglePopup}>×</CloseButton>
      <TripInquiryForm onClose={togglePopup} />
    </PopupContent>
  </PopupOverlay>
)}


    </Container>
  );
}
