import { useDispatch } from "react-redux";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import {
  toggleTodoStatus,
  deleteTodo,
  updateTodo,
} from "../redux/todos/todosSlice";
import { formatTodoDate, getPriorityClass } from "../utils";
import { useState } from "react";
import TodoEditModal from "./TodoEditModal";
import Modal from "./Modal";
import ModalActions from "./ModalActions";
import Button from "./Button";

const TodoItem = ({ todo, project }) => {
  const dispatch = useDispatch();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  let formattedComletedDate;
  const formattedCreatedDate = formatTodoDate(todo.createdAt);
  if (todo.completedAt && todo.completed) {
    formattedComletedDate = formatTodoDate(todo.completedAt);
  }

  const handleOpenEditModal = () => {
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const handleOpenDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const handleSaveEdit = ({ title, priority, color, projectId }) => {
    const updatedItem = {
      id: todo.id,
      title,
      priority,
      color,
      projectId,
    };
    dispatch(updateTodo(updatedItem));
    handleCloseEditModal();
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
    handleCloseDeleteModal();
  };

  return (
    <div className="p-4 flex items-start gap-3">
      <button
        onClick={() => dispatch(toggleTodoStatus(todo.id))}
        data-todo-id={todo.id}
        aria-label={
          todo.completed ? "Завдання виконане" : "Завдання не виконане"
        }
        className={`toggle-status mt-1 flex-shrink-0 h-5 w-5 rounded border-2 ${
          todo.completed
            ? "bg-green-500 border-green-500"
            : "border-gray-300 dark:border-gray-600"
        } transition`}
      />
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start gap-2">
          <h3
            className={`${
              todo.completed ? "line-through text-gray-500" : "font-medium"
            } break-words`}
            data-todo-id={todo.id}
          >
            {todo.title}
          </h3>

          <TodoActionButtons
            onClickEdit={handleOpenEditModal}
            onClickDelete={handleOpenDeleteModal}
            todoId={todo.id}
          />
        </div>

        <div className="mt-2 flex flex-col items-start justify-start  gap-2">
          <div className=" flex flex-wrap items-center gap-2">
            <span
              className={`px-2 py-1 w-[46px] text-center text-xs rounded-full p ${getPriorityClass(
                todo.priority
              )}`}
            >
              {todo.priority}
            </span>

            <span className="text-xs text-gray-500 dark:text-gray-400">
              {formattedCreatedDate}{" "}
              {todo.completedAt && todo.completed && (
                <span>- {formattedComletedDate}</span>
              )}
            </span>
          </div>
          {project && (
            <span
              className="px-2 py-1 text-xs rounded-full"
              style={{ backgroundColor: project.color, color: "#fff" }}
            >
              {project.name}
            </span>
          )}
        </div>
      </div>
      <TodoEditModal
        isOpen={isEditModalOpen}
        onClose={handleCloseEditModal}
        todo={todo}
        onSave={handleSaveEdit}
      />

      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={handleCloseDeleteModal}
        onConfirm={handleDelete}
      />
    </div>
  );
};

export default TodoItem;

export const DeleteModal = ({ isOpen, onClose, onConfirm }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col justify-center max-w-[400px] text-gray-900 min-w dark:text-white p-5 gap-3 md:gap-8">
        <h3 className="text-xl sm:text-2xl font-bold ">
          Задання буде видалено!
        </h3>

        <ModalActions
          onCancel={onClose}
          onConfirm={onConfirm}
          confirmLabel="Видалити"
          confirmVariant="danger"
        />
      </div>
    </Modal>
  );
};

export const TodoActionButtons = ({ onClickEdit, onClickDelete, todoId }) => {
  return (
    <div className="flex gap-1">
      <Button
        variant="icon"
        size="icon"
        data-todo-id={todoId}
        aria-label="Редагувати завдання"
        onClick={onClickEdit}
        icon={FaEdit}
      ></Button>

      <Button
        className=" hover:text-red-500"
        variant="icon"
        size="icon"
        data-todo-id={todoId}
        aria-label="Видалити завдання"
        onClick={onClickDelete}
        icon={FaTrashAlt}
      ></Button>
    </div>
  );
};
