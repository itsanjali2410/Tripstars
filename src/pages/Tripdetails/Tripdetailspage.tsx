// src/components/Tripdetailspage.tsx
import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import DynamicSlider from "./sections/DynamicSlider";
import TrendingOffers from "./sections/TrendingOffers";
import CherryBlossomsSection from "../Tripdetails/sections/CherryBlossomsSection";
import Ban2 from "./sections/Ban2";
import { destinationsData } from "./data";
import CardSection from "./sections/CardSection";
import FAQ from "./sections/FAQ";
import ReviewSlider from "./sections/ReviewSlider";
import VideoTestimonials from "../Home/sections/VideoTestimonials";
import VideoThumbnail from "../Home/sections/VideoThumbnail";
import WhyTripstars from "../Home/sections/WhyTripstars";
import ChooseTravelStyle from "./sections/ChooseTravelStyle";
import TravelStyleCarousel from "./sections/TravelStyleCarousel";
import ExploreDestinations from "../Home/sections/ExploreDestinations";
import TrendingOffers2 from "../../components/TrendingOffers2";
import {
  Bali, Kashmir, Kerala, Andaman1, similar, Vietnam, Thailand,
  Europe, Dubai, Australia, Baku, Hongkong, North, Maldives,
  Mauritius, Singapore, Turkey, Ladakh, Goa, Himachal
} from "../../components/data";
import DestinationSlider from "./sections/DestinationSlider";
import Choose_your from "./sections/Choose_your";
import PopularDestinations2 from "./sections/DestinationProps";
import StaticReviews from "./sections/StaticReviews";
import baliImg13 from "../../assets/Tripdetails/bali/ThingsToDoInBali/bali_banner.png";
import baliImg14 from "../../assets/Tripdetails/bali/ThingsToDoInBali/mobile-banner-bali.jpg";
import TrustindexWidget from "../Home/sections/TrustindexWidget";
import Cta from "../Thirdpage2/sections/cta";
import TripInquiryForm from "../../components/common/Inquiry";
import FloatingContactButton from "../Home/sections/Floating";
import Button from "../../components/common/Button";

type LocationKey = keyof typeof destinationsData;

export default function Tripdetailspage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const formRef = useRef<HTMLDivElement>(null); // Ref for scrolling to the form

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const { location } = useParams<{ location: string }>();
  const validLocation = location as LocationKey;
  const locationData = destinationsData[validLocation];

  if (!locationData) {
    return <p>No data available for this location.</p>;
  }

  const { thingsToDo, banner } = locationData;

  const bannerImage =
    location === "bali" ? (isMobile ? baliImg14 : baliImg13) : banner.image;

  const trendingOffersMapping: Record<string, any[]> = {
    turkey: Turkey,
    singapore: Singapore,
    mauritius: Mauritius,
    maldives: Maldives,
    hongkong: Hongkong,
    baku: Baku,
    bali: Bali,
    vietnam: Vietnam,
    dubai: Dubai,
    europe: Europe,
    thailand: Thailand,
    australia: Australia,
    ladakh: Ladakh,
    north: North,
    kashmir: Kashmir,
    kerala: Kerala,
    andaman: Andaman1,
    goa: Goa,
    himachal: Himachal,
  };

  const trendingOffers = trendingOffersMapping[location as keyof typeof trendingOffersMapping];

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Banner Section */}
      <Ban2 image={bannerImage} destination={banner.title} onEnquireClick={scrollToForm} />

      {/* Optional Enquire Now Button */}
      {/* <div style={{ textAlign: "center", margin: "30px 0" }}>
        <Button onEnquireClick={scrollToForm} />
      </div> */}

      {/* Things To Do Section */}

      {/* Trending Offers */}
      {trendingOffers && (
        <TrendingOffers title={`${location} Packages`} cards={trendingOffers} />
      )}

      <PopularDestinations2
        title="Things to do in"
        highlightWord={banner.title}
        thingsToDo={thingsToDo}
      />

      {/* Inquiry Form */}
      <div ref={formRef} style={{ display: "flex", justifyContent: "center", padding: "40px 20px" }}>
        <TripInquiryForm onClose={() => { }} />
      </div>

      {/* Additional Sections */}
      <VideoTestimonials />
      <VideoThumbnail />
      <WhyTripstars />
      <Choose_your />
      <TrustindexWidget />
      <FloatingContactButton />
      <Cta />
    </>
  );
}
