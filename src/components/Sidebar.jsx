import Projects from "./Projects";
import Filter from "./Filter";
import { useMediaQuery } from "../hooks/useMediaQuery";

const Sidebar = () => {
  const mediaQuery = useMediaQuery();

  return (
    <aside className="lg:col-span-1 space-y-6">
      <Projects />
      {mediaQuery === "lg" && <Filter />}
    </aside>
  );
};

export default Sidebar;
