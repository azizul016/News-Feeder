/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useState } from "react";
import searchIcon from "./../../assets/icons/search.svg";
import closeIcon from "./../../assets/icons/close.svg";
import useDebounce from "../../hooks/useDebounce";
import { CategoryContext } from "../../context";
import useNewsQuery from "../../hooks/useNewsQuery";

export default function HeaderSearch() {
  const [show, setShow] = useState(false);
  const { fetchSearchData } = useNewsQuery();
  const { setSearchValue } = useContext(CategoryContext);
  //for de bounce search
  const doSearch = useDebounce(async (term) => {
    if (term) {
      await fetchSearchData(term);
      setSearchValue(term);
    }
  }, 500);
  //for de bounce search
  const handleChange = (e) => {
    const value = e.target.value;
    doSearch(value);
  };

  const handleToggle = () => {
    setSearchValue("");
    setShow((item) => !item);
  };
  console.log(show, "show");
  return (
    <form>
      <div className="flex items-center space-x-3 lg:space-x-8">
        <div className={`ml-auto  lg:block ${show ? "visible" : "invisible"}`}>
          <input
            type="search"
            placeholder="Search"
            className="border-none rounded-3xl pl-4 pr-4 py-2 focus:outline-none bg-gray-200 text-sm text-gray-700 shadow-sm"
            // value={searchValue}
            onChange={handleChange}
          />
        </div>

        <img
          src={show ? closeIcon : searchIcon}
          onClick={handleToggle}
          alt="search icon"
        />
      </div>
    </form>
  );
}
