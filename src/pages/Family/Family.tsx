import React from 'react';
import FamilyHero from './sections/FamilyHero';
import TrendingOffers from '../Tripdetails/sections/TrendingOffers';
import { Bali, Vietnam, Baku, Thailand, Europe, Turkey } from '../../components/data';
import TrustindexWidget from '../Home/sections/TrustindexWidget';
import WhyChooseUs from './sections/WhyChooseUs';
import FamilyPackages from './sections/FamilyPackages'
const FamilyPage = () => {
  // Pick offers manually
  const familyTrendingOffers = [
    ...Bali.slice(1, 2),
    ...Vietnam.slice(0, 1),
    ...Baku.slice(0, 1),
    ...Thailand.slice(0,1),
    ...Baku.slice(0,1),
    ...Turkey.slice(0,1),
  ];

  return (
    <div className="flex flex-col gap-10">
       
      {/* Family Hero Section */}
      <FamilyHero />
      <FamilyPackages/>
      {/* Family Packages Trending Offers */}
      <TrendingOffers 
        title="Trending Family Offers" 
        cards={familyTrendingOffers} 
      />

      {/* Trustindex Widget */}
      <TrustindexWidget />

      {/* Why Choose Us Section (at last) */}
      <WhyChooseUs />
    </div>
  );
};

export default FamilyPage;
