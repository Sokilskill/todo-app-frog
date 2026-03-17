import { FaTrashAlt, FaEdit } from "react-icons/fa";
import Button from "../ui/Button";

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
