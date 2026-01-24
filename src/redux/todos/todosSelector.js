export const selectTodos = (state) => state.todos;

export const selectTodosByProjectId = (state, projectId) =>
  state.todos.filter((todo) => todo.projectId === projectId);
export const selectTodosByProject = (projectId) => (state) => {
  if (projectId === "all") {
    return state.todos;
  }
  return state.todos.filter((todo) => todo.projectId === projectId);
};
