import Button from "../ui/Button";

const TodoSectionHeader = ({ count, hasProject, onClick, resetLabel }) => {
  return (
    <div className="font-semibold text-lg flex gap-1 items-center justify-between  ">
      <div>
        <span id="current-project-title">Всі завдання </span>

        {hasProject && (
          <>
            <span> за обраним проєктом </span>
          </>
        )}

        <span
          id="todo-count"
          className="ml-2 text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full"
        >
          {count}
        </span>
      </div>

      {hasProject && (
        <Button variant="danger" onClick={onClick}>
          {resetLabel || "Повернутися до всіх завдань"}
        </Button>
      )}
    </div>
  );
};

export default TodoSectionHeader;
