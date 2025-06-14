
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/Home/Homepage";
import Themes from "./pages/Themes/Themes";
// import Thirdpage from "./pages/ThirdPage/ThirdPage";
import Thirdpage2 from "./pages/Thirdpage2/ThirdPage"
import PrivacyPolicyPage from "./pages/PrivacyPolicy/PrivacyPolicyPage";
import Tripdetailspage from "./pages/Tripdetails/Tripdetailspage";
import NotFoundPage from "./pages/NotFoundPage";
import Faq from "./pages/Faq/Faq";
import PaymentPolicies from "./pages/Paymentpolicy/PaymentPolicies";
import VideoScroller from "./pages/Video/VideoScroller";
import payments from "./pages/Paymentpolicy/PaymentPolicies"
import Aboutus from "./pages/About/Aboutus";
import LandingPage from "./pages/LandingPage/LandingPage";
// Components
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Contact from "./pages/Faq/Contact";
import Thankyou from "./components/common/thankyou";
import FlightForm from "./components/common/FlightForm";
// Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from "./ScrollToTop";
import Dashboard from "./pages/Admin/Dashboard";
import EditPackage from "./pages/Admin/EditPackage";
import AddPackage from "./pages/Admin/AddPackage";
import PackageList from "./pages/Admin/PAckageList";
import { Package } from "lucide-react";
import TestingAPI from "./pages/Thirdpage2/TestingAPI";
import Family from "./pages/Family/Family";
function App() {
  const location = useLocation();
  const isVideoPage = location.pathname === "/video";

  return (
    <>
      <div className="App">
        {!isVideoPage && <Navbar />}
        <ScrollToTop />
        <Routes>
          <Route path="/FlightForm" element={<FlightForm  />}/>
          <Route path="/landingpage" element={<LandingPage/>}/>
        <Route path="/test" element={<TestingAPI />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/add" element={<AddPackage />} />
          <Route path="/admin/edit/:id" element={<EditPackage />} />
          <Route path="/admin/Package" element={<PackageList />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/faqs" element={<Faq />} />
          <Route path="/:location" element={<Tripdetailspage />} />
          {/* <Route path="/tripdetails" element={<Thirdpage />} /> */}
          <Route path="/:destination/:packageName" element={<Thirdpage2 />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/terms-conditions" element={<PrivacyPolicyPage title="Terms & Conditions" />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage title="Privacy Policy" />} />
          <Route path="/cancellation-policy" element={<PrivacyPolicyPage title="Cancellation Policy" />} />
          <Route path="/payments" element={<PaymentPolicies />} />
          <Route path="/video" element={<VideoScroller />} />
          <Route path="/themes/" element={<Themes />} />
          <Route path="/contact/" element={<Contact />} />
          <Route path="/thankyou/" element={<Thankyou />} />
          <Route path="/aboutus/" element={<Aboutus />} />
          <Route path="/family/" element={<Family />} />
          <Route path="/family/:location" element={<Family />} />
        </Routes>
        {!isVideoPage && <Footer />}
      </div>
    </>
  );
}

export default App;
