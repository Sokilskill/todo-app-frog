import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

import { useSelector } from "react-redux";
import { selectProjects } from "./redux/projects/projectSelector";
import { filterTodos } from "./redux/filters/filtersSelector";
import { selectTodos } from "./redux/todos/todosSelector";

function App() {
  const projects = useSelector(selectProjects);
  const filteredTodos = useSelector(filterTodos);
  const allTodos = useSelector(selectTodos);

  return (
    <>
      <div className=" min-h-screen bg-gray-100 text-gray-800 dark:bg-[#0f172a] dark:text-gray-200">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <Header />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <Sidebar />
            <main className="lg:col-span-3 space-y-6">
              <AddTodoForm />
              <TodoList
                todoList={filteredTodos}
                allTodos={allTodos}
                projects={projects}
              />
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
