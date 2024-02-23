import { useContext } from "react";
import { NewsContext } from "./context";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import NewsBoard from "./components/newsBoard/NewsBoard";
const Page = () => {
  const { loading } = useContext(NewsContext);
  return (
    <>
      {loading?.status ? (
        <div className="flex bg-gray-200 rounded-md w-96 p-8 mt-14 mx-auto">
          <p className="text-center text-3xl text-black">{loading.message}</p>
        </div>
      ) : (
        <>
          <Header />
          <NewsBoard />
          <Footer />
        </>
      )}
    </>
  );
};

export default Page;
