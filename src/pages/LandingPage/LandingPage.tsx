import React from "react";
import HeroSection from "./Sections/FirstHero";
import TrendingOffers from "../Tripdetails/sections/TrendingOffers";
import { Australia } from "../../components/data"; // <- Australia is an array of cards
import GroupOfferSection from "./Sections/GroupTravel";
import PartnersSection from "../Home/sections/PartnersSection";
import ExploreNew from "./Sections/ExploreNew";
import StaticReviews from "../Tripdetails/sections/StaticReviews";
import AustraliaFAQ from "./Sections/AustraliaFAQ";
const LandingPage = () => {
  const familyTrendingOffers = Australia;

  return (
    <>
      <HeroSection />
      <TrendingOffers
        title=""
        cards={familyTrendingOffers}
      />
      <GroupOfferSection/>
      <StaticReviews/>
      <TrendingOffers
        title=""
        cards={familyTrendingOffers}
      />
      <PartnersSection/>
      <ExploreNew/>
      <AustraliaFAQ/>
    </>
  );
};

export default LandingPage;
