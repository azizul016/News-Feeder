/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { defaultLoadingData, defaultNewsData } from "./utils";
import { CategoryContext } from "../context";

const useNewsQuery = () => {
  const { categoryValue, searchValue, setSearchValue } =
    useContext(CategoryContext);
  const [newsData, setNewsData] = useState(defaultNewsData);
  const [loading, setLoading] = useState(defaultLoadingData);
  const [error, setError] = useState(null);
  useEffect(() => {
    setSearchValue("");
    fatchNewsData(categoryValue);
  }, [categoryValue]);

  const fatchNewsData = async (category) => {
    try {
      setLoading({
        ...loading,
        status: true,
        message: "Fetching news...",
      });

      let query = import.meta.env.VITE_BASE_URL;
      if (category) query += `?category=${category?.toLowerCase()}`;
      // const res = await fetch(
      //   `http://localhost:8000/v2/top-headlines?category=general`
      // );
      const res = await fetch(query);
      if (!res.ok) {
        const errorMessage = `Fetching News data failed ${res.statue}`;
        throw new Error(errorMessage);
      }
      const data = await res.json();
      const updateNewsData = data?.articles?.map((news) => ({
        author: news?.author,
        content: news?.content,
        publishedAt: news?.publishedAt,
        title: news?.title,
        imageUrl: news?.urlToImage,
        source: news?.source,
      }));
      setNewsData(updateNewsData);
    } catch (error) {
      setError(error);
    } finally {
      setLoading({
        ...loading,
        state: false,
        message: "",
      });
    }
  };

  useEffect(() => {
    if (searchValue) {
      fetchSearchData(searchValue);
    }
  }, [searchValue]);

  const fetchSearchData = async (searchValue) => {
    try {
      setLoading({
        ...loading,
        status: true,
        message: "Searching news...",
      });

      const res = await fetch(
        import.meta.env.VITE_SEARCH_URL + `q=${searchValue}`
      );
      if (!res.ok) {
        const errorMessage = `Fetching News data failed ${res.statue}`;
        throw new Error(errorMessage);
      }
      const data = await res.json();
      const updateNewsData = data?.result?.map((news) => ({
        author: news?.author,
        content: news?.content,
        publishedAt: news?.publishedAt,
        title: news?.title,
        imageUrl: news?.urlToImage,
        source: news?.source,
      }));
      setNewsData(updateNewsData);
    } catch (error) {
      setError(error);
    } finally {
      setLoading({
        ...loading,
        state: false,
        message: "",
      });
    }
  };

  return {
    newsData,
    setNewsData,
    error,
    loading,
    setLoading,
    fatchNewsData,
    fetchSearchData,
  };
};

export default useNewsQuery;
