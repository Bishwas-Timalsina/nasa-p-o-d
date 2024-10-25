import { Link } from "react-router-dom";
import Banner from "../../assets/Banner.jpg";
import { GALLERY, POD } from "../../config/path";

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${Banner})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
          NASA - Picture of the Day
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          View the astronomical picture of the day released daily from NASA.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            to={`/${GALLERY}`}
            className="text-black px-4 py-2 rounded-md border-2 bg-white text-sm sm:text-base md:text-lg font-semibold"
          >
            View Gallery
          </Link>
          <Link
            to={`/${POD}`}
            className="text-white px-4 py-2 rounded-md border-2 border-white text-sm sm:text-base md:text-lg font-semibold"
          >
            Picture of the Day
          </Link>
        </div>
      </div>
    </div>
  );
}
