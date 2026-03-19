import { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "./Modal";
import { selectProjects } from "../redux/projects/projectSelector";
import ModalActions from "./ModalActions";
import TodoFormFields from "./TodoFormFields";

const TodoEditModal = ({ isOpen, onClose, todo, onSave }) => {
  const [title, setTitle] = useState(todo.title);
  const [priority, setPriority] = useState(todo.priority);
  const [color, setColor] = useState(todo.color);
  const [projectId, setProjectId] = useState(todo.projectId);

  const projects = useSelector(selectProjects);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title, priority, color, projectId });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-xl font-bold mb-4 dark:text-gray-300">
        Редагувати завдання
      </h2>

      <TodoFormFields
        prefix="edit"
        showSubmitButton={false}
        title={title}
        setTitle={setTitle}
        priority={priority}
        setPriority={setPriority}
        color={color}
        setColor={setColor}
        projectId={projectId}
        setProjectId={setProjectId}
        onSubmit={handleSubmit}
        projects={projects}
      />
      <ModalActions onCancel={onClose} typeConfirm="submit" form="edit-form" />
    </Modal>
  );
};

export default TodoEditModal;
