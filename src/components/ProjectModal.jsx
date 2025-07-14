import Modal from "./Modal";
import ModalActions from "./ModalActions";

const ProjectModal = ({
  type,
  isOpen,
  onClose,
  handlerSubmit,
  setColor,
  valueColor,
  valueName,
  setName,
}) => {
  const title = type === "create" ? "Новий проєкт" : "Редагувати проєкт";

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h3 className="text-xl font-bold mb-4 dark:text-gray-300">{title}</h3>

      <form
        id="project-form"
        className="flex flex-col  gap-4  dark:text-gray-300 "
        onSubmit={handlerSubmit}
      >
        <div>
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Назва проекту
          </label>
          <input
            type="text"
            id="project-name"
            className="w-full md:w-96  p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-200"
            value={valueName}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label
            htmlFor="project-color"
            className="block text-sm font-medium mb-1"
          >
            Колір проекту
          </label>
          <input
            type="color"
            id="project-color"
            className="w-full border-gray-300 dark:border-gray-600 md:rounded-lg  md:h-10"
            value={valueColor}
            onChange={(e) => {
              setColor(e.target.value);
            }}
          />
        </div>
      </form>
      <ModalActions
        onCancel={onClose}
        typeConfirm="submit"
        form={"project-form"}
      />
    </Modal>
  );
};

export default ProjectModal;
