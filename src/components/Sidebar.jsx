import Projects from "./Projects";
import Filter from "./Filter";
import { useScreenSize } from "../hooks/useScreenSize";

const Sidebar = () => {
  const screenSize = useScreenSize();

  return (
    <aside className="lg:col-span-1 space-y-6">
      <Projects />
      {screenSize === "lg" && <Filter />}
    </aside>
  );
};

export default Sidebar;
