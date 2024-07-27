import Delhi from "../../../public/assets/delhi.jpg";
import Berlin from "../../../public/assets/berlin.jpg";
import Paris from "../../../public/assets/paris.jpg";
import Dubai from "../../../public/assets/dubai.jpg";
import Card from "./Card";

const PopularLocations = () => {
  const data = [
    {
      image: Delhi,
      city: "Delhi",
      numOfPlace: 73,
    },
    {
      image: Berlin,
      city: "Berlin",
      numOfPlace: 34,
    },
    {
      image: Paris,
      city: "Paris",
      numOfPlace: 43,
    },
    {
      image: Dubai,
      city: "Dubai",
      numOfPlace: 36,
    },
  ];
  return (
    <div className="h-full w-full my-36">
      <div className="h-full w-5/6 mx-auto flex flex-col justify-start">
        <h3 className="text-[20px] bg-blue-500 text-white rounded-full p-4 w-max">
          Explore Top
        </h3>
        <h3 className="text-4xl text-slate-800 font-bold mt-6 mb-12">
          Popular Locations
        </h3>
        <div className="flex flex-wrap items-center gap-6">
          {data?.map((place, idx) => (
            <Card key={idx} place={place} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularLocations;
