import { useEffect } from "react";
import Gallery from "./components/Gallery";
import SearchForm from "./components/SearchForm";
import ThemeToggle from "./components/ThemeToggle";
import { useGlobalContext } from "./utils/context";

const App = () => {
  const {checkUserPreferences} = useGlobalContext();

  useEffect(() => {
    checkUserPreferences();
  }, [])

  return (
    <main>
      <ThemeToggle />
      <SearchForm />
      <Gallery />
    </main>
  );
};
export default App;
