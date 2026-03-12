import { FaPlus } from "react-icons/fa6";
import Button from "./Button";

const TodoFormFields = ({
  prefix,
  showSubmitButton = true,
  title = "",
  setTitle = () => {},
  priority = "medium",
  setPriority = () => {},
  color = "gray",
  setColor = () => {},
  projectId = "all",
  setProjectId = () => {},
  onSubmit = () => {},
  projects = [],
}) => {
  return (
    <form
      id={`${prefix}-form`}
      className="space-y-3 dark:text-gray-300"
      onSubmit={onSubmit}
    >
      <div className="flex gap-3">
        <label htmlFor={`${prefix}-title`} className="sr-only">
          Назва завдання
        </label>
        <input
          id={`${prefix}-title`}
          type="text"
          placeholder="Назва завдання..."
          className="flex-1 rounded-lg border bg-blue-100 border-gray-300 dark:border-gray-600 dark:bg-gray-700 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          required
        />

        {showSubmitButton && (
          <Button
            type="submit"
            variant="default"
            icon={FaPlus}
            aria-label="Додати нове завдання"
          >
            Додати
          </Button>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div>
          <label
            htmlFor={`${prefix}-project`}
            className="block text-sm font-medium mb-1"
          >
            Проєкт
          </label>
          <select
            id={`${prefix}-project`}
            className="w-full rounded-lg border bg-blue-100 border-gray-300 dark:border-gray-600 dark:bg-gray-700"
            value={projectId}
            onChange={(e) => {
              setProjectId(e.target.value);
            }}
          >
            <option value="all">Без проєкту</option>
            {projects &&
              projects.map((project) => (
                <option key={project.id} value={project.id}>
                  {project.name}
                </option>
              ))}
          </select>
        </div>
        <div>
          <label
            htmlFor={`${prefix}-priority`}
            className="block text-sm font-medium mb-1"
          >
            Пріоритет
          </label>
          <select
            id={`${prefix}-priority`}
            className="w-full rounded-lg border bg-blue-100 border-gray-300 dark:border-gray-600 dark:bg-gray-700"
            value={priority}
            onChange={(e) => {
              setPriority(e.target.value);
            }}
          >
            <option value="low">Низький</option>
            <option value="medium">Середній</option>
            <option value="high">Високий</option>
          </select>
        </div>
        <div>
          <label
            className="block text-sm font-medium mb-1 "
            htmlFor={`${prefix}-color`}
          >
            Колір
          </label>
          <input
            type="color"
            id={`${prefix}-color`}
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
            className="  border-gray-300 dark:border-gray-600 md:rounded-lg w-full md:h-10"
          />
        </div>
      </div>
    </form>
  );
};

export default TodoFormFields;
