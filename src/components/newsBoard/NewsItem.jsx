/* eslint-disable react/prop-types */

import { getFormattedDateByToLocalString } from "../../utils/date-utils";
const NewsItem = (props) => {
  const { className, dir, title, content, imageUrl, publishedAt } = props;
  return (
    <div className={className}>
      {dir === "left" ? (
        <>
          <div className="col-span-12 lg:col-span-4">
            <a href="#">
              <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">
                {title}
              </h3>
            </a>
            <p className="text-base text-[#5C5955]">{content}</p>
            <p className="mt-5 text-base text-[#5C5955]">
              {" "}
              {getFormattedDateByToLocalString(publishedAt)}
            </p>
          </div>
          <div className="col-span-12 lg:col-span-8">
            {imageUrl !== null && (
              <img className="w-full" src={imageUrl} alt="thumb" />
            )}
            {imageUrl !== null && (
              <p className="mt-5 text-base text-[#5C5955]">
                Illustration: Karolis Strautniekas
              </p>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="col-span-12 mb-6 md:col-span-8">
            {imageUrl !== null && (
              <img className="w-full" src={imageUrl} alt="thumb" />
            )}

            <div className="col-span-12 mt-6 md:col-span-4">
              <a href="#">
                <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
                  {title}
                </h3>
              </a>
              <p className="text-base text-[#292219]">{content}</p>
              <p className="mt-5 text-base text-[#94908C]">
                {getFormattedDateByToLocalString(publishedAt)}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NewsItem;
