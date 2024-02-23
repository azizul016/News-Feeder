/* eslint-disable react/prop-types */
import { useState } from "react";
import { CategoryContext } from "../context";

export default function CategoryProvider({ children }) {
  const [categoryValue, setCategoryValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  return (
    <CategoryContext.Provider
      value={{ categoryValue, setCategoryValue, searchValue, setSearchValue }}
    >
      {children}
    </CategoryContext.Provider>
  );
}
