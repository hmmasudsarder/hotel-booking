import BestHotels from "@/components/best-hotels/BestHotels";
import Hero from "@/components/hero/Hero";
import PopularLocations from "@/components/popular-locations/PopularLocations";

const page = () => {
  return (
    <div>
      <Hero />
      <PopularLocations/>
      <Hero/>
      <BestHotels/>
    </div>
  );
};

export default page;