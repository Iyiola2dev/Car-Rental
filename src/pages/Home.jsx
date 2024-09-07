import Hero from "../components/Hero";
import BrandSection from "../components/BrandSection";
import RentalSection from "../components/RentalSection";
import LuxuryRide from "../components/LuxuryRide";
import AboutCars from "../components/AboutCars";
import Review from "../components/Review";
import DownloadSection from "../components/DownloadSection";
import Footer from "../components/footer";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <BrandSection />
      <RentalSection />
      <LuxuryRide/>
      <AboutCars/>
      <Review/>
      <DownloadSection/>
      <Footer/>
    </div>
  );
};

export default Home;
