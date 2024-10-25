import { useEffect, useState } from "react";
import useFetchContent from "../../hooks/useFetchContent";
import { Tooltip } from "antd";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";

const Gallery = () => {
  const { fetchData, loading, error } = useFetchContent();
  const [galleryData, setGalleryData] = useState<any>(null);

  const fetchAllData = async () => {
    const endPoint = "&count=20";
    const data = await fetchData(endPoint);
    if (data) {
      setGalleryData(data);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        Loading...
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-col gap-8 px-4 py-4">
      <h1 className="text-3xl sm:text-4xl font-semibold text-center">
        Gallery
      </h1>
      <PhotoProvider>
        {galleryData ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {galleryData.map((item: any, index: number) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center gap-2 rounded-md cursor-pointer"
              >
                <div className="flex flex-col items-center text-center">
                  <h2 className="text-lg sm:text-xl font-bold">{item.title}</h2>
                  <h3 className="text-sm sm:text-base">{item?.date}</h3>
                </div>
                <PhotoView src={item?.url}>
                  <img
                    src={item?.url}
                    alt={item?.title}
                    className="rounded-md w-full h-auto object-cover max-h-[400px] sm:max-h-[250px] md:max-h-[300px] lg:max-h-[400px]"
                  />
                </PhotoView>
                <Link
                  to={item?.hdurl}
                  target="_blank"
                  className="text-white px-4 py-2 rounded-md border-2 border-white text-sm sm:text-base md:text-lg font-semibold"
                >
                  View in HD
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div>No data available</div>
        )}
      </PhotoProvider>
    </div>
  );
};

export default Gallery;
