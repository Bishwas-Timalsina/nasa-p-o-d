// import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Banner from "../../assets/Banner.jpg";
import { GALLERY, POD } from "../../config/path";

export default function Home() {
  return (
    <div className="relative h-[100vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${Banner})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
          NASA- Picture of the Day
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
          View the astronomical picture of the day released daily from the NASA.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            to={`/${GALLERY}`}
            className="text-black px-2 py-1 rounded-md border-[2px] bg-white"
          >
            View Gallery
          </Link>
          <Link
            to={`/${POD}`}
            className="text-white px-2 py-1 rounded-md border-[2px] border-white"
          >
            Picture of the Day
          </Link>
        </div>
      </div>
    </div>
  );
}
