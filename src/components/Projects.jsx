import { useCallback, useState } from "react";
import { FaPlus, FaEdit } from "react-icons/fa";
import ProjectModal from "./ProjectModal";
import { useDispatch, useSelector } from "react-redux";
import { selectProjects } from "../redux/projects/projectSelector";
import { addSelectedProjectId } from "../redux/filters/filtersSlice";
import { addProject, updateProject } from "../redux/projects/projectsSlice";

import Button from "./Button";
import ThemeToggle from "./ThemeToggle";

const Projects = () => {
  const [color, setColor] = useState("#ffffff");
  const [name, setName] = useState("");
  const [idProject, setIdProject] = useState("");

  const [showCreateNewProjectModal, setShowCreateNewProjectModal] =
    useState(false);
  const [showEditProjectModal, setShowEditProjectModal] = useState(false);

  const orderProject = useSelector((state) => state.filters.selectedProjectId);

  const projects = useSelector(selectProjects);

  const dispatch = useDispatch();

  const handleSelectProject = useCallback(
    (projectId) => {
      dispatch(addSelectedProjectId(projectId));
    },
    [dispatch]
  );

  const closeEditProjectModal = () => {
    setShowEditProjectModal(false);
  };
  const closeCreateNewProjectModal = () => {
    setShowCreateNewProjectModal(false);
  };

  const handlerEditProject = (e) => {
    e.preventDefault();
    if (name) {
      dispatch(updateProject({ name, color, id: idProject }));
    }
    setName("");
    closeEditProjectModal();
  };

  const handlerAddNewProject = (e) => {
    e.preventDefault();
    if (name) {
      dispatch(
        addProject({
          name,
          color,
        })
      );
      setName("");
      closeCreateNewProjectModal();
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-lg">Проекти</h2>

        <div className="flex gap-1">
          <ThemeToggle size="icon" />

          <Button
            className="text-blue-500 hover:text-blue-700"
            size="icon"
            aria-label="Додати новий проєкт"
            onClick={() => setShowCreateNewProjectModal(true)}
            icon={FaPlus}
          ></Button>
        </div>
      </div>

      <ul className="space-y-2 overflow-auto max-h-[200px]">
        {projects.map((project) => (
          <li
            key={project.id}
            className="border-b border-gray-200 p-2 cursor-pointer"
            style={{
              borderLeftColor: project.color,
              borderLeftWidth: "6px",
              borderRadius: "8px",
              backgroundColor: orderProject === project.id ? "#ef0000d1" : "",
            }}
          >
            <div className="flex justify-between">
              <button
                className="flex-1 flex justify-start text-left    "
                onClick={() => handleSelectProject(project.id)}
              >
                <p>{project.name}</p>
              </button>

              <Button
                variant="icon"
                size="icon"
                data-todo-id={project.id}
                aria-label="Редагувати проєкт"
                onClick={() => {
                  setName(project.name);
                  setColor(project.color);
                  setIdProject(project.id);
                  setShowEditProjectModal(true);
                }}
                icon={FaEdit}
              ></Button>
            </div>
          </li>
        ))}
      </ul>

      <ProjectModal
        title={"Редагувати проєкт"}
        isOpen={showEditProjectModal}
        onClose={closeEditProjectModal}
        handlerSubmit={handlerEditProject}
        setName={setName}
        setColor={setColor}
        valueName={name}
        valueColor={color}
      />
      <ProjectModal
        title={"Новий проєкт"}
        isOpen={showCreateNewProjectModal}
        onClose={closeCreateNewProjectModal}
        handlerSubmit={handlerAddNewProject}
        setName={setName}
        setColor={setColor}
        valueName={name}
        valueColor={color}
      />
    </div>
  );
};

export default Projects;
