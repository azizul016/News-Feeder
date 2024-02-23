/* eslint-disable no-unused-vars */
import { useState } from "react";
import { categories, sportTechnology, tremsAndCondition } from "./utils";
export default function FooterMenu() {
  const [category, setCategory] = useState(categories);
  const [sportTechnologys, setSportTechnologys] = useState(sportTechnology);
  const [tremsAndConditions, setTremsAndConditions] =
    useState(tremsAndCondition);
  return (
    <>
      <ul role="list" className="space-y-4">
        {category?.map((menu) => (
          <li key={menu}>
            <a href="#" className="text-sm font-semibold capitalize">
              {menu}
            </a>
          </li>
        ))}
      </ul>
      <ul role="list" className="space-y-4">
        {sportTechnologys?.map((menu) => (
          <li key={menu}>
            <a href="#" className="text-sm capitalize">
              {menu}
            </a>
          </li>
        ))}
      </ul>
      <ul role="list" className="space-y-4">
        {tremsAndConditions?.map((menu) => (
          <li key={menu}>
            <a href="#" className="text-sm capitalize">
              {menu}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
