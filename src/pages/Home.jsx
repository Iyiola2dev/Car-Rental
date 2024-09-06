import Hero from "../components/Hero";
import BrandSection from "../components/BrandSection";
import RentalSection from "../components/RentalSection";
import LuxuryRide from "../components/LuxuryRide";
import AboutCars from "../components/AboutCars";

const Home = () => {
  return (
    <div>
      <Hero />
      <BrandSection />
      <RentalSection />
      <LuxuryRide/>
      <AboutCars/>
    </div>
  );
};

export default Home;
