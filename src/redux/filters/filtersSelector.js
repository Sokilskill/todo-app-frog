import { createSelector } from "@reduxjs/toolkit";
import { selectTodos } from "../todos/todosSelector";

export const selectFilters = (state) => state.filters;

export const filterTodos = createSelector(
  [selectTodos, selectFilters],
  (todos, filters) => {
    const actualTodos = Array.isArray(todos) ? todos : [];

    if (actualTodos.length === 0) {
      return [];
    }

    let filtered = [...actualTodos];

    if (filters.selectedProjectId) {
      filtered = filtered.filter(
        (todo) => todo.projectId === filters.selectedProjectId
      );
    }

    if (filters.status !== "all") {
      filtered = filtered.filter((todo) =>
        filters.status === "pending" ? !todo.completed : todo.completed
      );
    }

    if (filters.priority !== "all") {
      filtered = filtered.filter((todo) => todo.priority === filters.priority);
    }

    if (filters.sortBy === "date-asc") {
      filtered.sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
    } else if (filters.sortBy === "date-desc") {
      filtered.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    } else if (filters.sortBy === "priority") {
      const priorityOrder = { high: 1, medium: 2, low: 3 };
      filtered.sort(
        (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
      );
    }

    return filtered;
  }
);
