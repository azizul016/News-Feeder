import Page from "./Page";
import { CategoryProvider, NewsProvider } from "./provider";
export default function App() {
  return (
    <CategoryProvider>
      <NewsProvider>
        <Page />
      </NewsProvider>
    </CategoryProvider>
  );
}
