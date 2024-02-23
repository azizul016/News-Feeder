import React, { useEffect, useState } from "react";

export default function Demo() {
  const [data, setData] = useState([]);

  async function fetchData() {
    const res = await fetch("http://localhost:8000/v2/top-headlines");
    const data = await res.json();

    setData(data.articles);
  }

  const removeDuplecare = (totalData) => {
    // console.log(totalData, "total");
    // let uni = [];
    // totalData.forEach((ele) => {
    //   console.log(ele, "ele");
    //   if (!uni.includes(ele.source.name)) {
    //     uni.push(ele);
    //   }
    // });
    // return uni;
  };
  console.log(data, "name");
  console.log(removeDuplecare(data));

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ol>
      {[...new Set(data)]?.map((d) => (
        <li key={Math.random()}>{d.source.name}</li>
      ))}
    </ol>
  );
}
