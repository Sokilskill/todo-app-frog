import { useSelector } from "react-redux";

import { selectProjects } from "../redux/projects/projectSelector";

import TodoItem from "./TodoItem";
import { useMemo } from "react";

const TodoList = ({ todoList }) => {
  const projects = useSelector(selectProjects);

  const projectsMap = useMemo(
    () => Object.fromEntries(projects.map((p) => [p.id, p])),
    [projects],
  );

  return (
    <ul
      id="todo-list"
      className="lg:max-h-[calc(100vh-26rem)] lg:min-h-[24rem] overflow-y-auto divide-y divide-gray-200 dark:divide-gray-700"
    >
      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          projects={projects}
          project={projectsMap[todo.projectId]}
        />
      ))}
    </ul>
  );
};

export default TodoList;
