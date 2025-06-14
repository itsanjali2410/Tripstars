// import Loader from "../../components/common/Loader";
import BudgetFriendly from "./sections/BudgetFriendly";
import ExploreDestinations from "./sections/ExploreDestinations";
import ExploreEurope from "./sections/ExploreEurope";
import HeroSection from "./sections/HeroSection";
import MediaMentions from "./sections/MediaMentions";
import PartnersSection from "./sections/PartnersSection";
import PopularDestinations from "./sections/PopularDestinations";
import TrendingOffers from "./sections/TrendingOffers";
import TrendingOffers22 from  "../../pages/Tripdetails/sections/TrendingOffers";
import VideoTestimonials from "./sections/VideoTestimonials";
import {similar, similar2} from "../../components/data";
import WhyTripstars from "./sections/WhyTripstars";
import NewComponent from "./sections/NewComponent";
import Popup from "../../components/common/StaticForm";
import ImageSlider from "./sections/ImageSlider";
import ResponsiveBanner from "./sections/ResponsiveBanner";
import CardSection from "./sections/CardSection";
import ExploreIndia from "./sections/ExploreIndia";
import SwipeableSlider from "./sections/SwipeableSlider";
import Banner from "./sections/Banner";
import BenefitsSection from "./sections/BenefitsSection";
import BudgetSection from "./sections/BudgetSection";
import ContactForm from "./sections/ContactForm";
import VideoThumbnail from "./sections/VideoThumbnail";
import BendingCarosual from "./sections/BendingCarosual";
import TrendingOffers2 from "./sections/TrandingOffers2";
import TravelSection from "./sections/TravelSection";
import Reviews from "./sections/reviews";
import TrustindexWidget from "./sections/TrustindexWidget";
import StaticForm from "../../components/common/StaticForm";
import FloatingWhatsAppButton from "./sections/Floating";
import TrendingOffersHome2 from "./sections/TrendingOffersHome2"
import Cta from "../../pages/Thirdpage2/sections/cta"
import Stars from "../../components/common/Stars";
import RatingBar from "../../services/Home/sections/RatingBar";
export default function HomePage() {
  return (
    <>
      <HeroSection />
      
      <PopularDestinations showPopup={false} />
      <SwipeableSlider />

      <TrendingOffersHome2 title="Trending Offers" cards={similar2} />
      <ExploreDestinations />
      <VideoTestimonials/>
      {/* <Cta              /> */}
      <VideoThumbnail />
      <WhyTripstars />
      
      {/* <ExploreEurope /> */}
      <TrendingOffersHome2 title="Explore India" cards={similar} />
      {/* <Reviews/> */}
      <PartnersSection />
      {/* <BudgetSection />
      <BenefitsSection /> */}
      <StaticForm />
      <TrustindexWidget/>
      <BendingCarosual />
      <FloatingWhatsAppButton/>
    </>
  );
}
