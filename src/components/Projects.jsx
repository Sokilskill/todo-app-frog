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
  const dispatch = useDispatch();

  const [modalConfig, setModalConfig] = useState({
    type: null, // 'create' | 'edit'
    isOpen: false,
    name: "",
    color: "#ffffff",
    projectId: null,
  });

  const orderProject = useSelector((state) => state.filters.selectedProjectId);

  const projects = useSelector(selectProjects);

  const handleSelectProject = useCallback(
    (projectId) => {
      dispatch(addSelectedProjectId(projectId));
    },
    [dispatch]
  );

  const openCreateModal = () => {
    setModalConfig({
      type: "create",
      isOpen: true,
      name: "",
      color: "#ffffff",
      projectId: null,
    });
  };

  const openEditModal = (project) => {
    setModalConfig({
      type: "edit",
      isOpen: true,
      name: project.name,
      color: project.color,
      projectId: project.id,
    });
  };

  const closeModal = () => {
    setModalConfig((prev) => ({ ...prev, isOpen: false }));
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    const { name, color, type, projectId } = modalConfig;

    if (!name.trim()) return;

    if (type === "create") {
      dispatch(addProject({ name, color }));
    } else if (type === "edit") {
      dispatch(updateProject({ id: projectId, name, color }));
    }

    closeModal();
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
            onClick={() => openCreateModal()}
            icon={FaPlus}
          ></Button>
        </div>
      </div>

      <ul className="pr-1.5 space-y-2 overflow-auto max-h-[200px]">
        {projects.map((project) => (
          <li
            key={project.id}
            className="border-b border-gray-200 p-2"
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
                onClick={() => openEditModal(project)}
                icon={FaEdit}
              ></Button>
            </div>
          </li>
        ))}
      </ul>

      <ProjectModal
        type={modalConfig.type}
        isOpen={modalConfig.isOpen}
        onClose={closeModal}
        handlerSubmit={handlerSubmit}
        valueName={modalConfig.name}
        valueColor={modalConfig.color}
        setName={(name) => setModalConfig((prev) => ({ ...prev, name }))}
        setColor={(color) => setModalConfig((prev) => ({ ...prev, color }))}
      />
    </div>
  );
};

export default Projects;
