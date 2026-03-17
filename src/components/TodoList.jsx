import { useDispatch, useSelector } from "react-redux";

import { selectProjectById } from "../redux/projects/projectSelector";
import { selectFilters } from "../redux/filters/filtersSelector";
import {
  addSelectedProjectId,
  clearFilters,
} from "../redux/filters/filtersSlice";

import TodoItem from "./TodoItem";
import Button from "./ui/Button";
import Filter from "./Filter";
import { useScreenSize } from "../hooks/useScreenSize";
import { useMemo } from "react";

const TodoList = ({ todoList, projects, allTodos }) => {
  const dispatch = useDispatch();
  const screenSize = useScreenSize();

  const isSelectFilters = useSelector(selectFilters);
  const orderProject = useSelector((state) =>
    selectProjectById(state, state.filters.selectedProjectId),
  );

  const projectsMap = useMemo(
    () => Object.fromEntries(projects.map((p) => [p.id, p])),
    [projects],
  );

  if (allTodos.length === 0) {
    return (
      <p className="p-4 text-center text-gray-500">
        Немає завдань. Додайте нове!
      </p>
    );
  }

  if (
    orderProject &&
    todoList.length === 0 &&
    isSelectFilters.priority === "all" &&
    isSelectFilters.status === "all"
  ) {
    return (
      <div className="flex flex-col items-center">
        <p className="p-4 text-center text-gray-500">
          В обраному проєкті відсутні завдання. Додайте завдання.
        </p>
        <ResetProjectButton />
      </div>
    );
  }

  if (
    todoList.length === 0 &&
    (isSelectFilters.priority !== "all" || isSelectFilters.status !== "all")
  ) {
    return (
      <div className="flex flex-col items-center ">
        <p className="p-4 text-center text-gray-500">
          За вашим фільтром - завдань не знайдено.
        </p>

        <Button variant="danger" onClick={() => dispatch(clearFilters())}>
          {" "}
          Скинути фільтр{" "}
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow overflow-hidden">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="font-semibold text-lg flex gap-1 items-center justify-between  ">
          <div>
            <span id="current-project-title">Всі завдання </span>

            {orderProject && (
              <>
                <span> за обраним проєктом </span>
              </>
            )}

            <span
              id="todo-count"
              className="ml-2 text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full"
            >
              {todoList.length}
            </span>
          </div>

          {orderProject && <ResetProjectButton />}
        </div>
        {screenSize !== "lg" && <Filter />}
      </div>

      <ul
        id="todo-list"
        className="lg:max-h-[calc(100vh-26rem)] lg:min-h-[24rem] overflow-y-auto divide-y divide-gray-200 dark:divide-gray-700"
      >
        {todoList.map((todo) => (
          <li
            key={todo.id}
            className="todo-item relative bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
            data-priority={todo.priority}
            data-todo-id={todo.id}
            style={{ borderLeftColor: todo.color, borderLeftWidth: "6px" }}
          >
            <TodoItem
              todo={todo}
              projects={projects}
              project={projectsMap[todo.projectId]}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

export const ResetProjectButton = () => {
  const dispatch = useDispatch();

  return (
    <Button
      variant="danger"
      onClick={() => dispatch(addSelectedProjectId(null))}
    >
      Повернутися до всіх завдань
    </Button>
  );
};
