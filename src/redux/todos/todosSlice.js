import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: [
    // {
    //   id: string,
    //   projectId: string,
    //   title: string,
    //   color: string,
    //   priority: "low" | "medium" | "high"
    //   completed: true | false
    //   createdAt: "2025-06-24T12:14:58.004Z",
    //   updatedAt: "30.06.2025",
    //   completedAt: "2025-06-28T10:09:36.284Z",
    // },
  ],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now().toString(),
        projectId: action.payload.projectId,
        title: action.payload.title,
        color: action.payload.color,
        priority: action.payload.priority,
        completed: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      state.push(newTodo);
    },

    toggleTodoStatus: (state, action) => {
      const todo = state.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        todo.updatedAt = new Date().toISOString();
      }
      if (todo.completed) {
        todo.completedAt = new Date().toISOString();
      } else {
        delete todo.completedAt;
      }
    },

    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },

    updateTodo: (state, action) => {
      const { id, title, color, priority, projectId } = action.payload;
      const todo = state.find((t) => t.id === id);
      if (todo) {
        if (title !== undefined) todo.title = title;
        if (color !== undefined) todo.color = color;
        if (priority !== undefined) todo.priority = priority;
        if (projectId !== undefined) todo.projectId = projectId;
        todo.updatedAt = new Date().toISOString();
      }
    },
  },
});

export const { addTodo, toggleTodoStatus, deleteTodo, updateTodo } =
  todosSlice.actions;
export default todosSlice.reducer;
