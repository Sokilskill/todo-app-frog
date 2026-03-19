import { useSelector, useDispatch } from "react-redux";
import { selectTodos } from "../../redux/todos/todosSelector";
import {
  filterTodos,
  selectFilters,
} from "../../redux/filters/filtersSelector";
import { selectProjectById } from "../../redux/projects/projectSelector";
import {
  addSelectedProjectId,
  clearFilters,
} from "../../redux/filters/filtersSlice";
import TodoList from "../TodoList";
import TodoSectionHeader from "../todo/TodoSectionHeader";
import EmptyState from "../ui/EmptyState";
import Filter from "../Filter";
import { useScreenSize } from "../../hooks/useScreenSize";
const TodoSection = () => {
  const dispatch = useDispatch();
  const screenSize = useScreenSize();

  const todoList = useSelector(filterTodos);
  const allTodos = useSelector(selectTodos);
  const filters = useSelector(selectFilters);
  const selectedProject = useSelector((state) =>
    selectProjectById(state, state.filters.selectedProjectId),
  );

  if (allTodos.length === 0) {
    return <EmptyState message="Немає завдань. Додайте нове!" />;
  }

  const isOnlyProjectFilter =
    selectedProject && filters.priority === "all" && filters.status === "all";
  if (isOnlyProjectFilter && todoList.length === 0) {
    return (
      <EmptyState
        message="В обраному проєкті відсутні завдання."
        onReset={() => dispatch(addSelectedProjectId(null))}
        resetLabel="Повернутися до всіх завдань"
      />
    );
  }

  if (todoList.length === 0) {
    return (
      <EmptyState
        message="За вашим фільтром завдань не знайдено."
        onReset={() => dispatch(clearFilters())}
      />
    );
  }

  return (
    <div className="space-y-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow overflow-hidden">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <TodoSectionHeader
            count={todoList.length}
            hasProject={!!selectedProject}
            onClick={() => dispatch(addSelectedProjectId(null))}
          />
          {screenSize !== "lg" && <Filter />}
        </div>
        <TodoList todoList={todoList} />
      </div>
    </div>
  );
};

export default TodoSection;
