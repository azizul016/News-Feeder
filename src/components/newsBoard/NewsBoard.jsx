import NewsItem from "./NewsItem";
import { NewsContext } from "../../context";
import { useContext } from "react";
export default function NewsBoard() {
  const { newsData } = useContext(NewsContext);

  //finding image index for data divided
  const findingImageIndex = newsData?.findIndex(
    (imgIndex) => imgIndex?.imageUrl
  );

  //left side & right side data divided
  let leftSideData = newsData.slice(findingImageIndex, newsData?.length / 2);
  let rightSideData = newsData.slice(newsData?.length / 2, newsData?.length);

  // console.log(leftSideData, rightSideData, "newsboard");

  return (
    <main className="my-10 lg:my-14">
      {newsData?.length > 0 ? (
        <div className="container mx-auto grid grid-cols-12 gap-8">
          <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
            {leftSideData?.length > 0 &&
              leftSideData?.map((item, index) => (
                <NewsItem
                  key={index}
                  {...item}
                  dir="left"
                  className={
                    index === 0
                      ? "col-span-12 grid grid-cols-12 gap-4"
                      : "col-span-12 md:col-span-6 lg:col-span-4"
                  }
                />
              ))}
          </div>
          <div className="col-span-12 self-start xl:col-span-4">
            <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
              {rightSideData?.length > 0 &&
                rightSideData?.map((item, index) => (
                  <NewsItem
                    key={index}
                    {...item}
                    className="col-span-12 mb-6 md:col-span-8 "
                  />
                ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-3xl text-red-600 font-bold text-center">
          No News Found With This Query!
        </div>
      )}
    </main>
  );
}
