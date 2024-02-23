/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from "react";
import useNewsQuery from "../../hooks/useNewsQuery";
import { CategoryContext } from "../../context";

const categorys = [
  "General",
  "Business",
  "Entertainment",
  "Health",
  "Science",
  "Sports",
  "Technology",
];

export default function HeaderMenu() {
  const { fatchNewsData } = useNewsQuery();
  const { categoryValue, setCategoryValue } = useContext(CategoryContext);

  const handleClick = async (cat) => {
    setCategoryValue(cat);
    await fatchNewsData(cat);
  };

  return (
    <>
      {categorys?.map((cat) => (
        <li
          key={cat}
          onClick={() => handleClick(cat)}
          className={`cursor-pointer ${
            categoryValue === cat && "text-[#00d991]"
          }`}
        >
          <a>{cat}</a>
        </li>
      ))}
    </>
  );
}
