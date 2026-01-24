import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    status: "all", // "all" | "pending" | "completed"
    priority: "all", //"high" | "medium" | "low"
    sortBy: "date-asc", // "date-asc" | "date-desc" | "priority"
    selectedProjectId: "", //project -id
  },
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
    setPriorityFilter(state, action) {
      state.priority = action.payload;
    },
    setSortBy(state, action) {
      state.sortBy = action.payload;
    },
    addSelectedProjectId: (state, action) => {
      state.selectedProjectId = action.payload;
    },
    clearFilters: (state) => {
      state.status = "all";
      state.priority = "all";
    },
  },
});

export const {
  setStatusFilter,
  setPriorityFilter,
  setSortBy,
  addSelectedProjectId,
  clearFilters,
} = filtersSlice.actions;
export default filtersSlice.reducer;
