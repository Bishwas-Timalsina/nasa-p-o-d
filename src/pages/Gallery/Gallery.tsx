import { useEffect, useState } from "react";
import useFetchContent from "../../hooks/useFetchContent";
import { Tooltip } from "antd";

const Gallery = () => {
  const { fetchData, loading, error } = useFetchContent();
  const [galleryData, setGalleryData] = useState<any>(null);
  console.log(galleryData);

  const fetchAllData = async () => {
    const endPoint = "&count=10";
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
      <div className="h-[100vh] flex justify-center items-center">
        Loading...
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-4xl font-[600] text-center">Gallery</h1>
      {galleryData ? (
        <div className="flex flex-col gap-12">
          {galleryData.map((item: any, index: number) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center gap-2 rounded-md cursor-pointer"
            >
              <h2 className="text-[24px] font-[700]">{item.title}</h2>
              <h2 className="text-center">{item?.date}</h2>
              <Tooltip
                color={"#4b5563"}
                placement="right"
                title={
                  item?.explanation
                    ? item.explanation
                    : "No explanation available"
                }
                trigger="hover"
                className="h-[200px] overflow-y-scroll"
              >
                <img
                  src={item?.hdurl}
                  alt=""
                  width={500}
                  height={400}
                  className="rounded-md"
                />
              </Tooltip>
            </div>
          ))}
        </div>
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
};

export default Gallery;
