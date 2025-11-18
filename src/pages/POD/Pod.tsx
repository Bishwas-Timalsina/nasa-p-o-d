import { PhotoProvider, PhotoView } from "react-photo-view";
import useFetchContent from "../../hooks/useFetchContent";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Pod = () => {
  const { fetchData, loading, error } = useFetchContent();
  const [image, setImage] = useState<any>();

  const fetchTodayData = async () => {
    const endPoint = "";
    const data = await fetchData(endPoint);
    if (data) {
      setImage(data);
    }
  };

  useEffect(() => {
    fetchTodayData();
  }, []);

  if (loading) {
    return (
      <div className="h-[100vh] flex justify-center items-center">
        Content is Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-[100vh] flex justify-center items-center">
        Error...{error}
      </div>
    );
  }
  console.log(image);
  return (
    <>
      <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
        <div className="flex flex-col justify-center items-center gap-1 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Picture of the Day
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-8 leading-tight">
            NASA - Picture of the Day
          </h2>
        </div>
        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-3xl px-2 flex justify-center items-center flex-col gap-2">
          <PhotoProvider>
            <PhotoView src={image?.url}>
              <img
                src={image?.url}
                alt="NASA Picture of the Day"
                className="rounded-md cursor-pointer w-full h-auto max-h-[75vh] object-cover"
              />
            </PhotoView>
          </PhotoProvider>
          <p className="text-xs text-center text-white font-semibold mt-2">
            {image?.copyright ? `Copyright: ${image?.copyright}` : ""}
          </p>
          <Link
            to={image?.hdurl}
            target="_blank"
            className="text-white px-4 py-1 rounded-md border-2 border-white text-sm sm:text-base md:text-lg font-semibold mb-2"
          >
            View in HD
          </Link>
        </div>
      </div>
    </>
  );
};

export default Pod;
